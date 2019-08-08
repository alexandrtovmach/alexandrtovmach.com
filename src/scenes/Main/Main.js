import React from "react";
import isEqual from "lodash.isequal";

import MainBackground from "../../containers/Main/Background";
import Navigation from "../../containers/Main/Navigation";
import asyncComponent from "../../AsyncComponent";

import { getAllByCategory } from "../../services/api/firebase";

import "./MainPage.scss";

const MainAbout = asyncComponent(() => import("../../containers/Main/About"));
const MainCalendar = asyncComponent(() => import("../../containers/Main/Calendar"));
const MainPortfolio = asyncComponent(() => import("../../containers/Main/Portfolio"));
const MainBlog = asyncComponent(() => import("../../containers/Main/Blog"));

const MainPage = ({ langPack, theme }) => (
  <div className="page">
    <MainBackground />
    <Navigation theme={theme} langPack={langPack}>
      <div className="main-index">
        <span>{langPack.welcome_head}</span>
        <h1>{langPack.welcome_text}</h1>
      </div>
      <MainAbout langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
      <MainCalendar langPack={langPack} isEqual={isEqual} />
      <MainPortfolio langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
      <MainBlog langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
    </Navigation>
  </div>
);

export default MainPage;
