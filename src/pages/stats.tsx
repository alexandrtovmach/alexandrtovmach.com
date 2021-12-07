import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';

const StatsPage = () => {
  return (
    <Layout withoutFooter>
      <SEO title="Some fun statistics about me" />
    </Layout>
  );
};

export default StatsPage;
