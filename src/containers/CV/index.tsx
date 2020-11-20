import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { groupBy, capitalize } from 'lodash';
import classNames from 'classnames';

import Markdown from '../Markdown';
import ExperienceItem from '../../components/ExperienceItem';
import { mergeExperienceWithSkills, parseQuery } from './helpers';

import GitHubSVG from '../../assets/icons/github.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
import MailSVG from '../../assets/icons/mail.svg';
import PrinterSVG from '../../assets/icons/printer.svg';
import QRWebPSVG from '../../assets/images/qr.webp';
import QRJpegSVG from '../../assets/images/qr.jpg';

import styles from './cv.module.scss';
import SkillList from '../SkillList';

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
  jsonContent: {
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
  const { mdContent, jsonContent } = useStaticQuery<Query>(graphql`
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
      jsonContent: allFile(
        filter: { sourceInstanceName: { eq: "jsonContent" } }
      ) {
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
  const { skills, experience, faq } = parseQuery<{
    experience: ExperienceItem[];
    skills: SkillItem[];
    faq: { q: string; a: string }[];
  }>(jsonContent, true);

  const extendedExperienceList = experience.map(el =>
    mergeExperienceWithSkills(el, skills)
  );
  const groupedSkills = groupBy(skills, 'category');

  return (
    <>
      <div
        className={classNames(styles.printButtonContainer, styles.flexCenter)}
      >
        <Link to="/">⟵ Back to main</Link>
        <button className={styles.printButton} onClick={handlePrint}>
          <PrinterSVG />
          Click to print
        </button>
      </div>
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
                icon: <GitHubSVG />,
              },
              {
                link: 'mailto:alexandrtovmach@gmail.com',
                label: 'alexandrtovmach@gmail.com',
                icon: <MailSVG />,
              },
              {
                link: 'https://twitter.com/alexandrtovmach',
                label: '@alexandrtovmach',
                icon: <TwitterSVG />,
              },
            ].map(({ icon, link, label }) => (
              <a
                key={label}
                className={classNames(styles.contactItem, styles.flexCenter)}
                href={link}
                target="_blank"
              >
                <span>{label}</span>
                {icon}
              </a>
            ))}
          </div>
        </section>
        <section className={styles.mainInfo}>
          <section className={styles.mainInfoLeft}>
            <article>
              <h3>Experience</h3>
              {extendedExperienceList.map(el => (
                <ExperienceItem
                  {...el}
                  key={el.startDate.toString()}
                  onHoverSkill={onChangeHighlightedSkillKey}
                  highlightedSkillKey={highlightedSkillKey}
                />
              ))}
            </article>
            <article>
              <Markdown>{personality}</Markdown>
            </article>
            <article>
              <Markdown>{ambitions}</Markdown>
            </article>
            <article>
              <h3>FAQ</h3>
              {faq.map(({ a, q }) => (
                <div className={styles.faqItem} key={q}>
                  <h4>{q}</h4>
                  <p>{a}</p>
                </div>
              ))}
            </article>
          </section>
          <section className={styles.mainInfoRight}>
            <article>
              <h3>Skills</h3>
              {Object.entries(groupedSkills).map(([groupName, groupSkills]) => (
                <div key={groupName} className={styles.skillsGroup}>
                  <h4>{capitalize(groupName)}</h4>
                  <SkillList
                    skills={groupSkills}
                    onHoverSkill={onChangeHighlightedSkillKey}
                    highlightedSkillKey={highlightedSkillKey}
                  />
                </div>
              ))}
            </article>
            <article>
              <h3>Education</h3>
              <div className={styles.educationItem}>
                <h4>Kryvyi Rih National University</h4>
                <div>2014-2019</div>
              </div>
              <div className={styles.educationItem}>
                <h4>School №32 of Kryvyi Rih</h4>
                <div>2001-2012</div>
              </div>
            </article>
            <article className={styles.websiteLinkContainer}>
              <h3>Website</h3>
              <div>alexandrtovmach.com</div>
              <picture title="alexandrtovmach.com">
                <source type="image/webp" srcSet={QRWebPSVG} />
                <img src={QRJpegSVG} alt="alexandrtovmach.com" />
              </picture>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default CVPaper;
