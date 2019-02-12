import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/routerHistory";

import asyncComponent from "./AsyncComponent";

const MainPageContainer = asyncComponent(() =>
  import("./containers/MainPageContainer")
);
const AboutPageContainer = asyncComponent(() =>
  import("./containers/AboutPageContainer")
);
const CalendarPageContainer = asyncComponent(() =>
  import("./containers/CalendarPageContainer")
);
const PortfolioPageContainer = asyncComponent(() =>
  import("./containers/PortfolioPageContainer")
);
const BlogPageContainer = asyncComponent(() =>
  import("./containers/BlogPageContainer")
);

export default ({ langPack, theme }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainPageContainer
              langPack={{ ...langPack, ...langPack["Main"] }}
              theme={theme}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <AboutPageContainer
              langPack={{ ...langPack, ...langPack["About"] }}
            />
          )}
        />
        <Route
          exact
          path="/calendar"
          render={() => (
            <CalendarPageContainer
              langPack={{ ...langPack, ...langPack["Calendar"] }}
            />
          )}
        />
        <Route
          exact
          path="/portfolio"
          render={() => (
            <PortfolioPageContainer
              langPack={{ ...langPack, ...langPack["Portfolio"] }}
            />
          )}
        />
        <Route
          exact
          path="/blog"
          render={() => (
            <BlogPageContainer
              langPack={{ ...langPack, ...langPack["Blog"] }}
            />
          )}
        />
      </Switch>
    </Router>
  );
};
