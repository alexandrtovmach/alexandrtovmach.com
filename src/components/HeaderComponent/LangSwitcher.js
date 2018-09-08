import React from "react";
import classNames from "classnames";

import { ReactComponent as CrossSVG } from "../../styles/assets/icons/cross.svg";
import { ReactComponent as EarthSVG } from "../../styles/assets/icons/earth.svg";

export default class LangSwitchNew extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
      timeout: null
    };

    this.onClick = this.onClick.bind(this);
    this.leaveTimeout = this.leaveTimeout.bind(this);
  }

  onClick() {
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  }

  pickLanguage(lang) {
    this.props.handleLanguageChange(lang);
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  }

  leaveTimeout() {
    if (this.state.active && !this.state.timeout) {
      const timeout = setTimeout(() => {
        if (this.state.active) {
          this.setState({
            active: false,
            timeout: timeout
          });
        }
      }, 1000);
    }
  }

  render() {
    const values = ["ua", "ru", "en"];
    const tooltips = ["Україньска", "Русский", "English"];

    return (
      <div className="lang-button-group" onMouseLeave={this.leaveTimeout}>
        <button
          className="lang-button lang-button--large theme-background-second theme-color-main theme-fill-main"
          style={{
            transform: `scale(1.${+this.state.active * 2})`
          }}
          onClick={this.onClick}
          title={this.props.languageWord}
          name={this.props.languageWord}
        >
          <EarthSVG
            className={classNames("earth", {
              active: this.state.active
            })}
          />
          <CrossSVG
            className={classNames("cross", {
              active: this.state.active
            })}
          />
        </button>
        {values.map((value, i) => (
          <button
            key={i}
            className="lang-button theme-background-second theme-color-main theme-fill-main"
            style={{
              transitionDelay: `${i * 0.1}s`,
              transform: `translateX(${
                this.state.active ? 0 : 30 * (i + 1)
              }px) scale(${+this.state.active})`,
              pointerEvents: this.state.active ? "auto" : "none"
            }}
            onClick={() => this.pickLanguage(value)}
            title={tooltips[i]}
            name={tooltips[i]}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}
