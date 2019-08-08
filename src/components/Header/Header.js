import React from "react";
import Switch from "react-switch";

import LangSwitcher from "./LangSwitcher";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/moon.svg";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/sun.svg";
import { ReactComponent as LogoSVG } from "../../styles/assets/images/logo.svg";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="logo theme-fill-second" href="/" title={this.props.langPack.go_to_main_page}>
          <LogoSVG />
        </a>
        <div className="control-panel">
          <div className="language-switcher">
            <LangSwitcher
              handleLanguageChange={this.props.handleLanguageChange}
              languageWord={this.props.langPack.choose_language}
              langPack={this.props.langPack}
            />
          </div>
          <div
            style={{ fontSize: "initial" }}
            title={
              this.props.theme.name === "light-theme"
                ? this.props.langPack.switch_to_night_mode
                : this.props.langPack.switch_to_day_mode
            }
          >
            <Switch
              className="theme-switcher theme-color-main theme-fill-main"
              width={60}
              height={30}
              handleDiameter={24}
              onChange={this.props.handleThemeChange}
              checked={this.props.theme.name === "light-theme"}
              onColor={this.props.theme.secondColor}
              offColor={this.props.theme.secondColor}
              onHandleColor={this.props.theme.mainColor}
              offHandleColor={this.props.theme.mainColor}
              checkedIcon={<MoonSVG />}
              uncheckedIcon={<SunSVG />}
            />
          </div>
        </div>
      </div>
    );
  }
}
