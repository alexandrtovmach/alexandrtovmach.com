import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import { graphql } from 'gatsby';
import PublicationCard from '../components/PublicationCard';

interface Props {
  data: {
    allFeedMedium: {
      edges: {
        node: RSSFeedItem;
      }[];
    };
    allFeedDou: {
      edges: {
        node: RSSFeedItem;
      }[];
    };
    allFeedHabr: {
      edges: {
        node: RSSFeedItem;
      }[];
    };
  };
}

export const blogQuery = graphql`
  query BlogQuery {
    allFeedDou {
      edges {
        node {
          link
          title
          pubDate
          contentSnippet
        }
      }
    }
    allFeedMedium {
      edges {
        node {
          link
          title
          pubDate
          categories
        }
      }
    }
    allFeedHabr {
      edges {
        node {
          title
          categories
          link
          pubDate
          contentSnippet
        }
      }
    }
  }
`;

const BlogPage: React.FunctionComponent<Props> = ({
  data: { allFeedDou, allFeedMedium, allFeedHabr },
}) => {
  const publications = [
    ...allFeedDou.edges.map(({ node }) => ({
      ...node,
      resource: 'dou',
      language: 'uk',
    })),
    ...allFeedMedium.edges.map(({ node }) => ({
      ...node,
      resource: 'medium',
      language: 'en',
    })),
    ...allFeedHabr.edges.map(({ node }) => ({
      ...node,
      resource: 'habr',
      language: 'ru',
    })),
  ];
  return (
    <Layout>
      <SEO title="Blog" />
      {publications
        .sort(
          (a, b) =>
            new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
        )
        .map(data => (
          <PublicationCard publicationData={data} />
        ))}
    </Layout>
  );
};

export default BlogPage;
