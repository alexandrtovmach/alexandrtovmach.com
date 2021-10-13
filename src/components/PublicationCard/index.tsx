import React from 'react';
import { truncate, uniqBy, lowerCase } from 'lodash';

import styles from './publication-card.module.scss';
import Flag from '../Flag';
import SkillItem from '../SkillItem';

interface Props {
  publicationData: PublicationItem & { coverImg: string };
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
    coverImg,
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
      <img className={styles.coverImg} src={coverImg} alt={coverImg} />
      <h3 className={styles.title}>
        {title} <Flag language={language} />
      </h3>
      <ul className={styles.tagList}>
        {uniqBy(categories, lowerCase).map(
          el =>
            el === 'alexandrtovmach' || (
              <SkillItem key={el} label={el} value={el} isHighlighted={false} />
            )
        )}
      </ul>
      <p className={styles.description}>{truncate(snippet, { length: 300 })}</p>
      <div className={styles.metaRow}>
        <p>{resource}</p>
        <p>{new Date(pubDate).toLocaleDateString()}</p>
      </div>
    </a>
  );
};

export default PublicationCard;
