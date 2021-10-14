import React from 'react';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Img from 'gatsby-image';

import * as styles from './home.module.scss';

const Home: React.FunctionComponent = () => {
  const handleCVPress = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'CV link',
    });
    navigate((event.target as HTMLAnchorElement)['href']);
  };

  const handleBlogPress = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'blog link',
    });
    navigate((event.target as HTMLAnchorElement)['href']);
  };

  return (
    <main className={styles.home}>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "main.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <Img
            alt="My Photo"
            fluid={data.placeholderImage.childImageSharp.fluid}
            className={styles.image}
          />
        )}
      />
      <article>
        <h1>Hi, I'm Alexandr Tovmach.</h1>
        <p>
          I'm full stack engineer & UI/UX designer, and my expertise is JS
          ecosystem, especially React and Node.js. But I consider my vision and
          real experience to be significantly wider.
        </p>
        <p>
          I've founded several open source packages (e.g.{' '}
          <OutboundLink
            target="_blank"
            title="Link to react-microsoft-login project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-microsoft-login"
          >
            react-microsoft-login
          </OutboundLink>
          ,{' '}
          <OutboundLink
            target="_blank"
            title="Link to react-figma-plugin-ds project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-figma-plugin-ds"
          >
            react-figma-plugin-ds
          </OutboundLink>
          ) , and I'm actively contributing to{' '}
          <OutboundLink
            target="_blank"
            title="Link to Node.js project"
            rel="noopener noreferrer"
            href="https://github.com/nodejs/"
          >
            Node.js
          </OutboundLink>
          ,{' '}
          <OutboundLink
            target="_blank"
            title="Link to SemVer project"
            rel="noopener noreferrer"
            href="https://github.com/semver/"
          >
            SemVer
          </OutboundLink>
          ,{' '}
          <OutboundLink
            target="_blank"
            title="Link to Gatsby project"
            rel="noopener noreferrer"
            href="https://github.com/gatsbyjs/"
          >
            Gatsby
          </OutboundLink>
          ,{' '}
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
        <p>
          In my free time I write and translate{' '}
          <Link to="/blog" onClick={handleBlogPress}>
            articles
          </Link>{' '}
          on{' '}
          <OutboundLink
            target="_blank"
            title="Link to my profile on Medium"
            rel="noopener noreferrer"
            href="https://medium.com/@alexandrtovmach"
          >
            Medium
          </OutboundLink>
          ,{' '}
          <OutboundLink
            target="_blank"
            title="Link to my profile on Habr"
            rel="noopener noreferrer"
            href="https://habr.com/ru/users/alexandrtovmach/posts/"
          >
            Habr
          </OutboundLink>
          ,{' '}
          <OutboundLink
            target="_blank"
            title="Link to my profile on DOU"
            rel="noopener noreferrer"
            href="https://dou.ua/users/aleksandr-tovmach/articles"
          >
            DOU
          </OutboundLink>
          , and also speak at meet-ups and{' '}
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
        <p>
          You can find more details about my experience in a{' '}
          <Link to="/cv" onClick={handleCVPress}>
            printable CV
          </Link>
          . To contact with me{' '}
          <OutboundLink
            target="_blank"
            title="Calendly"
            rel="noopener noreferrer"
            href="https://calendly.com/alexandrtovmach"
          >
            book an appointment
          </OutboundLink>{' '}
          or simply{' '}
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
