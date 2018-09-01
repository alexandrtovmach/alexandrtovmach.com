import React from "react";

import PortfolioProjectTextComponent from "../PortfolioComponents/PortfolioTextComponent/PortfolioText";
import DevicesComponent from "../PortfolioComponents/PortfolioDevicesComponent/PortfolioDevices";

export default class MainPortfolioComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this.props.getAllByCategory("portfolio", 1).then(project => {
      this.setState({
        project: project[0]
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  render() {
    return (
      <div className="main-portfolio">
        <div className="overlapperForSupportTouchEvent" />
        <div className="portfolio-text-block">
          <h2>{this.props.langPack.portfolio_head}</h2>
          <PortfolioProjectTextComponent
            project={this.state.project}
            locale={this.props.locale}
          />
          <a
            href="/portfolio"
            className="button"
            title={this.props.langPack.portfolio}
          >
            {this.props.langPack.more}
          </a>
        </div>
        <div className="portfolio-devices-container">
          <DevicesComponent
            project={this.state.project}
            isEqual={this.props.isEqual}
          />
        </div>
      </div>
    );
  }
}
