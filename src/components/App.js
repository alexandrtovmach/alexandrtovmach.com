import React from "react";
import classnames from "classnames";
// import screenfull from "screenfull";

import Header from "./Header";
import Navigation from './Navigation';
import Main from "./MainPage/Main";
import About from "./AboutPage/About";
import Calendar from "./CalendarPage/Calendar";
import Portfolio from "./PortfolioPage/Portfolio";
import Blog from "./BlogPage/Blog";
import { getThemeConfig, detectTheme, updateMetaTagsTheme } from '../services/theme';
import { getLanguage, getTranslations, updateLangTag } from '../services/language';

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
      <div className={classnames("app-container", this.state.theme.name)}>
        <Header
          handleThemeChange={this.handleThemeChange}
          handleLanguageChange={this.handleLanguageChange}
          theme={ this.state.theme }
          locale={ this.state.locale }
          langPack={ getTranslations(this.state.locale, "Header") }
        />
        <Navigation
          langPack={ getTranslations(this.state.locale, "Navigation") }
        >
          <Main
            theme={ this.state.theme }
            langPack={ getTranslations(this.state.locale, "Main") }
          />
          <About 
            langPack={ getTranslations(this.state.locale, "About") }
          />
          <Calendar  
            langPack={ getTranslations(this.state.locale, "Calendar") }
          />
          <Portfolio  
            langPack={ getTranslations(this.state.locale, "Portfolio") }
          />
          <Blog  
            langPack={ getTranslations(this.state.locale, "Blog") }
          />
        </Navigation>
      </div>
    );
  }
}
