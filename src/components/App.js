import React from "react";
import classnames from "classnames";

import Header from "./Header";
import Main from "./MainPage/Main";
import { getThemeConfig, detectTheme } from '../services/theme';
import { getLanguage, getTranslations } from '../services/language';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: getLanguage(),
      theme: detectTheme()
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
 
  handleThemeChange(light) {
    this.setState({
      theme: getThemeConfig(light)
    });
  }
 
  handleLanguageChange(lang) {
    this.setState({
      locale: lang
    });
  }

  render() {
    return (
      <div className={classnames("app-container", this.state.theme.name)}>
        <Header
          handleThemeChange={this.handleThemeChange}
          handleLanguageChange={this.handleLanguageChange}
          theme={ this.state.theme }
          locale={ this.state.locale }
          langPack={ getTranslations(this.state.locale, "Header") }
        />
        <div className="hidden-header"></div>
        <Main 
          langPack={ getTranslations(this.state.locale, "Main") }
        />
      </div>
    );
  }
}
