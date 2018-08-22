import React from 'react';
import About from "../components/AboutPage/About";
import AboutBackground from '../components/AboutPage/AboutBackground';

export default (props) => (
  <div className="page">
    <AboutBackground />
    <About 
      {...props}
    />
  </div>
)