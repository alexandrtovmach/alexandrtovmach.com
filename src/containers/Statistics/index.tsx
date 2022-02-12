import React from 'react';
import sortBy from 'lodash/sortBy';
import { StaticImage } from 'gatsby-plugin-image';
// @ts-ignore
import Gallery from 'react-grid-gallery';

import Poster1 from '../../assets/images/posters/morphine_2012.jpeg';
import Poster2 from '../../assets/images/posters/prostorock_2012.jpeg';
import Poster3 from '../../assets/images/posters/otorvald_2012.jpeg';
import Poster4 from '../../assets/images/posters/pornofilmi_2018.jpeg';
import Poster5 from '../../assets/images/posters/entershikari_2019.jpeg';
import Poster6 from '../../assets/images/posters/drugarika_2019.jpeg';
import Poster7 from '../../assets/images/posters/bfmv_2019.jpeg';
import Poster8 from '../../assets/images/posters/radiotapok_2020.jpeg';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookOpenLibItem[];
}

const IMAGES = [
  {
    src: Poster1,
    thumbnail: Poster1,
  },
  {
    src: Poster2,
    thumbnail: Poster2,
  },
  {
    src: Poster3,
    thumbnail: Poster3,
  },
  {
    src: Poster4,
    thumbnail: Poster4,
  },
  {
    src: Poster5,
    thumbnail: Poster5,
  },
  {
    src: Poster6,
    thumbnail: Poster6,
  },
  {
    src: Poster7,
    thumbnail: Poster7,
  },
  {
    src: Poster8,
    thumbnail: Poster8,
  },
];

const Statistics: React.FunctionComponent<StatisticsProps> = ({ books }) => {
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
              <a href={openLibUrl} key={id}>
                <li
                  style={{
                    // backgroundColor: coverColor,
                    // backgroundImage: `url(${coverSrc}`,
                    backgroundColor: `#${authorId.slice(-6)}`,
                    width: pagesCount ? `${pagesCount * 0.1 + 5}px` : 'initial',
                  }}
                >
                  <span>{author}</span>
                  <h3>{title.replace(/\(.*\)/, '')}</h3>
                </li>
              </a>
            )
          )}
          <img
            className={styles.duck}
            src="https://pngimg.com/uploads/rubber_duck/rubber_duck_PNG54.png"
            alt=""
          />
        </ul>
      </section>
      <section className={styles.posters}>
        <Gallery images={IMAGES} enableImageSelection={false} rowHeight={400} />
      </section>
      <section>
        <h3 className="section-title">Movies list</h3>
      </section>
    </main>
  );
};

export default Statistics;
