import React from "react";
import classnames from "classnames";

import IMacSVG from "../../../styles/assets/images/IMac.svg";

export default props => {
  return (
    <div className={classnames("device", "desktop-device", "no-theme")}>
      <img src={props.img} alt="desktop-screenshot" />
      <img src={IMacSVG} />
    </div>
  );
};
