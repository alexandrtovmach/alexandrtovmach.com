import React from "react";
import classnames from "classnames";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className={classnames("")}>{this.props.langPack.portfolio}</div>
    );
  }
}