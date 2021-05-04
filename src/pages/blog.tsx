import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Publications from '../containers/Publications';

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
          content {
            encodedSnippet
          }
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
      resource: 'dou.ua',
      language: 'uk',
    })),
    ...allFeedMedium.edges.map(({ node }) => ({
      ...node,
      contentSnippet: node.content.encodedSnippet,
      resource: 'medium.com',
      language: 'en',
    })),
    ...allFeedHabr.edges.map(({ node }) => ({
      ...node,
      resource: 'habr.com',
      language: 'ru',
    })),
  ];
  return (
    <Layout>
      <SEO title="Blog" />
      <Publications publications={publications} />
    </Layout>
  );
};

export default BlogPage;
