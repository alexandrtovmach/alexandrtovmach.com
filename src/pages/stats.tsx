import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Statistics from '../containers/Statistics';

interface StatsPageProps {
  data: {
    allWikiBooks: {
      nodes: BookWikiItem[];
    };
  };
}

export const booksQuery = graphql`
  query BooksQuery {
    allWikiBooks {
      nodes {
        title
        requestUrl
        extract
        firstImage
      }
    }
  }
`;

const StatsPage: React.FunctionComponent<StatsPageProps> = ({
  data: { allWikiBooks },
}) => {
  return (
    <Layout>
      <SEO title="Random Info" />
      <Statistics books={allWikiBooks.nodes} />
    </Layout>
  );
};

export default StatsPage;
