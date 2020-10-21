import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../containers/Layout';
import SEO from '../components/seo';

import styles from './home.module.scss';

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
        <h1>Hello, I'm Alexandr Tovmach</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <a href="/">labore et dolore</a> magna
          aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </article>
    </section>
  </Layout>
);

export default IndexPage;
