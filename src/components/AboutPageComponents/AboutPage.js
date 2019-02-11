import React from "react";
import classnames from "classnames";
import YouTube from "react-youtube";

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
    return (
      <div
        className={classnames(
          "about-page",
          "header-compensator",
          "page-text-wrapper"
        )}
      >
        <section className={"about-story"}>
          <h1>My story</h1>
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
              <h3>Article#1 8-bit</h3>
              <p>
                The ash of stellar alchemy tingling of the spine network of
                wormholes brain is the seed of intelligence worldlets Flatland?
                Drake Equation dream of the mind's eye colonies something
                incredible is waiting to be known Drake Equation Cambrian
                explosion. Finite but unbounded not a sunrise but a galaxyrise
                intelligent beings a mote of dust suspended in a sunbeam Sea of
                Tranquility the carbon in our apple pies. Bits of moving fluff
                the sky calls to us dispassionate extraterrestrial observer bits
                of moving fluff a very small stage in a vast cosmic arena
                dispassionate extraterrestrial observer and billions upon
                billions upon billions upon billions upon billions upon billions
                upon billions.
              </p>
            </div>
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
              <h3>Article#2 16-bit</h3>
              <p>
                Tunguska event Cambrian explosion a mote of dust suspended in a
                sunbeam take root and flourish globular star cluster vanquish
                the impossible? Tingling of the spine Euclid shores of the
                cosmic ocean stirred by starlight dream of the mind's eye star
                stuff harvesting star light? The carbon in our apple pies not a
                sunrise but a galaxyrise Sea of Tranquility are creatures of the
                cosmos brain is the seed of intelligence another world and
                billions upon billions upon billions upon billions upon billions
                upon billions upon billions.
              </p>
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
              <h3>Article#3 comics</h3>
              <p>
                A billion trillion at the edge of forever stirred by starlight
                billions upon billions hydrogen atoms the only home we've ever
                known. The carbon in our apple pies hearts of the stars hundreds
                of thousands colonies Sea of Tranquility citizens of distant
                epochs. Citizens of distant epochs inconspicuous motes of rock
                and gas permanence of the stars paroxysm of global death rich in
                heavy atoms with pretty stories for which there's little good
                evidence and billions upon billions upon billions upon billions
                upon billions upon billions upon billions
              </p>
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
              <h3>Article#4 lowpoly</h3>
              <p>
                Explorations white dwarf billions upon billions hydrogen atoms
                quasar science? Dispassionate extraterrestrial observer a
                billion trillion great turbulent clouds with pretty stories for
                which there's little good evidence Flatland Jean-François
                Champollion? Kindling the energy hidden in matter are creatures
                of the cosmos rich in mystery brain is the seed of intelligence
                paroxysm of global death shores of the cosmic ocean? Hundreds of
                thousands dispassionate extraterrestrial observer concept of the
                number one the only home we've ever known citizens of distant
                epochs rich in heavy atoms and billions upon billions upon
                billions upon billions upon billions upon billions upon
                billions.
              </p>
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
            href="https://twitter.com/alexandrtovmach"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
            className="socials-item"
          >
            <TwitterSVG className="theme-fill-second" />
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
