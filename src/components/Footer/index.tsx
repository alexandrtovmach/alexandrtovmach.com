import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
// import classnames from "classnames";

import GitHubSVG from '../../assets/icons/github.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
// import StackOverflowSVG from '../../assets/icons/stackoverflow.svg';
// import MediumSVG from '../../assets/icons/medium.svg';
// import HabrSVG from '../../assets/icons/habr.svg';
// import DouSVG from '../../assets/icons/dou.svg';
// import NpmSVG from '../../assets/icons/npm.svg';
// import BehanceSVG from '../../assets/icons/behance.svg';
// import DribbbleSVG from '../../assets/icons/dribbble.svg';
import LinkedInSVG from '../../assets/icons/linkedin.svg';

import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.resources}>
      <OutboundLink
        href="https://twitter.com/alexandrtovmach"
        target="_blank"
        title="Link to my Twitter"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <TwitterSVG />
      </OutboundLink>
      <OutboundLink
        href="https://github.com/alexandrtovmach"
        target="_blank"
        title="Link to my GitHub"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <GitHubSVG />
      </OutboundLink>
      {/* <a
        href="https://ru.stackoverflow.com/users/312473/alexandr-tovmach"
        target="_blank"
        title="StackOverflow"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <StackOverflowSVG />
      </a> */}
      {/* <a
        href="https://www.npmjs.com/~alexandrtovmach"
        target="_blank"
        title="NPM"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <NpmSVG />
      </a>
      <a
        href="https://medium.com/@alexandrtovmach"
        target="_blank"
        title="Medium"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <MediumSVG />
      </a>
      <a
        href="https://habr.com/ru/users/alexandrtovmach"
        target="_blank"
        title="Habr"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <HabrSVG />
      </a>
      <a
        href="https://dou.ua/users/aleksandr-tovmach"
        target="_blank"
        title="DOU"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <DouSVG />
      </a>
      <a
        href="https://www.behance.net/alexandrtovmach"
        target="_blank"
        title="Behance"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <BehanceSVG />
      </a> */}
      {/* <a
        href="https://dribbble.com/alexandrtovmach"
        target="_blank"
        title="Link to my Dribbble"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <DribbbleSVG />
      </a> */}
      <OutboundLink
        href="https://www.linkedin.com/in/alexandrtovmach"
        target="_blank"
        title="Link to my LinkedIn"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <LinkedInSVG />
      </OutboundLink>
    </footer>
  );
};

export default Footer;
