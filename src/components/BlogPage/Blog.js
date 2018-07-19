import React from "react";
import classnames from "classnames";

export default class Blog extends React.Component {
  render() {
    return (
      <div className={classnames("")}>
        {this.props.langPack.blog}
      </div>
    );
  }
}