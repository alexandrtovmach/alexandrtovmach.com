import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }: any) => (
  <header>
    <div>
      <h1>{/* <Link to="/">{siteTitle}</Link> */}</h1>
    </div>
  </header>
);

export default Header;
