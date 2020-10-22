import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Home from '../containers/Home';

const IndexPage = () => (
  <Layout>
    <SEO title="Intro" />
    <Home />
  </Layout>
);

export default IndexPage;
