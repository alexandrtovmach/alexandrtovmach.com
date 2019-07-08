import React from "react";
import classnames from "classnames";
import Image from "react-simple-image";

import IPhoneSVG from "../../../../styles/assets/images/IPhone_X.svg";

export default ({ images }) => {
  return (
    <div className={classnames("device", "phone-device", "no-theme")}>
      <Image
        alt="phone-screenshot"
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
      <img src={IPhoneSVG} alt="iPhone" />
    </div>
  );
};
