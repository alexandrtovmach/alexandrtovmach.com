import React from 'react';
// import { Link } from 'gatsby';

// import LogoAnimatedSVG from '../../assets/icons/logo_animated.svg';

import * as styles from './header.module.scss';

const Header = ({ siteTitle }: any) => (
  <header className={styles.header}>
    {/* <nav className={styles.navigation}>
      <Link to="/">
        <LogoAnimatedSVG />
      </Link>
    </nav> */}
  </header>
);

export default Header;
