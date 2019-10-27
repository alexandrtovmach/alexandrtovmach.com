import React from "react";

const BlogList = React.lazy(() => import("../../containers/BlogList/BlogList"));

const BlogPage = ({ langPack }) => (
  <div className="page">
    <div className="page-text-wrapper header-compensator">
      <BlogList langPack={langPack} locale={langPack._locale} items={20} />
    </div>
  </div>
);

export default BlogPage;
