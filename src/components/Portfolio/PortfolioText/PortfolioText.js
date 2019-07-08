import React from "react";
import classNames from "classnames";

import { renderDateString } from "../../../services/calendar";

import "./PortfolioText.scss";

export default ({
  project: { name, description, price, start, end },
  locale
}) => {
  return (
    <div className="portfolio-project-text post">
      <h3>{name && name[locale]}</h3>
      <p>{description && description[locale]}</p>
      <div className="meta-project-info">
        <div
          className={classNames("project-price", {
            hidden: !price
          })}
        >
          {price}
        </div>
        <div
          className={classNames("project-time", {
            hidden: !start || !end
          })}
        >
          {renderDateString(locale, start, end)}
        </div>
      </div>
    </div>
  );
};
