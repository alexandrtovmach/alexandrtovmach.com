import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/routerHistory";

import asyncComponent from "./AsyncComponent";

const Main = asyncComponent(() => import("./scenes/Main/Main"));
const About = asyncComponent(() => import("./scenes/About/About"));
const Calendar = asyncComponent(() => import("./scenes/Calendar/Calendar"));
const Portfolio = asyncComponent(() => import("./scenes/Portfolio/Portfolio"));
const Blog = asyncComponent(() => import("./scenes/Blog/Blog"));

const Routing = ({ langPack, theme }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main langPack={{ ...langPack, ...langPack["Main"] }} theme={theme} />
        </Route>
        <Route exact path="/about">
          <About langPack={{ ...langPack, ...langPack["About"] }} />
        </Route>
        <Route exact path="/calendar">
          <Calendar langPack={{ ...langPack, ...langPack["Calendar"] }} />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio langPack={{ ...langPack, ...langPack["Portfolio"] }} />
        </Route>
        <Route exact path="/blog">
          <Blog langPack={{ ...langPack, ...langPack["Blog"] }} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
