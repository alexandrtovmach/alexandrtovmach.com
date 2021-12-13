import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Statistics from '../containers/Statistics';

interface StatsPageProps {
  data: {
    allOpenLibBooks: {
      nodes: BookOpenLibItem[];
    };
  };
}

export const booksQuery = graphql`
  query BooksQuery {
    allOpenLibBooks {
      nodes {
        title
        id
        subjects
        author
        openLibUrl
        internal {
          content
        }
      }
    }
  }
`;

const StatsPage: React.FunctionComponent<StatsPageProps> = ({
  data: { allOpenLibBooks },
}) => {
  return (
    <Layout>
      <SEO title="Random Info" />
      <Statistics books={allOpenLibBooks.nodes} />
    </Layout>
  );
};

export default StatsPage;
