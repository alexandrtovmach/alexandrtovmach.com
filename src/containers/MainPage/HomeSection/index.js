import React from "react";

import "./Home.scss";

export default class MainPortfolioComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.isEqual(this.props, nextProps);
  }

  render() {
    const { langPack } = this.props;
    return (
      <div className="main-home">
        <span>{langPack.welcome_head}</span>
        <h1>{langPack.welcome_text}</h1>
      </div>
    );
  }
}
