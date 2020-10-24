import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import { graphql } from 'gatsby';

interface Props {
  data: {
    allFeedMediumBlog: {
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
    allFeedMediumBlog {
      edges {
        node {
          link
          title
          pubDate
          categories
        }
      }
    }
  }
`;

const BlogPage: React.FunctionComponent<Props> = ({
  data: { allFeedMediumBlog },
}) => (
  <Layout>
    <SEO title="Blog" />
    {allFeedMediumBlog.edges.map(({ node: { title } }) => (
      <p>{title}</p>
    ))}
  </Layout>
);

export default BlogPage;
