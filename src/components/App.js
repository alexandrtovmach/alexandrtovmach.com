import React from "react";
import classnames from "classnames";

import Header from "./Header";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { themeChecked: false };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
 
  handleThemeChange(themeChecked) {
    this.setState({ themeChecked });
  }

  render() {
    return (
      <div className={classnames("app-container", {
        "dark-theme": this.state.themeChecked, 
        "light-theme": !this.state.themeChecked, 
      })}>
        <Header handleThemeChange={this.handleThemeChange} themeChecked={this.state.themeChecked} />
        <div className="hidden-header"></div>
        We are started development
      </div>
    );
  }
}
