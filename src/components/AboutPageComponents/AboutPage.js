import React from "react";
import classnames from "classnames";

import AlexSVGSrc from "../../styles/assets/images/alex.svg";

export default class About extends React.Component {
  render() {
    return (
      <div className={classnames("about-page")}>
        <img
          src={AlexSVGSrc}
          alt="it's me"
          className={classnames("alex-svg", {})}
        />
      </div>
    );
  }
}
