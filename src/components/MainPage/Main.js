import React from "react";
import classnames from "classnames";

// import BackgroundMain from './BackgroundMain';

export default class Main extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className={classnames("main")}>
        {/* <BackgroundMain
          theme={this.props.theme}
        /> */}
        <span>{this.props.langPack.welcome}</span>
      </div>
    );
  }
}