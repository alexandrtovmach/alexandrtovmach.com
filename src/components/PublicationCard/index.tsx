import React from 'react';
import { capitalize } from 'lodash';

import styles from './publication-card.module.scss';

interface PublicationData extends RSSFeedItem {
  resource: string;
  language: string;
}

interface Props {
  publicationData: PublicationData;
}

const PublicationCard: React.FunctionComponent<Props> = ({
  publicationData: { title, link, pubDate, contentSnippet, language, resource },
}) => {
  const [, snippet] = (contentSnippet && contentSnippet.match(/(.+)\n/)) || [];
  return (
    <div className={styles.publicationCard}>
      <h3 className={styles.title}>{title}</h3>
      <p>{snippet}</p>
      <p>{pubDate}</p>
      <a href={link} className={styles.link}>
        Read at {capitalize(resource)} ⟶
      </a>
    </div>
  );
};

export default PublicationCard;
