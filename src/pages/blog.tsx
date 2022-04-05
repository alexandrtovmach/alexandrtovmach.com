import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Publications from '../containers/Publications';

interface BlogPageProps {
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
          content
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
            encoded
            encodedSnippet
          }
        }
      }
    }
  }
`;


// allFeedHabr {
//   edges {
//     node {
//       title
//       categories
//       link
//       pubDate
//       content
//       contentSnippet
//     }
//   }
// }

const parseForImage = (contentStr: string) => {
  const startSrc = contentStr.slice(
    contentStr.indexOf('src=', contentStr.indexOf('<img')) + 5
  );
  return startSrc.slice(0, startSrc.indexOf('"'));
};

const BlogPage: React.FunctionComponent<BlogPageProps> = ({
  data: { allFeedDou, allFeedMedium, allFeedHabr },
}) => {
  const publications = [
    ...allFeedDou?.edges.map(({ node }) => ({
      ...node,
      coverImg: parseForImage(String(node.content)),
      resource: 'dou.ua',
      language: 'uk',
    })),
    ...allFeedMedium?.edges.map(({ node }) => ({
      ...node,
      coverImg: parseForImage(
        typeof node.content !== 'string' ? node.content.encoded : node.content
      ),
      contentSnippet:
        typeof node.content !== 'string'
          ? node.content.encodedSnippet
          : node.content,
      resource: 'medium.com',
      language: 'en',
    })),
    // ...allFeedHabr?.edges.map(({ node }) => ({
    //   ...node,
    //   coverImg: parseForImage(String(node.content)),
    //   resource: 'habr.com',
    //   language: 'ru',
    // })),
  ];
  return (
    <Layout>
      <SEO title="Blog" />
      <Publications publications={publications} />
    </Layout>
  );
};

export default BlogPage;
