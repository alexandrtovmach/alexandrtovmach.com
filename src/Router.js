import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/routerHistory";

import asyncComponent from "./AsyncComponent";

const Main = asyncComponent(() => import("./scenes/Main/Main"));
const About = asyncComponent(() => import("./scenes/About/About"));
const Calendar = asyncComponent(() => import("./scenes/Calendar/Calendar"));
const Portfolio = asyncComponent(() => import("./scenes/Portfolio/Portfolio"));
const Blog = asyncComponent(() => import("./scenes/Blog/Blog"));

export default ({ langPack, theme }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              langPack={{ ...langPack, ...langPack["Main"] }}
              theme={theme}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About langPack={{ ...langPack, ...langPack["About"] }} />
          )}
        />
        <Route
          exact
          path="/calendar"
          render={() => (
            <Calendar langPack={{ ...langPack, ...langPack["Calendar"] }} />
          )}
        />
        <Route
          exact
          path="/portfolio"
          render={() => (
            <Portfolio langPack={{ ...langPack, ...langPack["Portfolio"] }} />
          )}
        />
        <Route
          exact
          path="/blog"
          render={() => (
            <Blog langPack={{ ...langPack, ...langPack["Blog"] }} />
          )}
        />
      </Switch>
    </Router>
  );
};
