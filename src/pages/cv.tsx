import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../components/seo';
import CVPaper from '../containers/CV';

const CV = () => {
  return (
    <Layout withoutFooter>
      <SEO
        title="CV"
        description="I believe that masterpieces are created with pure enthusiasm, not for money, which is why I am an open source advocate and an open adventurer."
      />
      <CVPaper />
    </Layout>
  );
};

export default CV;
