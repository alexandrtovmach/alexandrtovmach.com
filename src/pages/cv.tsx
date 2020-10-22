import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import CVPaper from '../containers/CV';

import CVPreviewImageSrc from '../assets/images/cv_preview.png';

const CV = () => {
  return (
    <Layout withoutFooter>
      <SEO
        previewImageSrc={CVPreviewImageSrc}
        title="CV"
        description="I believe that masterpieces are created with pure enthusiasm, not for money, which is why I am an open source advocate and an open adventurer."
      />
      <CVPaper />
    </Layout>
  );
};

export default CV;
