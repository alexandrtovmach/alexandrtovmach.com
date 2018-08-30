import React from "react";
import classNames from "classnames";

import { renderDateString } from "../../services/calendar";

export default props => {
  return (
    <div className="portfolio-project-text">
      <h3>{props.project.name && props.project.name[props.locale]}</h3>
      <p>
        {props.project.description && props.project.description[props.locale]}
      </p>
      <hr />
      <div className="meta-project-info">
        <div
          className={classNames("project-price", {
            hidden: !props.project.price
          })}
        >
          {props.project.price}
        </div>
        <div
          className={classNames("project-time", {
            hidden: !props.project.start || !props.project.end
          })}
        >
          {renderDateString(
            props.locale,
            props.project.start,
            props.project.end
          )}
        </div>
      </div>
    </div>
  );
};
