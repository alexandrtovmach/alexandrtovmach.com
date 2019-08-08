import React from "react";
import About from "../../containers/About/About";

import "./AboutPage.scss";

const AboutPage = props => (
  <div className="page">
    <About {...props} />
  </div>
);

export default AboutPage;
