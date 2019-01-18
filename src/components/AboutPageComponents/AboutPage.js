import React from "react";
import classnames from "classnames";

import AlexSVGSrc from "../../styles/assets/images/alex.svg";

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
        <h1>My story</h1>
        <section className={"about-story"}>
          <article className={classnames("image-right", "parallax")}>
            <div
              className={classnames("parallax-layer", "parallax-layer--back")}
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
            <img
              src={AlexSVGSrc}
              alt="it's me"
              className={classnames(
                "parallax-layer",
                "parallax-layer--back",
                "alex-img"
              )}
            />
          </article>
          <article className={"image-left"}>
            <div>
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
            <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
          </article>
          <article className={"image-right"}>
            <div>
              Article#3 comics
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
            <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
          </article>
          <article>
            <div>
              Article#4 flat
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
            <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
          </article>
          <article>
            <div>
              Article#5 lowpoly
              <p>
                Extraordinary claims require extraordinary evidence another
                world Vangelis the ash of stellar alchemy vanquish the
                impossible Drake Equation. Brain is the seed of intelligence
                emerged into consciousness rings of Uranus concept of the number
                one from which we spring hundreds of thousands. Hundreds of
                thousands encyclopaedia galactica hundreds of thousands
                inconspicuous motes of rock and gas something incredible is
                waiting to be known inconspicuous motes of rock and gas and
                billions upon billions upon billions upon billions upon billions
                upon billions upon billions.
              </p>
              <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
            </div>
          </article>
          <article>
            Article#6 3d
            <p>
              Globular star cluster hearts of the stars the ash of stellar
              alchemy extraplanetary cosmic fugue bits of moving fluff.
              Something incredible is waiting to be known rings of Uranus the
              sky calls to us with pretty stories for which there's little good
              evidence across the centuries from which we spring? Made in the
              interiors of collapsing stars inconspicuous motes of rock and gas
              Sea of Tranquility are creatures of the cosmos network of
              wormholes take root and flourish and billions upon billions upon
              billions upon billions upon billions upon billions upon billions.
            </p>
            <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
          </article>

          <div className="alex-bubble">
            <div className="alex-bubble-content">
              <span>How to create image like this?</span>
              <a href="https://youtube.com">Watch on my YouTube</a>
            </div>
          </div>
        </section>
        <section className={"about-media"} />
        <section className={"about-charts"} />
      </div>
    );
  }
}
