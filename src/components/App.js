import React from "react";
import classnames from "classnames";

import Header from "./Header";

export default class App extends React.Component {
  render() {
    return (
      <div className={classnames("app-container", {
        "dark-theme": true, 
        "light-theme": false, 
      })}>
        <Header />
        We are started development
      </div>
    );
  }
}
