import React from "react";
// import classnames from "classnames";
import YouTube from "react-youtube";

import "./MediaSection.scss";

const StorySection = ({ langPack }) => {
  return (
    <section className={"about-media"}>
      <YouTube videoId={"wCNSK4iFCuE"} className={"media-youtube"} containerClassName={"media-youtube-container"} />
    </section>
  );
};

export default StorySection;
