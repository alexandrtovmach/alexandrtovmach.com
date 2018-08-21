import React from 'react';
import classNames from "classnames";

export default (props) => {

  function renderTimeString(start, end) {
    const sm = new Date(start).toDateString().match(/(\w+\s)(\w+)\s(\d+)\s(\d+)/);
    const em = new Date(end).toDateString().match(/(\w+\s)(\w+)\s(\d+)\s(\d+)/);
    return `${sm[2]}${sm[3]} ${sm[4]} - ${em[2]}${em[3]} ${em[4]}`
  }

  return (
    <div className="portfolio-project-text">
      <h3>{props.project.name[props.locale]}</h3>
      <p>{props.project.description[props.locale]}</p>
      <hr/>
      <div className="meta-project-info">
        <div className={classNames("project-price", {
          "hidden": !props.project.price
        })}>
          {props.project.price}
        </div>
        <div className={classNames("project-time", {
          "hidden": !props.project.start || !props.project.end
        })}>
          {renderTimeString(props.project.start, props.project.end)}
        </div>
      </div>
    </div>
  )
}