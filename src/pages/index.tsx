import React from 'react';
import { Link } from 'gatsby';

import Layout from '../containers/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

import styles from './home.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={styles.home}>
      <Image />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
