import React from 'react';
import Main from "../components/MainPage/Main";
import MainBackground from '../components/MainPage/common/MainBackground';

export default (props) => (
  <div className="page">
    <MainBackground />
    <Main
      {...props}
    />
  </div>
);