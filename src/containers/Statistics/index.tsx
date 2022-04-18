import React from 'react';
import sortBy from 'lodash/sortBy';
import { StaticImage } from 'gatsby-plugin-image';
// @ts-ignore
import Gallery from 'react-grid-gallery';
import classNames from 'classnames';

import Poster1 from '../../assets/images/posters/morphine_2012.jpeg';
import Poster2 from '../../assets/images/posters/prostorock_2012.jpeg';
import Poster3 from '../../assets/images/posters/otorvald_2012.jpeg';
import Poster4 from '../../assets/images/posters/pornofilmi_2018.jpeg';
import Poster5 from '../../assets/images/posters/entershikari_2019.jpeg';
import Poster6 from '../../assets/images/posters/drugarika_2019.jpeg';
import Poster7 from '../../assets/images/posters/bfmv_2019.jpeg';
import Poster8 from '../../assets/images/posters/radiotapok_2020.jpeg';

import * as styles from './stats.module.scss';

const authorShortener = (str: string) => {
  const names = str.split(' ');
  const lastName = names.pop();
  return [...names.map((word) => `${word[0]}.`), lastName].join(
    ' '
  );
};

const titleShortener = (str: string) => str.replace(/\(.*\)/, '').replace(/[;.].+/, '');

interface StatisticsProps {
  books: BookOpenLibItem[];
  movies: MultiplexFilmItem[];
}

const Statistics: React.FunctionComponent<StatisticsProps> = ({
  books,
  movies,
}) => {
  return (
    <main className={styles.stats}>
      <section>
        <ul className={styles.bookShelf}>
          {sortBy(books, 'author').map(
            ({
              title,
              author,
              id,
              openLibUrl,
              authorId,
              pagesCount,
              // coverColor,
              // coverSrc,
            }) => (
              <li key={id} className={styles.book}>
                <a
                  href={openLibUrl}
                  style={{
                    // backgroundColor: coverColor,
                    // backgroundImage: `url(${coverSrc}`,
                    backgroundColor: `#${authorId.slice(2, 5)}`,
                    width: pagesCount ? `${pagesCount * 0.15}px` : '25px',
                  }}
                >
                  {/* <div className={classNames(styles.back, styles.side)}></div> */}
                  <div className={classNames(styles.left, styles.side)}></div>
                  <div className={classNames(styles.right, styles.side)}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.title}>{title}</span>
                  </div>
                  <div className={classNames(styles.top, styles.side)}></div>
                  {/* <div className={classNames(styles.bottom, styles.side)}></div> */}
                  <div className={classNames(styles.front, styles.side)}>
                    <p className={styles.author}>{authorShortener(author)}</p>
                    <span className={styles.title}>{titleShortener(title)}</span>
                  </div>
                </a>
              </li>
            )
          )}
          {/* <img
            className={styles.duck}
            src="https://pngimg.com/uploads/rubber_duck/rubber_duck_PNG54.png"
            alt=""
          /> */}
        </ul>
      </section>
      {/* <section className={styles.posters}>
        {[
          Poster1,
          Poster2,
          Poster3,
          Poster4,
          Poster5,
          Poster6,
          Poster7,
          Poster8,
        ].map((src, i) => (
          <img key={`poster-${i}`} src={src} alt={`poster-${i}`} />
        ))}
      </section>
      <section className={styles.posters}>
        {movies.map(({ id, innerPoster, title }) => (
          <img key={id} src={innerPoster} alt={title} />
        ))}
      </section> */}
    </main>
  );
};

export default Statistics;
