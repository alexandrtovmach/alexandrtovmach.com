import React from "react";
// import classnames from "classnames";
import SpriteAnimator from "react-sprite-animator";

import eightBitSpriteSrc from "../../../styles/assets/images/8bit_sprite.png";
import sixteenBitSVGSrc from "../../../styles/assets/images/16bit_sprite.png";
// import sixteenBitSVGSrc from "../../../styles/assets/images/16bit.svg";
// import comicsSVGSrc from "../../../styles/assets/images/comics.svg";
// import lowPolySVGSrc from "../../../styles/assets/images/lowpoly.svg";

import "./StorySection.scss";

const StorySection = ({ langPack: { my_story, part_one, part_two, part_three, part_four } }) => {
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
      <article>
        <div className="sprite-wrapper center">
          <SpriteAnimator
            sprite={sixteenBitSVGSrc}
            width={800}
            height={800}
            scale={3}
            fps={8}
            frameCount={6}
            className="story-sprite"
          />
        </div>
        <h2 className="h2">{part_two.title}</h2>
        <p className="p1">{part_two.content_1}</p>
        <p className="p1">{part_two.content_2}</p>
      </article>
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
        <h2 className="h2">{part_three.title}</h2>
        <p className="p1">{part_three.content_1}</p>
      </article>
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
        <h2 className="h2">{part_four.title}</h2>
        <p className="p1">{part_four.content_1}</p>
      </article>
    </section>
  );
};

export default StorySection;

// https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0
