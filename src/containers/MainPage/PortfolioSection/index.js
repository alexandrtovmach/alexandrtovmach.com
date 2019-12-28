import React from "react";

import PortfolioProjectTextComponent from "../../../components/Portfolio/PortfolioText/PortfolioText";
import DevicesComponent from "../../../components/Portfolio/PortfolioDevices/PortfolioDevices";

import "./Portfolio.scss";

export default class MainPortfolioComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      projectList: [],
      activeProjectId: 0
    };
  }

  componentDidMount() {
    this.props.getAllByCategory("portfolio").then(list => {
      this.setState({
        projectList: list
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.props.isEqual(this.state, nextState) || !this.props.isEqual(this.props, nextProps);
  }

  handleHoverProject = projectIdx => () => {
    this.setState({
      activeProjectId: projectIdx
    });
  };

  render() {
    const { langPack, isEqual } = this.props;
    const { activeProjectId, projectList } = this.state;
    return (
      <div className="main-portfolio">
        <div className="overlapperForSupportTouchEvent" />
        <div className="portfolio-text-block">
          <h2 className="h1">{langPack.portfolio_head}</h2>
          {projectList &&
            projectList
              .slice(0, 3)
              .map((el, i) => (
                <PortfolioProjectTextComponent
                  key={`project-text-${i}`}
                  project={el}
                  locale={langPack._locale}
                  idx={i}
                  isActive={activeProjectId === i}
                  onHover={this.handleHoverProject}
                />
              ))}
          {/* <a
            href="/portfolio"
            className="button"
            title={langPack.portfolio}
          >
            {langPack.more}
          </a> */}
        </div>
        <div className="portfolio-devices-container">
          {projectList && projectList[activeProjectId] && (
            <DevicesComponent project={projectList[activeProjectId]} isEqual={isEqual} />
          )}
        </div>
      </div>
    );
  }
}
