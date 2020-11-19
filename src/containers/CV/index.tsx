import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { graphql, useStaticQuery } from 'gatsby';

import Markdown from '../Markdown';

import GitHubSVG from '../../assets/icons/github.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
import MailSVG from '../../assets/icons/mail.svg';
import PrinterSVG from '../../assets/icons/printer.svg';
import QRWebPSVG from '../../assets/images/qr.webp';
import QRJpegSVG from '../../assets/images/qr.jpg';

import styles from './cv.module.scss';

interface Query {
  allFile: {
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
  const componentRef = useRef<HTMLElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const {
    allFile: { edges },
  } = useStaticQuery<Query>(graphql`
    query MarkdownContent {
      allFile(filter: { extension: { eq: "md" } }) {
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

  const contentMd: { [key: string]: string } = {};
  edges.forEach(
    ({
      node: {
        name,
        internal: { content },
      },
    }) => {
      contentMd[name] = content;
    }
  );

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
              <h4>
                MedRecord
                <a
                  href="https://medrecord.io/"
                  target="_blank"
                  title="MedRecord"
                  className={styles.externalLink}
                ></a>
                <span className={styles.time}>(09.2020 ⇢ now)</span>
              </h4>
              <p>
                Delivering high quality, secure eHealth solutions, and making
                tools for online medical management.
              </p>
              <h4>
                Crowdin
                <a
                  href="https://crowdin.com/"
                  target="_blank"
                  title="Crowdin"
                  className={styles.externalLink}
                ></a>
                <span className={styles.time}>(09.2019 ⇢ now) [part-time]</span>
              </h4>
              <p>
                Integrated localization platform with designer tools like Figma,
                AdobeXD.
              </p>
              <h4>
                Binary Studio
                <a
                  href="https://binary-studio.com/"
                  target="_blank"
                  title="Binary Studio"
                  className={styles.externalLink}
                ></a>
                <span className={styles.time}>(05.2017 ⇢ 10.2020)</span>
              </h4>
              <p>
                Work on platform for nurses booking. Recorded a few technical
                lectures and was a mentor for a team of students in Binary
                Studio Academy. Implemented 10 modules for digital signage
                software player ecosystem.
              </p>
              <h4>
                DeliSol LLC
                <span className={styles.time}>(07.2016 ⇢ 09.2017)</span>
              </h4>
              <p>
                Email marketing, online advertising, customer support, and
                website development.
              </p>
            </article>
            <article className={styles.aboutme}>
              <Markdown>{contentMd.personality}</Markdown>
            </article>
            <article className={styles.aboutme}>
              <Markdown>{contentMd.ambitions}</Markdown>
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
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Gatsby.js</li>
                <li>TypeScript</li>
                <li>HTML/CSS/JavaScript</li>
                <li>Angular</li>
              </ul>
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Feathers.js</li>
                <li>Nest.js</li>
                <li>GraphQL</li>
                <li>Serverless</li>
              </ul>
              <h4>Mobile</h4>
              <ul>
                <li>React Native</li>
                <li>Flutter</li>
              </ul>
              <h4>Databases</h4>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
              <h4>Design</h4>
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
              </ul>
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
