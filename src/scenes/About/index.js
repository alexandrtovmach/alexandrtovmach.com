import React from "react";
import classnames from "classnames";

// const StorySection = React.lazy(() => import("../../containers/AboutPage/StorySection"));
// const MediaSection = React.lazy(() => import("../../containers/AboutPage/MediaSection"));
const ResourcesSection = React.lazy(() => import("../../containers/AboutPage/ResourcesSection"));

const AboutPage = ({ langPack }) => (
  <div className="page">
    <div className={classnames("about-page", "page-text-wrapper")}>
      {/* <StorySection langPack={langPack} />
      <MediaSection langPack={langPack} /> */}
      <ResourcesSection langPack={langPack} />
    </div>
  </div>
);

export default AboutPage;
