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

export default props => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainPageContainer
              langPack={props.langPack.Main}
              theme={props.theme}
              locale={props.locale}
              calendarLangPack={props.langPack.CalendarComponent}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => <AboutPageContainer langPack={props.langPack.About} />}
        />
        <Route
          exact
          path="/calendar"
          render={() => (
            <CalendarPageContainer langPack={props.langPack.Calendar} />
          )}
        />
        <Route
          exact
          path="/portfolio"
          render={() => (
            <PortfolioPageContainer langPack={props.langPack.Portfolio} />
          )}
        />
        <Route
          exact
          path="/blog"
          render={() => <BlogPageContainer langPack={props.langPack.Blog} />}
        />
      </Switch>
    </Router>
  );
};
