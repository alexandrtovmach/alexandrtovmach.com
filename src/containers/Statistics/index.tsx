import React from 'react';
import sortBy from 'lodash/sortBy';
import classNames from 'classnames';
import * as styles from './stats.module.scss';

const authorShortener = (str: string) => {
  const names = str.split(' ');
  const lastName = names.pop();
  return [...names.map((word) => `${word[0]}.`), lastName].join(' ');
};

const titleShortener = (str: string) =>
  str.replace(/\(.*\)/, '').replace(/[;.].+/, '');

interface StatisticsProps {
  books: BookOpenLibItem[];
  bookCovers: {
    name: string;
    publicURL: string;
  }[];
  movies?: MultiplexFilmItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({
  books,
  bookCovers,
}) => {
  const bookItems = sortBy(books, 'author').map((el) => ({
    ...el,
    coverPath: (bookCovers.find((elem) => elem.name === el.workId) || {}).publicURL,
  }));
  console.log(bookItems);
  return (
    <main className={styles.stats}>
      <section>
        <ul className={styles.bookShelf}>
          {bookItems.map(
            ({
              title,
              author,
              id,
              openLibUrl,
              authorId,
              pagesCount,
              coverPath,
            }) => (
              <li key={id} className={styles.book}>
                <a
                  href={openLibUrl}
                  style={{
                    backgroundColor: `#${authorId.slice(2, 5)}`,
                    width: pagesCount ? `${pagesCount * 0.15}px` : '25px',
                  }}
                >
                  <div className={classNames(styles.left, styles.side)}></div>
                  <div className={classNames(styles.right, styles.side)}>
                    {coverPath && (
                      <img
                        className={styles.cover}
                        src={coverPath}
                        alt={`COVER ${title}`}
                      />
                    )}
                    <span className={styles.author}>{author}</span>
                    <span className={styles.title}>{title}</span>
                  </div>
                  <div className={classNames(styles.top, styles.side)}></div>
                  <div className={classNames(styles.front, styles.side)}>
                    <p className={styles.author}>{authorShortener(author)}</p>
                    <span className={styles.title}>
                      {titleShortener(title)}
                    </span>
                  </div>
                </a>
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
};

export default Statistics;
