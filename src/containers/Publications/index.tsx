import React, { useState } from 'react';
import classNames from 'classnames';

import PublicationCard from '../../components/PublicationCard';

import styles from './publications.module.scss';
import { Link, navigate } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

interface Props {
  publications: (PublicationItem & { coverImg: string })[];
}

const Publications: React.FunctionComponent<Props> = ({ publications }) => {
  const [language, onLanguageChange] = useState('all');

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onLanguageChange(event.target.value);
  };

  const handleBackPress = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    trackCustomEvent({
      category: 'engagement',
      action: 'go_back',
      label: 'Back to home',
    });
    navigate((event.target as HTMLAnchorElement)['href']);
  };

  return (
    <main>
      <nav
        className={classNames(styles.printButtonContainer, styles.flexCenter)}
      >
        <Link to="/" onClick={handleBackPress}>
          ⟵ Back to main
        </Link>
      </nav>
      <header className={styles.publicationsControlPanel}>
        <div className={styles.panelTexts}>
          <h1>My writings world!</h1>
          <h2>
            {
              publications.filter(el =>
                language === 'all' ? true : el.language === language
              ).length
            }{' '}
            posts and translations collected from public blogs with GraphQL+RSS
          </h2>
        </div>
        <select
          className={styles.customSelect}
          name="select language"
          id="language"
          defaultValue="all"
          onChange={handleLanguageChange}
        >
          <option value="all">All languages</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uk">Ukrainian</option>
        </select>
      </header>
      <section className={styles.publicationsWrapper}>
        {publications
          .sort(
            (a, b) =>
              new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
          )
          .filter(el => (language === 'all' ? true : el.language === language))
          .map(data => (
            <PublicationCard key={data.link} publicationData={data} />
          ))}
      </section>
    </main>
  );
};

export default Publications;
