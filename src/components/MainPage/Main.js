import React from "react";
import classnames from "classnames";

export default class Main extends React.Component {

  render() {
    return (
      <div className={classnames("main")}>
        <span>{this.props.langPack.welcome}</span>
        <h1>{this.props.langPack.welcome_text}</h1>
      </div>
    );
  }
}