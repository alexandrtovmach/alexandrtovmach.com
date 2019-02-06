import React from "react";

import SkillsChart from "./SkillsChart";

export default class MainAboutComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      skillsData: {}
    };

    this.onTooltipUpdate = this.onTooltipUpdate.bind(this);
    // this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.props.getAllByCategory("skills").then(skills_data => {
      this.setState({
        skillsData: skills_data
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  calcHowOldIAm(yearWord) {
    const yearDiff = Math.floor(
      (new Date() - new Date(1995, 9, 2)) / (1000 * 60 * 60 * 24 * 365)
    );
    return yearDiff.toString().slice(-1) === "1"
      ? `${yearDiff} ${yearWord.one}`
      : `${yearDiff} ${yearWord.many}`;
  }

  onTooltipUpdate(content) {
    this.skillsTooltipRef.innerHTML = content;
  }

  // onSelect(event){
  //   console.log(event);
  // }

  render() {
    return (
      <div className="main-about">
        <div className="about-text-block">
          <h2>{this.props.langPack.about_head}</h2>
          <p>
            {this.props.langPack.about_text_p1}
            &nbsp;
            {this.calcHowOldIAm(this.props.langPack.years)}. &nbsp;
            {this.props.langPack.about_text_p2}
            &nbsp;
            <span
              ref={ref => (this.skillsTooltipRef = ref)}
              className="toltip-name"
            >
              {this.props.langPack.many}
            </span>
            <br />
            {this.props.langPack.about_text_p3}
          </p>
          {/* <a href="/about" className="button" title={this.props.langPack.about}>
            {this.props.langPack.details}
          </a> */}
        </div>
        <SkillsChart
          data={this.state.skillsData[this.props.locale]}
          // onSelect={this.onSelect}
          onTooltipUpdate={this.onTooltipUpdate}
          scale="linear"
          keyId="skillsChart"
          isEqual={this.props.isEqual}
        />
      </div>
    );
  }
}
