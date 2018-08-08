import React from "react";
import classnames from "classnames";
import { Switch, Route, Router } from "react-router-dom";
import history from "../services/routerHistory";
// import screenfull from "screenfull";

import Header from "./HeaderComponent/Header";
import Main from "./MainPage/Main";
import MainBackground from './MainPage/common/MainBackground';
import About from "./AboutPage/About";
import AboutBackground from './AboutPage/AboutBackground';
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
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={
              () => (
                <div className="page">
                  <MainBackground />
                  <Main
                    theme={ this.state.theme }
                    langPack={ getTranslations(this.state.locale, "Main") }
                    locale={ this.state.locale }
                    navigationLangPack={ getTranslations(this.state.locale, "Navigation") }
                    calendarLangPack={ getTranslations(this.state.locale, "CalendarComponent") }
                  />
                </div>
              )
            }/>
            <Route exact path="/about" render={
              () => (
                <div className="page">
                  <AboutBackground />
                  <About 
                    langPack={ getTranslations(this.state.locale, "About") }
                  />
                </div>
              )
            } />
            <Route path="/calendar" render={
              () => (
                <Calendar 
                  langPack={ getTranslations(this.state.locale, "Calendar") }
                />
              )
            } />
            <Route path="/portfolio" render={
              () => (
                <Portfolio 
                  langPack={ getTranslations(this.state.locale, "Portfolio") }
                />
              )
            } />
            <Route path="/blog" render={
              () => (
                <Blog 
                  langPack={ getTranslations(this.state.locale, "Blog") }
                />
              )
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}
