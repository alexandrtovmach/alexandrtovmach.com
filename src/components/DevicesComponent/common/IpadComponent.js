import React from "react";
import classnames from "classnames";

import IPadSVG from "../../../styles/assets/images/IPad_Air.svg";

export default props => {
  return (
    <div className={classnames("device", "pad-device", "no-theme")}>
      <img src={props.img} alt="pad-screenshot" />
      <img src={IPadSVG} />
    </div>
  );
};
