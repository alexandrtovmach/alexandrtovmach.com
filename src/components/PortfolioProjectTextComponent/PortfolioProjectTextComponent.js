import React from "react";
import classNames from "classnames";

export default props => {
  function renderTimeString(start, end) {
    const sD = new Date(start),
      eD = new Date(end),
      langPack = props.calendarLangPack,
      sDD = sD.getDate() || 1,
      sDM = langPack[`month${sD.getMonth() + 1}`] || "Jan",
      sDY = sD.getFullYear() || 2018,
      eDD = eD.getDate() || 2,
      eDM = langPack[`month${eD.getMonth() + 1}`] || "Jan",
      eDY = eD.getFullYear() || 2018;
    return `${sDD} ${sDM.slice(0, 3)} ${sDY} - ${eDD} ${eDM.slice(
      0,
      3
    )} ${eDY}`;
  }

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
          {renderTimeString(props.project.start, props.project.end)}
        </div>
      </div>
    </div>
  );
};
