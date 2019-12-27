import React from "react";
import * as d3 from "d3";

import "./SkillsChart.scss";

export default class SkillsChart extends React.Component {
  state = {
    gWidth: 0,
    gHeight: 0
  };
  chartRef = React.createRef();

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        gWidth: this.chartRef.current.clientWidth,
        gHeight: this.chartRef.current.clientHeight
      });
      this.renderSunburst(this.props);
    });
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isEqual(prevProps, this.props)) {
      this.renderSunburst(this.props);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.props.isEqual(this.state, nextState) || !this.props.isEqual(this.props, nextProps);
  }

  arcTweenData(a, i, node, x, arc) {
    const oi = d3.interpolate({ x0: a.x0s ? a.x0s : 0, x1: a.x1s ? a.x1s : 0 }, a);
    const tween = t => {
      const b = oi(t);
      a.x0s = b.x0;
      a.x1s = b.x1;
      return arc(b);
    };
    if (i === 0) {
      const xd = d3.interpolate(x.domain(), [node.x0, node.x1]);
      return t => {
        x.domain(xd(t));
        return tween(t);
      };
    } else {
      return tween;
    }
  }
  update(root, svg, partition, x, y, radius, arc, node) {
    this.isBuilded = true;
    const arcTweenZoom = d => {
      const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
        yd = d3.interpolate(y.domain(), [d.y0, 1]),
        yr = d3.interpolate(y.range(), [d.y0 ? 40 : 0, radius]);
      return (data, i) => {
        if (i) {
          return () => arc(data);
        } else {
          return t => {
            x.domain(xd(t));
            y.domain(yd(t)).range(yr(t));
            return arc(data);
          };
        }
      };
    };
    const click = d => {
      node = d;
      this.props.onSelect && this.props.onSelect(d);
      svg
        .selectAll("path")
        .transition()
        .duration(1000)
        .attrTween("d", arcTweenZoom(d));
    };
    svg
      .selectAll("path")
      .data(partition(root).descendants())
      .enter()
      .append("path")
      .style("fill", "transparent")
      .attr("stroke", "rgb(255, 215, 0)")
      .attr("stroke-width", "2")
      .on("click", d => click(d))
      .on("mouseover", (d, i, arr) => {
        arr[i].style.fill = "rgb(255, 215, 0)";
        this.props.onTooltipUpdate(d.data.name);
        return null;
      })
      .on("mouseout", (d, i, arr) => {
        arr[i].style.fill = "transparent";
        return null;
      });
    svg
      .selectAll("path")
      .transition()
      .duration(1000)
      .attrTween("d", (d, i) => this.arcTweenData(d, i, node, x, arc));
  }
  renderSunburst(props) {
    requestAnimationFrame(() => {
      if (props.data) {
        const { gWidth, gHeight } = this.state;
        const radius = Math.min(gWidth, gHeight) / 2 - 10;
        const x = d3.scaleLinear().range([0, 2 * Math.PI]);
        const y = props.scale === "linear" ? d3.scaleLinear().range([0, radius]) : d3.scaleSqrt().range([0, radius]);
        const partition = d3.partition();
        const arc = d3
          .arc()
          .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
          .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
          .innerRadius(d => Math.max(0, y(d.y0)))
          .outerRadius(d => Math.max(0, y(d.y1)));
        const rootData = d3.hierarchy(props.data);
        const node = rootData;
        rootData.sum(d => d.size);

        if (!this.isBuilded) {
          const svg = d3
            .select(`#${this.props.keyId}-svg`)
            .append("g")
            .attr("transform", `translate(${gWidth / 2},${gHeight / 2})`);
          this.update(rootData, svg, partition, x, y, radius, arc, node);
        } else {
          const svg = d3.select(`#${this.props.keyId}-svg`).select("g");
          this.update(rootData, svg, partition, x, y, radius, arc, node);
        }
      }
    });
  }

  render() {
    return (
      <div ref={this.chartRef} id={this.props.keyId}>
        <svg id={`${this.props.keyId}-svg`} />
      </div>
    );
  }
}
