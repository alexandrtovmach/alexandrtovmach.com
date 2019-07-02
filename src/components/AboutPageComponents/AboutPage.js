import React from "react";
import classnames from "classnames";
import YouTube from "react-youtube";
import SpriteAnimator from "react-sprite-animator";

import eightBitSVGSrc from "../../styles/assets/images/8bit.svg";
import sixteenBitSVGSrc from "../../styles/assets/images/16bit.svg";
import comicsSVGSrc from "../../styles/assets/images/comics.svg";
import lowPolySVGSrc from "../../styles/assets/images/lowpoly.svg";

import { ReactComponent as GitHubSVG } from "../../styles/assets/icons/github.svg";
import { ReactComponent as TwitterSVG } from "../../styles/assets/icons/twitter.svg";
import { ReactComponent as StackOverflowSVG } from "../../styles/assets/icons/stackoverflow.svg";
import { ReactComponent as MediumSVG } from "../../styles/assets/icons/medium.svg";
import { ReactComponent as HabrSVG } from "../../styles/assets/icons/habr.svg";
import { ReactComponent as DouSVG } from "../../styles/assets/icons/dou.svg";
import { ReactComponent as NpmSVG } from "../../styles/assets/icons/npm.svg";
import { ReactComponent as BehanceSVG } from "../../styles/assets/icons/behance.svg";
import { ReactComponent as DribbbleSVG } from "../../styles/assets/icons/dribbble.svg";

export default class About extends React.Component {
  render() {
    const { langPack } = this.props;
    return (
      <div
        className={classnames(
          "about-page",
          "header-compensator",
          "page-text-wrapper"
        )}
      >
        <section className={"about-story"}>
          <h1>{langPack["my_story"]}</h1>
          <article
            className={classnames("image-right", "parallax")}
            style={{ backgroundImage: `url(${eightBitSVGSrc})` }}
          >
            <div
              className={classnames(
                "article-text-content",
                "theme-background-main"
              )}
            >
              <h3>8-bit</h3>
              <p>{langPack["story_1"]}</p>
            </div>
            <SpriteAnimator
              sprite="https://cdn.codeandweb.com/blog/2016/05/10/how-to-create-a-sprite-sheet/spritestrip.png"
              width={258}
              height={258}
              fps={15}
              className="story-sprite"
            />
          </article>
          <article
            className={classnames("image-right", "parallax")}
            style={{ backgroundImage: `url(${sixteenBitSVGSrc})` }}
          >
            <div
              className={classnames(
                "article-text-content",
                "theme-background-main"
              )}
            >
              <h3>16-bit</h3>
              <p>{langPack["story_2"]}</p>
            </div>
          </article>
          <article
            className={classnames("image-right", "parallax")}
            style={{ backgroundImage: `url(${comicsSVGSrc})` }}
          >
            <div
              className={classnames(
                "article-text-content",
                "theme-background-main"
              )}
            >
              <h3>Comics</h3>
              <p>{langPack["story_3"]}</p>
            </div>
          </article>
          <article
            className={classnames("image-right", "parallax")}
            style={{ backgroundImage: `url(${lowPolySVGSrc})` }}
          >
            <div
              className={classnames(
                "article-text-content",
                "theme-background-main"
              )}
            >
              <h3>Lowpoly</h3>
              <p>{langPack["story_4"]}</p>
            </div>
          </article>

          {/* <div className="alex-bubble">
            <div className="alex-bubble-content">
              <span>How to create image like this?</span>
              <a href="https://youtube.com">Watch on my YouTube</a>
            </div>
          </div> */}
        </section>
        <section className={"about-media"}>
          <YouTube
            videoId={"aUjBvuUdkhg"}
            className={"media-youtube"}
            containerClassName={"media-youtube-container"}
          />
        </section>
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
            href="https://www.behance.net/alexandrto3b08"
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
      </div>
    );
  }
}
