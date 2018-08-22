import React from "react";
import classNames from "classnames";

import Router from "./Router";
import Header from "./components/HeaderComponent/Header";
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
    return (
      <div className={classNames("app-container", this.state.theme.name)}>
        <Header
          handleThemeChange={this.handleThemeChange}
          handleLanguageChange={this.handleLanguageChange}
          theme={this.state.theme}
          locale={this.state.locale}
          langPack={getTranslations(this.state.locale, "Header")}
        />
        <Router
          theme={this.state.theme}
          langPack={getTranslations(this.state.locale)}
          locale={this.state.locale}
        />
      </div>
    );
  }
}
