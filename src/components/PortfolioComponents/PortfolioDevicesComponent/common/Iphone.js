import React from "react";
import classnames from "classnames";

import IPhoneSVG from "../../../../styles/assets/images/IPhone_X.svg";

export default props => {
  return (
    <div className={classnames("device", "phone-device", "no-theme")}>
      <img src={props.img} alt="phone-screenshot" />
      <img src={IPhoneSVG} alt="iPhone" />
    </div>
  );
};
