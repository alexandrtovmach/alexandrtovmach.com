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
