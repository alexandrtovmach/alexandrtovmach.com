import React from "react";
import Portfolio from "../../components/PortfolioPage/PortfolioPage";

import "./PortfolioPage.scss";

export default props => (
  <div className="page">
    <Portfolio {...props} />
  </div>
);
