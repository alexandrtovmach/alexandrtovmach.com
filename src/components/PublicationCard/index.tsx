import React from 'react';
import { truncate, uniqBy, lowerCase } from 'lodash';

import styles from './publication-card.module.scss';
import Flag from '../Flag';

interface Props {
  publicationData: PublicationItem;
}

const PublicationCard: React.FunctionComponent<Props> = ({
  publicationData: {
    title,
    link,
    pubDate,
    contentSnippet,
    language,
    resource,
    categories,
  },
}) => {
  const [, snippet] = (contentSnippet && contentSnippet.match(/(.+)\n/)) || [];
  return (
    <a
      className={styles.publicationCard}
      href={link}
      target="_blank"
      title={`${resource}: ${title}`}
      rel="noopener noreferrer"
    >
      <h3 className={styles.title}>
        <Flag language={language} /> {title}
      </h3>
      <div className={styles.tagsRow}>
        {uniqBy(categories, lowerCase).map(
          el =>
            el === 'alexandrtovmach' || <span className={styles.tag}>{el}</span>
        )}
      </div>
      <p className={styles.description}>{truncate(snippet, { length: 300 })}</p>
      <div className={styles.metaRow}>
        <p>{resource}</p>
        <p>{new Date(pubDate).toLocaleDateString()}</p>
      </div>
    </a>
  );
};

export default PublicationCard;
