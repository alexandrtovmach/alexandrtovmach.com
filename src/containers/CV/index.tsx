import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { graphql, useStaticQuery } from 'gatsby';
import { groupBy, capitalize } from 'lodash';

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
  const { skills, experience } = parseQuery<{
    experience: ExperienceItem[];
    skills: SkillItem[];
  }>(jsonContent, true);

  const extendedExperienceList = experience.map(el =>
    mergeExperienceWithSkills(el, skills)
  );
  const groupedSkills = groupBy(skills, 'category');

  return (
    <>
      <div
        className={[styles.printButtonContainer, styles.flexCenter].join(' ')}
      >
        <button className={styles.printButton} onClick={handlePrint}>
          <PrinterSVG />
          Click to print
        </button>
      </div>
      <main className={styles.paper} ref={componentRef}>
        <section className={styles.basicInfo}>
          <div className={styles.text}>
            <h1>ALEXANDR TOVMACH</h1>
            <h2>full stack engineer & UI/UX designer</h2>
          </div>
          <div className={styles.contacts}>
            <a
              className={[styles.contactItem, styles.flexCenter].join(' ')}
              href="https://github.com/alexandrtovmach"
              target="_blank"
            >
              <span>alexandrtovmach</span>
              <GitHubSVG />
            </a>
            <a
              className={[styles.contactItem, styles.flexCenter].join(' ')}
              href="mailto:alexandrtovmach@gmail.com"
            >
              <span>alexandrtovmach@gmail.com</span>
              <MailSVG />
            </a>
            <a
              className={[styles.contactItem, styles.flexCenter].join(' ')}
              href="https://twitter.com/alexandrtovmach"
              target="_blank"
            >
              <span>@alexandrtovmach</span>
              <TwitterSVG />
            </a>
          </div>
        </section>
        <section className={styles.mainInfo}>
          <section className={styles.mainInfoLeft}>
            <article className={styles.experience}>
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
            <article className={styles.aboutme}>
              <Markdown>{personality}</Markdown>
            </article>
            <article className={styles.aboutme}>
              <Markdown>{ambitions}</Markdown>
            </article>
            <article className={styles.lookingfor}>
              <h3>FAQ</h3>
              <h4>What type of cooperation would I prefer?</h4>
              <p>
                Direct cooperation with product company, without
                outsource/outstaff agencies.
              </p>
              <h4>What industry would I like to work in?</h4>
              <p>
                Innovations, Healthcare, Music / Sound Engineering or something
                interesting.
              </p>
              <h4>Remote vs Office</h4>
              <p>
                When I started in IT my main goal was to be able to travel, and
                now, after 4 years working in office, I am looking for a
                completely remote position.
              </p>
              <h4>Frontend vs Backend?</h4>
              <p>
                I'm ready to work with both, but... if I have a choice it's a
                frontend.
              </p>
              <h4>React vs Angular vs Vue?</h4>
              <p>
                I remember a lot of discussions about this, but for the last 4
                years, I prefer to React, in the reason of requirements for
                projects.
              </p>
            </article>
          </section>
          <section className={styles.mainInfoRight}>
            <article className={styles.skills}>
              <h3>Skills</h3>
              {Object.entries(groupedSkills).map(([groupName, groupSkills]) => (
                <React.Fragment key={groupName}>
                  <h4>{capitalize(groupName)}</h4>
                  <SkillList
                    skills={groupSkills}
                    onHoverSkill={onChangeHighlightedSkillKey}
                    highlightedSkillKey={highlightedSkillKey}
                  />
                </React.Fragment>
              ))}
            </article>
            <article className={styles.education}>
              <h3>Education</h3>
              <h4>Kryvyi Rih National University</h4>
              <span>2014-2019</span>
              <h4>School №32 of Kryvyi Rih</h4>
              <span>2001-2012</span>
            </article>
            <article className={styles.websiteLinkContainer}>
              <h3>Website</h3>
              <span>https://alexandrtovmach.com</span>
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
