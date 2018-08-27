import React from "react";
import isEqual from "lodash.isequal";

import MainBackground from "../components/MainPageComponents/MainBackground";
import Navigation from "../components/MainPageComponents/Navigation";

import { getAllByCategory } from "../services/api/firebase";

import asyncComponent from "../AsyncComponent";
const MainAboutComponent = asyncComponent(() =>
  import("../components/MainPageComponents/MainAbout")
);
const MainCalendarComponent = asyncComponent(() =>
  import("../components/MainPageComponents/MainCalendar")
);
const MainPortfolioComponent = asyncComponent(() =>
  import("../components/MainPageComponents/MainPortfolio")
);
const MainBlogComponent = asyncComponent(() =>
  import("../components/MainPageComponents/MainBlog")
);

export default class MainPageContainer extends React.Component {
  render() {
    return (
      <div className="page">
        <MainBackground />
        <Navigation
          theme={this.props.theme}
          langPack={this.props.langPack.Navigation}
        >
          <div className="main-index">
            <span>{this.props.langPack.welcome_head}</span>
            <h1>{this.props.langPack.welcome_text}</h1>
          </div>
          <MainAboutComponent
            langPack={this.props.langPack}
            locale={this.props.locale}
            getAllByCategory={getAllByCategory}
            isEqual={isEqual}
          />
          <MainCalendarComponent
            langPack={this.props.langPack}
            calendarLangPack={this.props.calendarLangPack}
            isEqual={isEqual}
          />
          <MainPortfolioComponent
            langPack={this.props.langPack}
            locale={this.props.locale}
            getAllByCategory={getAllByCategory}
            calendarLangPack={this.props.calendarLangPack}
            isEqual={isEqual}
          />
          <MainBlogComponent
            langPack={this.props.langPack}
            locale={this.props.locale}
            getAllByCategory={getAllByCategory}
            isEqual={isEqual}
          />
        </Navigation>
      </div>
    );
  }
}
