import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import { graphql } from 'gatsby';

interface Props {
  data: {
    allFeedMedium: {
      edges: {
        node: {
          link: string;
          title: string;
          pubDate: string;
          categories: string[];
        };
      }[];
    };
    allFeedDou: {
      edges: {
        node: {
          link: string;
          title: string;
          pubDate: string;
        };
      }[];
    };
    allFeedHabr: {
      edges: {
        node: {
          link: string;
          title: string;
          pubDate: string;
          categories: string[];
        };
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
        }
      }
    }
  }
`;

const BlogPage: React.FunctionComponent<Props> = ({
  data: { allFeedDou, allFeedMedium, allFeedHabr },
}) => (
  <Layout>
    <SEO title="Blog" />
    {allFeedDou.edges.map(({ node: { title, link } }) => (
      <p>
        <a href={link}>{title}</a>
      </p>
    ))}
    {allFeedMedium.edges.map(({ node: { title, link } }) => (
      <p>
        <a href={link}>{title}</a>
      </p>
    ))}
    {allFeedHabr.edges.map(({ node: { title, link } }) => (
      <p>
        <a href={link}>{title}</a>
      </p>
    ))}
  </Layout>
);

export default BlogPage;
