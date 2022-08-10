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
    allFile: {
      nodes: {
        name: string;
        publicURL: string;
      }[];
    };
    // allMultiplexFilms: {
    //   nodes: MultiplexFilmItem[];
    // };
  };
}

export const booksQuery = graphql`
  query BooksQuery {
    allFile(
      filter: { extension: { eq: "jpg" }, dir: { regex: "/book-covers/" } }
    ) {
      nodes {
        publicURL
        name
      }
    }
    allOpenLibBooks {
      nodes {
        title
        id
        subjects
        author
        pagesCount
        coverPath
        authorId
        workId
        openLibUrl
        internal {
          content
        }
      }
    }
  }
`;

const StatsPage: React.FunctionComponent<StatsPageProps> = ({
  data: { allOpenLibBooks, allFile },
}) => {
  return (
    <Layout>
      <SEO title="Random Info" />
      <Statistics books={allOpenLibBooks.nodes} bookCovers={allFile.nodes} />
    </Layout>
  );
};

export default StatsPage;
