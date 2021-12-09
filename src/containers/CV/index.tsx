import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link, navigate } from 'gatsby';
import { groupBy, capitalize } from 'lodash';
import classNames from 'classnames';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';

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
              <p className="text">
                Since childhood, I've been told that I have a&nbsp;
                <span className="highlighted">
                  constant thirst for knowledge
                </span>
                , the ability to learn quickly in areas that interest me,
                and&nbsp;
                <span className="highlighted">hate routine affairs</span>.
                Usually, I immediately get everybody's attention and
                recognition, make friends quickly, and as far as I know no one
                thinks I’m a jerk. According to the "16 personalities" test, I
                am&nbsp;
                <a
                  target="_blank"
                  title="16 personalities: Debater"
                  rel="noopener noreferrer"
                  href="https://www.16personalities.com/profiles/0748e79e8a572"
                >
                  "debater"
                </a>
                , which I think is a good description of my character.
              </p>
              <p className="text">
                I&nbsp;
                <span className="highlighted">
                  don't like anything that is obvious
                </span>
                , no matter what it is ― movie, song or even a joke. Everything
                should trigger mental activity. Therefore,&nbsp;
                <span className="highlighted">I love to solve tasks</span>
                &nbsp;and for me, the best gift is a puzzle or a book. For over
                9 years, my first and only love, who eventually became&nbsp;
                <span className="highlighted">my wife</span>, is the
                biggest&nbsp;
                <span className="highlighted">inspiration of my life</span>.
              </p>
              <p className="text">
                I respect people who believe that&nbsp;
                <span className="highlighted">
                  knowledge is not personal property
                </span>
                &nbsp; and who want to share it with others, and in that
                reason,&nbsp;
                <span className="highlighted">I'm writing articles</span>
                &nbsp;to&nbsp;
                <a
                  href="https://medium.com/@alexandrtovmach"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
                ,&nbsp;
                <a
                  href="https://habr.com/ru/users/alexandrtovmach/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Habr
                </a>
                ,&nbsp;
                <a
                  href="https://dou.ua/users/aleksandr-tovmach/articles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOU
                </a>
                , and in addition help with documentation for several projects,
                like a Node.js, Gatsby.js and SemVer.
              </p>
            </article>
            <article>
              <h3 className="section-title">Ambitions</h3>
              <p className="text">
                I wasn't even 14 when I dreamt of becoming&nbsp;
                <span className="highlighted">an archaeologist</span>&nbsp; to
                answer the questions of the evolution of species,&nbsp;
                <span className="highlighted">an inventor</span> of spacecraft
                to expand the boundaries of accessible space, and&nbsp;
                <span className="highlighted">a chemist</span>, to solve the
                environmental problems of our planet. I always wanted&nbsp;
                <span className="highlighted">
                  to change this world for the better
                </span>
                , and that's why I’m now engaged in programming to create things
                that, even if they (still) don't save lives, at least improve
                them.
              </p>
              <p className="text">
                I believe that&nbsp;
                <span className="highlighted">
                  masterpieces are created from pure enthusiasm
                </span>
                , and not for money, therefore I am open source evangelist and
                an open-minded adventurer.
              </p>
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
