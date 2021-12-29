import React from 'react';
import sortBy from 'lodash/sortBy';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './stats.module.scss';

interface StatisticsProps {
  books: BookOpenLibItem[];
}

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
                    backgroundColor: `#${authorId.slice(-6)}`,
                    width: pagesCount ? `${pagesCount * 0.1 + 5}px` : 'initial',
                  }}
                >
                  {/* <img src={coverSrc} alt="emperor" /> */}
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
        <StaticImage
          alt="Morphine Suffering: MADISAN 2012"
          className={styles.poster}
          src="../../assets/images/posters/morphine_2012.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="O.Torvald: MADISAN 2012"
          className={styles.poster}
          src="../../assets/images/posters/otorvald_2012.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="ПОРНОФИЛЬМЫ: Picasso 2018"
          className={styles.poster}
          src="../../assets/images/posters/pornofilmi_2018.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="Enter Shikari: !FEST Republic 2019"
          className={styles.poster}
          src="../../assets/images/posters/entershikari_2019.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="Друга Ріка: Malevich 2019"
          className={styles.poster}
          src="../../assets/images/posters/drugarika_2019.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="Bullet For My Valentine: Stereo Plaza 2019"
          className={styles.poster}
          src="../../assets/images/posters/bfmv_2019.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <StaticImage
          alt="RadioTapok: Malevich 2020"
          className={styles.poster}
          src="../../assets/images/posters/radiotapok_2020.jpeg"
          placeholder="blurred"
          layout="fullWidth"
        />
      </section>
      <section>
        <h3 className="section-title">Movies list</h3>
      </section>
    </main>
  );
};

export default Statistics;
