import React from "react";
import classnames from "classnames";
import Image from "react-simple-image";

import IPadSVG from "../../../../styles/assets/images/IPad_Air.svg";

const IPad = ({ images }) => {
  return (
    <div className={classnames("device", "pad-device", "no-theme")}>
      <Image
        alt="pad-screenshot"
        srcSet={{
          "400w": images.x1,
          "1600w": images.x2,
          "2500w": images.x3
        }}
        sizes={[{ size: "80vw", mediaCondition: "(max-width: $mq-laptop)" }, { size: "50vw" }]}
        src={images.x1}
      />
      <img src={IPadSVG} alt="iPad" />
    </div>
  );
};

export default IPad;
