import React from "react";
import classnames from "classnames";

import BackgroundMain from './BackgroundMain';
import Navigation from '../Navigation';

export default class Main extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className={classnames("main")}>
        <BackgroundMain
          theme={this.props.theme}
        />
        <Navigation>
          <span>{this.props.langPack.welcome} 1</span>
          <span>{this.props.langPack.welcome} 2</span>
          <span>{this.props.langPack.welcome} 3</span>
          <span>{this.props.langPack.welcome} 4</span>
        </Navigation>
      </div>
    );
  }
}