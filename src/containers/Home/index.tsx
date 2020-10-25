import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './home.module.scss';

const Home = () => (
  <section className={styles.home}>
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
      render={data => (
        <Img
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
        I've founded several open source packages (e.g{' '}
        <a
          target="_blank"
          title="react-microsoft-login"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/react-microsoft-login"
        >
          react-microsoft-login
        </a>
        ,{' '}
        <a
          target="_blank"
          title="react-figma-plugin-ds"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/react-figma-plugin-ds"
        >
          react-figma-plugin-ds
        </a>
        ) , and I'm actively contributing to{' '}
        <a
          target="_blank"
          title="Node.js"
          rel="noopener noreferrer"
          href="https://github.com/nodejs/"
        >
          Node.js
        </a>
        ,{' '}
        <a
          target="_blank"
          title="SemVer"
          rel="noopener noreferrer"
          href="https://github.com/semver/"
        >
          SemVer
        </a>
        ,{' '}
        <a
          target="_blank"
          title="Gatsby"
          rel="noopener noreferrer"
          href="https://github.com/gatsbyjs/"
        >
          Gatsby
        </a>
        ,{' '}
        <a
          target="_blank"
          title="Friends of Figma"
          rel="noopener noreferrer"
          href="https://friends.figma.com/plugins/"
        >
          Friends of Figma
        </a>{' '}
        , and other projects.
      </p>
      <p>
        In my free time I write and translate articles on{' '}
        <a
          target="_blank"
          title="Medium"
          rel="noopener noreferrer"
          href="https://medium.com/@alexandrtovmach"
        >
          Medium
        </a>
        ,{' '}
        <a
          target="_blank"
          title="Habr"
          rel="noopener noreferrer"
          href="https://habr.com/ru/users/alexandrtovmach/posts/"
        >
          Habr
        </a>
        ,{' '}
        <a
          target="_blank"
          title="DOU"
          rel="noopener noreferrer"
          href="https://dou.ua/users/aleksandr-tovmach/articles"
        >
          DOU
        </a>
        , and also speak at meet-ups and{' '}
        <a
          target="_blank"
          title="JSFest 2019: JAMStack"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=wCNSK4iFCuE"
        >
          conferences
        </a>
        .
      </p>
      <p>
        You can find more details about my experience in a{' '}
        <Link to="/cv">printable CV</Link>. To contact with me{' '}
        <a
          target="_blank"
          title="Calendly"
          rel="noopener noreferrer"
          href="https://calendly.com/alexandrtovmach"
        >
          book an appointment
        </a>{' '}
        or simply <a href="mailto:alexandrtovmach@gmail.com">mail me</a>.
      </p>
    </article>
  </section>
);

export default Home;
