import React from "react";
import classnames from "classnames";

import Header from "./Header";
import { getThemeConfig, detectTheme } from '../services/theme';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: detectTheme()
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
 
  handleThemeChange(light) {
    this.setState({
      theme: getThemeConfig(light)
    });
  }

  render() {
    return (
      <div className={classnames("app-container", this.state.theme.name)}>
        <Header handleThemeChange={this.handleThemeChange} theme={ this.state.theme } />
        <div className="hidden-header"></div>
        We are started development
      </div>
    );
  }
}
