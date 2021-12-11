import React from 'react';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookWikiItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({ books }) => {
  return (
    <main className={styles.stats}>
      <section>
        <h3 className="section-title">Books list</h3>
        <ul className={styles.bookShelf}>
          {books.map(({ title, author }) => (
            <li>
              {/* <img src={firstImage} alt={title} /> */}
              <h3>{title}</h3>
              <span>{author}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="section-title">Visited concerts list</h3>
      </section>
      <section>
        <h3 className="section-title">Movies list</h3>
      </section>
    </main>
  );
};

export default Statistics;
