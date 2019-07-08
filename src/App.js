import React from "react";
import classNames from "classnames";

import Router from "./Router";
import Header from "./components/Header/Header";
import {
  getThemeConfig,
  detectTheme,
  updateMetaTagsTheme
} from "./services/theme";
import {
  getLanguage,
  getTranslations,
  updateLangTag
} from "./services/language";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: getLanguage(),
      theme: detectTheme(),
      redirect: false
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  componentDidMount() {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    updateMetaTagsTheme(this.state.theme.mainColor);
    updateLangTag(this.state.locale);
  }

  componentDidUpdate() {
    updateMetaTagsTheme(this.state.theme.mainColor);
    updateLangTag(this.state.locale);
  }

  handleThemeChange(light) {
    this.setState({
      theme: getThemeConfig(light)
    });
  }

  handleLanguageChange(lang) {
    window.localStorage.setItem("user_language", lang);
    this.setState({
      locale: lang
    });
  }

  render() {
    const { theme, locale } = this.state;
    const langPack = getTranslations(locale);
    return (
      <div className={classNames("app-container", theme.name)}>
        <Header
          handleThemeChange={this.handleThemeChange}
          handleLanguageChange={this.handleLanguageChange}
          theme={theme}
          langPack={{ ...langPack, ...langPack["Header"] }}
        />
        <Router theme={theme} langPack={langPack} />
      </div>
    );
  }
}
