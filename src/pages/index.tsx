import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../containers/Layout';
import SEO from '../components/seo';

import styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Intro" />
    <section className={styles.home}>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "main.png" }) {
              childImageSharp {
                fluid(maxWidth: 400) {
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
          ecosystem, especially React and Node.js. But my vision and real
          experience significantly wider.
        </p>
        <p>
          I founded several open source packages like:{' '}
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
          </a>{' '}
          , and actively contributing to{' '}
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
          projects.
        </p>
        <p>
          I write and translate articles on{' '}
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
          , and also speak at meetups and{' '}
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
          You can find more details in <Link to="/cv">printable CV</Link>,{' '}
          <a
            target="_blank"
            title="Calendly"
            rel="noopener noreferrer"
            href="https://calendly.com/alexandrtovmach"
          >
            book an appointment
          </a>{' '}
          to talk directly or simply{' '}
          <a href="mailto:alexandrtovmach@gmail.com">mail me</a>.
        </p>
      </article>
    </section>
  </Layout>
);

export default IndexPage;
