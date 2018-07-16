import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "../services/routerHistory";

import App from "./App";
import About from "./AboutPage/About";
import Calendar from "./CalendarPage/Calendar";
import Portfolio from "./PortfolioPage/Portfolio";
import Blog from "./BlogPage/Blog";

export default (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
    </Switch>
  </Router>
);