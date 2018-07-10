import React from "react";
import classnames from "classnames";

export default class Main extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className={classnames("main")}>
        {this.props.langPack.welcome}
      </div>
    );
  }
}
