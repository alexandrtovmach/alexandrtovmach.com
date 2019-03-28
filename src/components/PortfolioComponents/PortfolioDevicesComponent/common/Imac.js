import React from "react";
import classnames from "classnames";
import Image from "react-simple-image";

import IMacSVG from "../../../../styles/assets/images/IMac.svg";

export default ({ images }) => {
  return (
    <div className={classnames("device", "desktop-device", "no-theme")}>
      <Image
        alt="desktop-screenshot"
        srcSet={{
          "400w": images.x1,
          "1600w": images.x2,
          "2500w": images.x3
        }}
        sizes={[
          { size: "80vw", mediaCondition: "(max-width: $mq-laptop)" },
          { size: "50vw" }
        ]}
        src={images.x1}
      />
      <img src={IMacSVG} alt="iMac" />
    </div>
  );
};
