import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import { groupBy, capitalize } from 'lodash';
import classNames from 'classnames';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';

import Markdown from '../Markdown';
import ExperienceItem from '../../components/ExperienceItem';
import { mergeExperienceWithSkills, parseQuery } from './helpers';
import SkillList from '../SkillList';

import GitHubSVG from '../../assets/icons/github.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
import MailSVG from '../../assets/icons/mail.svg';
import PrinterSVG from '../../assets/icons/printer.svg';
import QRWebPSVG from '../../assets/images/qr.webp';
import QRJpegSVG from '../../assets/images/qr.jpg';
import faq from '../../content/faq.json';
import experience from '../../content/experience.json';
import skills from '../../content/skills.json';

import * as styles from './cv.module.scss';

interface Query {
  mdContent: {
    edges: {
      node: {
        name: string;
        internal: {
          content: string;
        };
      };
    }[];
  };
}

const CVPaper = () => {
  const [highlightedSkillKey, onChangeHighlightedSkillKey] = useState<
    string | undefined
  >();
  const componentRef = useRef<HTMLElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

  const handlePrintPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'generate_lead',
      label: 'Print CV',
    });

    handlePrint && handlePrint();
  };

  const { mdContent } = useStaticQuery<Query>(graphql`
    query MarkdownContent {
      mdContent: allFile(filter: { sourceInstanceName: { eq: "mdContent" } }) {
        edges {
          node {
            name
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const { personality, ambitions } = parseQuery<{
    personality: string;
    ambitions: string;
  }>(mdContent);

  const extendedExperienceList = experience.map((el) =>
    mergeExperienceWithSkills(el, skills as SkillItem[])
  );
  const groupedSkills = groupBy<SkillItem>(skills as SkillItem[], 'category');

  return (
    <div>
      <nav
        className={classNames(styles.printButtonContainer, styles.flexCenter)}
      >
        <Link to="/" onClick={handleBackPress}>
          ⟵ Back to main
        </Link>
        <button className={styles.printButton} onClick={handlePrintPress}>
          <PrinterSVG />
          Click to print
        </button>
      </nav>
      <main className={styles.paper} ref={componentRef}>
        <section className={styles.basicInfo}>
          <div className={styles.title}>
            <h1>ALEXANDR TOVMACH</h1>
            <h2>full stack engineer & UI/UX designer</h2>
          </div>
          <div className={styles.contacts}>
            {[
              {
                link: 'https://github.com/alexandrtovmach',
                label: 'alexandrtovmach',
                title: 'My GitHub',
                icon: <GitHubSVG />,
              },
              {
                link: 'mailto:alexandrtovmach@gmail.com',
                label: 'alexandrtovmach@gmail.com',
                title: 'Email address',
                icon: <MailSVG />,
              },
              {
                link: 'https://twitter.com/alexandrtovmach',
                label: '@alexandrtovmach',
                title: 'My Twitter',
                icon: <TwitterSVG />,
              },
            ].map(({ icon, link, label, title }) => (
              <OutboundLink
                aria-label={title}
                key={label}
                className={classNames(
                  styles.contactItem,
                  styles.flexCenter,
                  'secondary-text'
                )}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <span>{label}</span>
                {icon}
              </OutboundLink>
            ))}
          </div>
        </section>
        <section className={styles.mainInfo}>
          <section className={styles.mainInfoLeft}>
            <article>
              <h3 className="section-title ">Experience</h3>
              {extendedExperienceList.map((el) => (
                <ExperienceItem
                  {...el}
                  key={el.startDate.toString()}
                  onHoverSkill={onChangeHighlightedSkillKey}
                  highlightedSkillKey={highlightedSkillKey}
                />
              ))}
            </article>
            <article>
              <h3 className="section-title">Personality</h3>
              <Markdown>{personality}</Markdown>
            </article>
            <article>
              <h3 className="section-title">Ambitions</h3>
              <Markdown>{ambitions}</Markdown>
            </article>
            <article>
              <h3 className="section-title ">FAQ</h3>
              {faq.map(({ a, q }) => (
                <div className={styles.faqItem} key={q}>
                  <h4 className="label">{q}</h4>
                  <p className="text">{a}</p>
                </div>
              ))}
            </article>
          </section>
          <section className={styles.mainInfoRight}>
            <article>
              <h3 className="section-title ">Skills</h3>
              {Object.entries(groupedSkills).map(([groupName, groupSkills]) => (
                <div key={groupName} className={styles.skillsGroup}>
                  <h4 className="label">{capitalize(groupName)}</h4>
                  <SkillList
                    skills={groupSkills}
                    onHoverSkill={onChangeHighlightedSkillKey}
                    highlightedSkillKey={highlightedSkillKey}
                  />
                </div>
              ))}
            </article>
            <article>
              <h3 className="section-title ">Education</h3>
              <div className={styles.educationItem}>
                <h4 className="label">Kryvyi Rih National University</h4>
                <p className="text">2014-2019</p>
              </div>
              <div className={styles.educationItem}>
                <h4 className="label">School №32 of Kryvyi Rih</h4>
                <p className="text">2001-2012</p>
              </div>
            </article>
            <article className={styles.websiteLinkContainer}>
              <h3 className="section-title ">Website</h3>
              <p className="label">alexandrtovmach.com</p>
              <picture title="alexandrtovmach.com">
                <source type="image/webp" srcSet={QRWebPSVG} />
                <img src={QRJpegSVG} alt="alexandrtovmach.com" />
              </picture>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
};

export default CVPaper;
