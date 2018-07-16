import React from "react";
import classnames from "classnames";

import Navigation from '../Navigation';

export default class Main extends React.Component {

  render() {
    return (
      <Navigation
        theme={ this.props.theme }
        langPack={ this.props.navigationLangPack }
      >
        <div className={classnames("page main-index")}>
          <span>{this.props.langPack.welcome}</span>
          <h1>{this.props.langPack.welcome_text}</h1>
        </div>
        <div className={classnames("page main-about")}>
          <a href="/about">{this.props.langPack.about}</a>
        </div>
        <div className={classnames("page main-calendar")}>
          <a href="/calendar">{this.props.langPack.calendar}</a>
        </div>
        <div className={classnames("page main-portfolio")}>
          <a href="/portfolio">{this.props.langPack.portfolio}</a>
        </div>
        <div className={classnames("page main-blog")}>
          <a href="/blog">{this.props.langPack.blog}</a>
        </div>
      </Navigation>
    );
  }
}