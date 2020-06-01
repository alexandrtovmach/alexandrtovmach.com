import React from "react";
import classNames from "classnames";

import { renderDateString } from "../../../services/calendar";

import "./PortfolioText.scss";

const PortfolioText = ({ project: { name, description, price, start, end, link }, isActive, locale, onHover, idx }) => {
  return (
    <a
      href={link}
      className={classNames("portfolio-project-text post", {
        "active-post": isActive
      })}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={onHover(idx)}
    >
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
    </a>
  );
};

export default PortfolioText;
