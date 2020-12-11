import React from 'react';

import PublicationCard from '../../components/PublicationCard';

import styles from './publications.module.scss';

interface Props {
  publications: PublicationItem[];
}

const Publications: React.FunctionComponent<Props> = ({ publications }) => (
  <section className={styles.publicationsWrapper}>
    {publications
      .sort(
        (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
      )
      .map(data => (
        <PublicationCard publicationData={data} />
      ))}
  </section>
);

export default Publications;
