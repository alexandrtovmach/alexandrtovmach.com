/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../../components/header';
import Footer from '../../components/Footer';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: any }) => (
  <div className={styles.pageWrapper}>
    <Header siteTitle={'Alexandr Tovmach website'} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
