import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/routerHistory";

import asyncComponent from "./AsyncComponent";

const MainPage = asyncComponent(() => import("./containers/MainPage/MainPage"));
const AboutPage = asyncComponent(() =>
  import("./containers/AboutPage/AboutPage")
);
const CalendarPage = asyncComponent(() =>
  import("./containers/CalendarPage/CalendarPage")
);
const PortfolioPage = asyncComponent(() =>
  import("./containers/PortfolioPage/PortfolioPage")
);
const BlogPage = asyncComponent(() => import("./containers/BlogPage/BlogPage"));

export default ({ langPack, theme }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              langPack={{ ...langPack, ...langPack["Main"] }}
              theme={theme}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <AboutPage langPack={{ ...langPack, ...langPack["About"] }} />
          )}
        />
        <Route
          exact
          path="/calendar"
          render={() => (
            <CalendarPage langPack={{ ...langPack, ...langPack["Calendar"] }} />
          )}
        />
        <Route
          exact
          path="/portfolio"
          render={() => (
            <PortfolioPage
              langPack={{ ...langPack, ...langPack["Portfolio"] }}
            />
          )}
        />
        <Route
          exact
          path="/blog"
          render={() => (
            <BlogPage langPack={{ ...langPack, ...langPack["Blog"] }} />
          )}
        />
      </Switch>
    </Router>
  );
};
