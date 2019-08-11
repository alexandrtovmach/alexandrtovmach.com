import React from "react";
// import classnames from "classnames";
import SpriteAnimator from "react-sprite-animator";

import eightBitSpriteSrc from "../../../styles/assets/images/8bit_sprite.png";
// import sixteenBitSVGSrc from "../../../styles/assets/images/16bit.svg";
// import comicsSVGSrc from "../../../styles/assets/images/comics.svg";
// import lowPolySVGSrc from "../../../styles/assets/images/lowpoly.svg";

import "./StorySection.scss";

const StorySection = ({ langPack }) => {
  return (
    <section className="about-story">
      <h1>{langPack["my_story"]}</h1>
      <article>
        <div>
          <h3>8-bit</h3>
          <p>{langPack["story_1"]}</p>
        </div>
        <SpriteAnimator
          sprite={eightBitSpriteSrc}
          width={800}
          height={800}
          scale={7}
          fps={5}
          className="story-sprite"
        />
      </article>
    </section>
  );
};

export default StorySection;
