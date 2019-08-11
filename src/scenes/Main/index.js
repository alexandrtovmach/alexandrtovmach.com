import React from "react";
import isEqual from "lodash.isequal";

import { getAllByCategory } from "../../services/api/firebase";

import "./MainPage.scss";

const MainBackground = React.lazy(() => import("../../containers/MainPage/Background"));
const Navigation = React.lazy(() => import("../../containers/MainPage/Navigation"));
const MainHome = React.lazy(() => import("../../containers/MainPage/HomeSection"));
const MainAbout = React.lazy(() => import("../../containers/MainPage/AboutSection"));
const MainCalendar = React.lazy(() => import("../../containers/MainPage/CalendarSection"));
const MainPortfolio = React.lazy(() => import("../../containers/MainPage/PortfolioSection"));
const MainBlog = React.lazy(() => import("../../containers/MainPage/BlogSection"));

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
