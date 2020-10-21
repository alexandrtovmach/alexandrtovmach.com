/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title: string;
}

const SEO = ({ description, lang, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      {/* socials */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alexandrtovmach.com" />
      <meta property="og:site_name" content="alexandrtovmach.com" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content={title} />
      {/* <meta property="og:image" content="/images/sharing-banner.jpg" /> */}

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:site" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content="https://alexandrtovmach.com" />
      {/* <meta name="twitter:image" content="/images/sharing-banner.jpg" /> */}

      {/* personal meta */}
      <link rel="me" href="https://alexandrtovmach.com/" type="text/html" />
      <link rel="me" href="mailto:alexandrtovmach@gmail.com" />
      <link rel="me" href="sms:+380961709568" />
    </Helmet>
  );
};

export default SEO;
