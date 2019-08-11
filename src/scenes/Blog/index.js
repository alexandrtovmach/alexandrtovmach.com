import React from "react";
import Blog from "../../components/BlogPage/BlogPage";

import "./BlogPage.scss";

const BlogPage = props => (
  <div className="page">
    <Blog {...props} />
  </div>
);

export default BlogPage;
