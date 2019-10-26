import React from "react";
// import classnames from "classnames";

import { ReactComponent as GitHubSVG } from "../../../styles/assets/icons/github.svg";
import { ReactComponent as TwitterSVG } from "../../../styles/assets/icons/twitter.svg";
import { ReactComponent as StackOverflowSVG } from "../../../styles/assets/icons/stackoverflow.svg";
import { ReactComponent as MediumSVG } from "../../../styles/assets/icons/medium.svg";
import { ReactComponent as HabrSVG } from "../../../styles/assets/icons/habr.svg";
import { ReactComponent as DouSVG } from "../../../styles/assets/icons/dou.svg";
import { ReactComponent as NpmSVG } from "../../../styles/assets/icons/npm.svg";
import { ReactComponent as BehanceSVG } from "../../../styles/assets/icons/behance.svg";
import { ReactComponent as DribbbleSVG } from "../../../styles/assets/icons/dribbble.svg";

import "./ResourcesSection.scss";

const ResourcesSection = ({ langPack }) => {
  return (
    <section className={"about-socials"}>
      <a
        href="https://github.com/alexandrtovmach"
        target="_blank"
        title="GitHub"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <GitHubSVG className="theme-fill-second" />
      </a>
      <a
        href="https://ru.stackoverflow.com/users/312473/alexandr-tovmach"
        target="_blank"
        title="StackOverflow"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <StackOverflowSVG className="theme-fill-second" />
      </a>
      <a
        href="https://twitter.com/alexandrtovmach"
        target="_blank"
        title="Twitter"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <TwitterSVG className="theme-fill-second" />
      </a>
      <a
        href="https://www.npmjs.com/~alexandrtovmach"
        target="_blank"
        title="NPM"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <NpmSVG className="theme-fill-second" />
      </a>
      <a
        href="https://medium.com/@alexandrtovmach"
        target="_blank"
        title="Medium"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <MediumSVG className="theme-fill-second" />
      </a>
      <a
        href="https://habr.com/ru/users/alexandrtovmach"
        target="_blank"
        title="Habr"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <HabrSVG className="theme-fill-second" />
      </a>
      <a
        href="https://dou.ua/users/aleksandr-tovmach"
        target="_blank"
        title="DOU"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <DouSVG className="theme-fill-second" />
      </a>
      <a
        href="https://www.behance.net/alexandrtovmach"
        target="_blank"
        title="Behance"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <BehanceSVG className="theme-fill-second" />
      </a>
      <a
        href="https://dribbble.com/alexandrtovmach"
        target="_blank"
        title="Dribbble"
        rel="noopener noreferrer"
        className="socials-item"
      >
        <DribbbleSVG className="theme-fill-second" />
      </a>
    </section>
  );
};

export default ResourcesSection;
