import React from "react";
import isEqual from "lodash.isequal";

import MainBackground from "../../containers/MainPage/Background";
import Navigation from "../../containers/MainPage/Navigation";
import asyncComponent from "../../AsyncComponent";

import { getAllByCategory } from "../../services/api/firebase";

import "./MainPage.scss";

const MainHome = asyncComponent(() => import("../../containers/MainPage/HomeSection"));
const MainAbout = asyncComponent(() => import("../../containers/MainPage/AboutSection"));
const MainCalendar = asyncComponent(() => import("../../containers/MainPage/CalendarSection"));
const MainPortfolio = asyncComponent(() => import("../../containers/MainPage/PortfolioSection"));
const MainBlog = asyncComponent(() => import("../../containers/MainPage/BlogSection"));

const MainPage = ({ langPack, theme }) => (
  <div className="page">
    <MainBackground />
    <Navigation theme={theme} langPack={langPack}>
      <MainHome langPack={langPack} isEqual={isEqual} />
      <MainAbout langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
      <MainCalendar langPack={langPack} isEqual={isEqual} />
      <MainPortfolio langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
      <MainBlog langPack={langPack} getAllByCategory={getAllByCategory} isEqual={isEqual} />
    </Navigation>
  </div>
);

export default MainPage;
