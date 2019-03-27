import React from "react";

import PortfolioProjectTextComponent from "../PortfolioComponents/PortfolioTextComponent/PortfolioText";
import DevicesComponent from "../PortfolioComponents/PortfolioDevicesComponent/PortfolioDevices";

export default class MainPortfolioComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      project: null
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
    const { langPack, isEqual } = this.props;
    const { project } = this.state;
    return (
      <div className="main-portfolio">
        <div className="overlapperForSupportTouchEvent" />
        <div className="portfolio-text-block">
          <h2>{langPack.portfolio_head}</h2>
          {project && (
            <PortfolioProjectTextComponent
              project={project}
              locale={langPack._locale}
            />
          )}
          {/* <a
            href="/portfolio"
            className="button"
            title={langPack.portfolio}
          >
            {langPack.more}
          </a> */}
        </div>
        <div className="portfolio-devices-container">
          {project && <DevicesComponent project={project} isEqual={isEqual} />}
        </div>
      </div>
    );
  }
}
