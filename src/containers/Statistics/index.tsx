import React from 'react';
import sortBy from 'lodash/sortBy';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookOpenLibItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({ books }) => {
  return (
    <main className={styles.stats}>
      <section>
        <h3 className="section-title">Read books list</h3>
        <ul className={styles.bookShelf}>
          {sortBy(books, 'author').map(
            ({ title, author, id, openLibUrl, authorId }) => (
              <a href={openLibUrl} key={id}>
                <li style={{ backgroundColor: `#5${authorId.slice(-5)}` }}>
                  {/* {console.log(JSON.parse(internal.content))} */}
                  <span>{author}</span>
                  <h3>{title.replace(/\(.*\)/, '')}</h3>
                </li>
              </a>
            )
          )}
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
