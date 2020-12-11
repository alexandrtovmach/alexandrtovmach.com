import React from 'react';

import PublicationCard from '../../components/PublicationCard';

import styles from './publications.module.scss';

interface Props {
  publications: PublicationItem[];
}

const Publications: React.FunctionComponent<Props> = ({ publications }) => (
  <main>
    <header className={styles.publicationsControlPanel}>
      <div className={styles.panelTexts}>
        <h1>My writings world!</h1>
        <h2>
          {publications.length} posts and translations collected from all
          resources with GraphQL+RSS
        </h2>
        <select name="select language" id="language" defaultValue="all">
          <option value="all">All languages</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ua">Ukrainian</option>
        </select>
      </div>
    </header>
    <section className={styles.publicationsWrapper}>
      {publications
        .sort(
          (a, b) =>
            new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
        )
        .map(data => (
          <PublicationCard publicationData={data} />
        ))}
    </section>
  </main>
);

export default Publications;
