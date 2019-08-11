import React from "react";
import Portfolio from "../../components/PortfolioPage/PortfolioPage";

import "./PortfolioPage.scss";

const PortfolioPage = props => (
  <div className="page">
    <Portfolio {...props} />
  </div>
);

export default PortfolioPage;
