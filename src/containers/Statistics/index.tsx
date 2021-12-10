import React from 'react';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookWikiItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({ books }) => {
  return (
    <main className={styles.stats}>
      <section>
        <h3 className={styles.sectionTitle}>Books list</h3>
        <ul>
          {books.map(({ firstImage, title }) => (
            <div>
              <img src={firstImage} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </ul>
      </section>
      <section>
        <h3 className={styles.sectionTitle}>Visited concerts list</h3>
      </section>
      <section>
        <h3 className={styles.sectionTitle}>Movies list</h3>
      </section>
    </main>
  );
};

export default Statistics;
