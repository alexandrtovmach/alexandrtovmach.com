import React, { useState } from 'react';
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
  const [activeBookId, setActiveBookId] = useState('');
  const bookItems = sortBy(books, 'author').map((el) => ({
    ...el,
    coverPath: (bookCovers.find((elem) => elem.name === el.workId) || {})
      .publicURL,
  }));

  const handleBookClick: (
    bookId: string
  ) => React.MouseEventHandler<HTMLElement> = (bookId) => (e) => {
    e.stopPropagation();
    setActiveBookId(bookId);
  };

  return (
    <main className={styles.stats} onClick={handleBookClick('')}>
      {/* <section>
        <p>
          My personal reading list. All book covers generated with{' '}
          <a href="https://openai.com/dall-e-2/">DALL-E 2</a>
        </p>
      </section> */}
      <section>
        <ul className={styles.booksList}>
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
              <li
                key={id}
                className={classNames(styles.book, {
                  [styles.active]: activeBookId === id,
                })}
                style={{
                  backgroundColor: `#${authorId.slice(2, 5)}`,
                  flexBasis: pagesCount ? `${pagesCount * 0.3}px` : '50px',
                }}
                onClick={handleBookClick(id)}
              >
                <div className={classNames(styles.left, styles.side)}></div>
                <a href={openLibUrl} target="_blank" className={classNames(styles.right, styles.side)}>
                  {coverPath && (
                    <img
                      className={styles.cover}
                      src={coverPath}
                      alt={`cover for "${title}" by DALL-E 2`}
                    />
                  )}
                  <span className={styles.author}>{author}</span>
                  <h3 className={styles.title}>
                    {title}
                  </h3>
                </a>
                <div className={classNames(styles.top, styles.side)}></div>
                <div className={classNames(styles.front, styles.side)}>
                  <p className={styles.author}>{authorShortener(author)}</p>
                  <span className={styles.title}>{titleShortener(title)}</span>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
};

export default Statistics;
