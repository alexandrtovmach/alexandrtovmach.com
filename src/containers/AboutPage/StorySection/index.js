import React from "react";
// import classnames from "classnames";
import SpriteAnimator from "react-sprite-animator";

import eightBitSpriteSrc from "../../../styles/assets/images/8bit_sprite.png";
// import sixteenBitSVGSrc from "../../../styles/assets/images/16bit.svg";
// import comicsSVGSrc from "../../../styles/assets/images/comics.svg";
// import lowPolySVGSrc from "../../../styles/assets/images/lowpoly.svg";

import "./StorySection.scss";

const StorySection = ({ langPack: { my_story, part_one } }) => {
  return (
    <section className="about-story">
      <h1 className="h1">{my_story}</h1>
      <article>
        <div className="sprite-wrapper center">
          <SpriteAnimator
            sprite={eightBitSpriteSrc}
            width={800}
            height={800}
            scale={3}
            fps={4}
            className="story-sprite"
          />
        </div>
        <h2 className="h2">{part_one.title}</h2>
        <p className="p1">{part_one.content_1}</p>
        <p className="p1">{part_one.content_2}</p>
      </article>
      {/* <article>
        <div className="sprite-wrapper center">
          <SpriteAnimator
            sprite={eightBitSpriteSrc}
            width={800}
            height={800}
            scale={3}
            fps={4}
            className="story-sprite"
          />
        </div>
        <h2 className="h2">{langPack["16_bit"]}</h2>
        <p className="p1">{langPack["story_2_1"]}</p>
      </article> */}
    </section>
  );
};

export default StorySection;
