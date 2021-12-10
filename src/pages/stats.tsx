import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Statistics from '../containers/Statistics';

interface StatsPageProps {
  data: {
    allWikipediaFetcher: {
      nodes: BookWikiItem[];
    };
  };
}

export const booksQuery = graphql`
  query BooksQuery {
    allWikipediaFetcher {
      nodes {
        title
        summary
        requestLang
        requestArticle
        extract
        firstImage
      }
    }
  }
`;

const StatsPage: React.FunctionComponent<StatsPageProps> = ({
  data: { allWikipediaFetcher },
}) => {
  return (
    <Layout>
      <SEO title="Random Info" />
      <Statistics books={allWikipediaFetcher.nodes} />
    </Layout>
  );
};

export default StatsPage;
