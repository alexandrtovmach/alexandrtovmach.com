import React from "react";
import Blog from "../../components/BlogPage/BlogPage";

import "./BlogPage.scss";

export default props => (
  <div className="page">
    <Blog {...props} />
  </div>
);
