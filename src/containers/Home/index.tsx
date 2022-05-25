import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './home.module.scss';

const Home: React.FunctionComponent = () => {
  const handleCVPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'CV link',
    });
  };

  const handleBlogPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'blog link',
    });
  };

  return (
    <main className={styles.home}>
      {/* <Link to="/stats">Stats</Link> */}
      <StaticImage
        alt="My Photo"
        className={styles.image}
        src="../../assets/images/main.jpg"
        placeholder="blurred"
        layout="fullWidth"
      />
      <article>
        <h1 className="label">Hi, I&apos;m Alexandr Tovmach.</h1>
        <p className="text">
          I&apos;m full stack engineer & UI/UX designer, and my expertise is JS
          ecosystem, especially React and Node.js. But I consider my vision and
          real experience to be significantly wider.
        </p>
        <p className="text">
          I&apos;ve founded several open source packages (e.g.&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to react-microsoft-login project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-microsoft-login"
          >
            react-microsoft-login
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to react-figma-plugin-ds project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-figma-plugin-ds"
          >
            react-figma-plugin-ds
          </OutboundLink>
          ) , and I&apos;m actively contributing to&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to Node.js project"
            rel="noopener noreferrer"
            href="https://github.com/nodejs/"
          >
            Node.js
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to SemVer project"
            rel="noopener noreferrer"
            href="https://github.com/semver/"
          >
            SemVer
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to Gatsby project"
            rel="noopener noreferrer"
            href="https://github.com/gatsbyjs/"
          >
            Gatsby
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to Friends of Figma project"
            rel="noopener noreferrer"
            href="https://friends.figma.com/plugins/"
          >
            Friends of Figma
          </OutboundLink>
          , and other projects.
        </p>
        <p className="text">
          In my free time I write and translate&nbsp;
          <Link to="/blog" onClick={handleBlogPress}>
            articles
          </Link>
          &nbsp; on&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to my profile on Medium"
            rel="noopener noreferrer"
            href="https://medium.com/@alexandrtovmach"
          >
            Medium
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to my profile on Habr"
            rel="noopener noreferrer"
            href="https://habr.com/ru/users/alexandrtovmach/posts/"
          >
            Habr
          </OutboundLink>
          ,&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to my profile on DOU"
            rel="noopener noreferrer"
            href="https://dou.ua/users/aleksandr-tovmach/articles"
          >
            DOU
          </OutboundLink>
          , and also speak at meet-ups and&nbsp;
          <OutboundLink
            target="_blank"
            title="JSFest 2019: JAMStack"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=wCNSK4iFCuE"
          >
            conferences
          </OutboundLink>
          .
        </p>
        <p className="text">
          You can find more details about my experience in a&nbsp;
          <Link to="/cv" onClick={handleCVPress}>
            printable CV
          </Link>
          . To contact with me&nbsp;
          <OutboundLink
            target="_blank"
            title="Calendly"
            rel="noopener noreferrer"
            href="https://calendly.com/alexandrtovmach"
          >
            book an appointment
          </OutboundLink>
          &nbsp; or simply&nbsp;
          <OutboundLink href="mailto:alexandrtovmach@gmail.com">
            mail me
          </OutboundLink>
          .
        </p>
      </article>
    </main>
  );
};

export default Home;
