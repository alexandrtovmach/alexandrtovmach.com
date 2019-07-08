import React from "react";
import isEqual from "lodash.isequal";

import MainBackground from "../../components/MainPage/MainBackground";
import Navigation from "../../components/MainPage/Navigation";
import asyncComponent from "../../AsyncComponent";

import { getAllByCategory } from "../../services/api/firebase";

import "./MainPage.scss";

const MainAboutComponent = asyncComponent(() =>
  import("../../components/MainPage/MainAbout")
);
const MainCalendarComponent = asyncComponent(() =>
  import("../../components/MainPage/MainCalendar")
);
const MainPortfolioComponent = asyncComponent(() =>
  import("../../components/MainPage/MainPortfolio")
);
const MainBlogComponent = asyncComponent(() =>
  import("../../components/MainPage/MainBlog")
);

export default ({ langPack, theme }) => (
  <div className="page">
    <MainBackground />
    <Navigation theme={theme} langPack={langPack}>
      <div className="main-index">
        <span>{langPack.welcome_head}</span>
        <h1>{langPack.welcome_text}</h1>
      </div>
      <MainAboutComponent
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
      <MainCalendarComponent langPack={langPack} isEqual={isEqual} />
      <MainPortfolioComponent
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
      <MainBlogComponent
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
    </Navigation>
  </div>
);
