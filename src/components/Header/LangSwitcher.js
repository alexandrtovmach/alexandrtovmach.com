import React from "react";
import classNames from "classnames";

import { ReactComponent as CrossSVG } from "../../styles/assets/icons/cross.svg";
import { ReactComponent as EarthSVG } from "../../styles/assets/icons/earth.svg";

import "./LanguageMenu.scss";

export default class LangSwitchNew extends React.Component {
  state = {
    active: false,
    timeout: null
  };

  handleLanguageClick = () => {
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  };

  pickLanguage = lang => () => {
    this.props.handleLanguageChange(lang);
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  };

  leaveTimeout = () => {
    const { active, timeout } = this.state;
    if (active && !timeout) {
      const timeout = setTimeout(() => {
        if (active) {
          this.setState({
            active: false,
            timeout: timeout
          });
        }
      }, 1000);
    }
  };

  render() {
    const { langPack, languageWord } = this.props;
    const { active } = this.state;
    const values = Object.keys(langPack.languages);
    const tooltips = Object.values(langPack.languages);

    return (
      <div className="lang-button-group" onMouseLeave={this.leaveTimeout}>
        <button
          className="lang-button lang-button--large theme-background-second theme-color-main theme-fill-main"
          style={{
            transform: `scale(1.${+active * 2})`
          }}
          onClick={this.handleLanguageClick}
          title={languageWord}
          name={languageWord}
        >
          <EarthSVG
            className={classNames("earth", {
              active: active
            })}
          />
          <CrossSVG
            className={classNames("cross", {
              active: active
            })}
          />
        </button>
        {values.map((value, i) => (
          <button
            key={i}
            className="lang-button theme-background-second theme-color-main theme-fill-main"
            style={{
              transitionDelay: `${i * 0.1}s`,
              transform: `translateX(${active ? 0 : 30 * (i + 1)}px) scale(${+active})`,
              pointerEvents: active ? "auto" : "none"
            }}
            onClick={this.pickLanguage(value)}
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
