import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './home.module.scss';

const Home: React.FunctionComponent = () => {
  const handleCVPress = () => {
    // trackCustomEvent({
    //   category: 'engagement',
    //   action: 'view_item',
    //   label: 'CV link',
    // });
  };

  const handleBlogPress = () => {
    // trackCustomEvent({
    //   category: 'engagement',
    //   action: 'view_item',
    //   label: 'blog link',
    // });
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
        <h1 className="label">Hi, I'm Alexandr Tovmach.</h1>
        <p className="text">
          I'm full stack engineer & UI/UX designer. My expertise is JS
          ecosystem, especially React and Node.js, but I consider my vision and
          real experience to be significantly wider.
        </p>
        <p className="text">
          Founded and led&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to soft4manufacture company website"
            rel="noopener noreferrer"
            href="http://soft4manufacture.com/"
          >
            soft4manufacture
          </OutboundLink>
          &nbsp; company, which provides development services and
          IT solutions for manufacturing companies.
        </p>
        <p className="text">
          My&nbsp;
          <OutboundLink
            target="_blank"
            title="Link to attech-org project"
            rel="noopener noreferrer"
            href="https://github.com/attech-org"
          >
            web development course
          </OutboundLink>
          &nbsp;helped 20 students obtain valuable skills for their future
          careers.
        </p>
        <p className="text">
          I've started several open-source packages (e.g.&nbsp;
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
          ) , and was active contributor of&nbsp;
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
          {/* <OutboundLink
            target="_blank"
            title="Link to my profile on Habr"
            rel="noopener noreferrer"
            href="https://habr.com/ru/users/alexandrtovmach/posts/"
          >
            Habr
          </OutboundLink>
          ,&nbsp; */}
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
          To contact with me&nbsp;
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
          . You can find more details about my experience in a&nbsp;
          <Link to="/cv" className={styles.cvLink} onClick={handleCVPress}>
            printable CV
          </Link>
          .
        </p>
      </article>
    </main>
  );
};

export default Home;
