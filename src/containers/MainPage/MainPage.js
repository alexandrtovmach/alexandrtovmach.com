import React from "react";
import isEqual from "lodash.isequal";

import MainBackground from "../../components/MainPage/MainBackground";
import Navigation from "../../components/MainPage/Navigation";
import asyncComponent from "../../AsyncComponent";

import { getAllByCategory } from "../../services/api/firebase";

import "./MainPage.scss";

const MainAbout = asyncComponent(() =>
  import("../../components/MainPage/MainAbout")
);
const MainCalendar = asyncComponent(() =>
  import("../../components/MainPage/MainCalendar")
);
const MainPortfolio = asyncComponent(() =>
  import("../../components/MainPage/MainPortfolio")
);
const MainBlog = asyncComponent(() =>
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
      <MainAbout
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
      <MainCalendar langPack={langPack} isEqual={isEqual} />
      <MainPortfolio
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
      <MainBlog
        langPack={langPack}
        getAllByCategory={getAllByCategory}
        isEqual={isEqual}
      />
    </Navigation>
  </div>
);
