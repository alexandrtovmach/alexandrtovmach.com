import React from 'react';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookOpenLibItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({ books }) => {
  return (
    <main className={styles.stats}>
      <section>
        <h3 className="section-title">Books list</h3>
        <ul className={styles.bookShelf}>
          {books.map(({ title, author, id, internal }) => (
            <li key={id}>
              {console.log(JSON.parse(internal.content))}
              <span>{author}</span>
              <h3>{title.replace(/\(.*\)/, '')}</h3>
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
