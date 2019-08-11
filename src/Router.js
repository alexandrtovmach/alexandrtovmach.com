import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/routerHistory";

const Main = React.lazy(() => import("./scenes/Main"));
const About = React.lazy(() => import("./scenes/About"));
const Calendar = React.lazy(() => import("./scenes/Calendar"));
const Portfolio = React.lazy(() => import("./scenes/Portfolio"));
const Blog = React.lazy(() => import("./scenes/Blog"));

const Routing = ({ langPack, theme }) => {
  return (
    <Router history={history}>
      <React.Suspense fallback>
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
      </React.Suspense>
    </Router>
  );
};

export default Routing;
