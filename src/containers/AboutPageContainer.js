import React from "react";
import About from "../components/AboutPageComponents/AboutPage";
import AboutBackground from "../components/AboutPageComponents/AboutBackground";

export default props => (
  <div className="page">
    <AboutBackground />
    <About {...props} />
  </div>
);
