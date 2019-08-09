import React from "react";
import Switch from "react-switch";

import LangSwitcher from "./LangSwitcher";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/moon.svg";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/sun.svg";
import { ReactComponent as LogoSVG } from "../../styles/assets/images/logo.svg";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    const { langPack, handleLanguageChange, theme, handleThemeChange } = this.props;
    const isLightMode = theme.name === "light-theme";
    return (
      <div className="header">
        <a className="logo theme-fill-second" href="/" title={langPack.go_to_main_page}>
          <LogoSVG />
        </a>
        <div className="control-panel">
          <div className="language-switcher">
            <LangSwitcher
              handleLanguageChange={handleLanguageChange}
              languageWord={langPack.choose_language}
              langPack={langPack}
            />
          </div>
          <label
            style={{ fontSize: "initial" }}
            title={isLightMode ? langPack.switch_to_night_mode : langPack.switch_to_day_mode}
          >
            <Switch
              className="theme-switcher theme-color-main theme-fill-main"
              width={60}
              height={30}
              role="switch"
              aria-checked={isLightMode}
              handleDiameter={24}
              onChange={handleThemeChange}
              checked={isLightMode}
              onColor={theme.secondColor}
              offColor={theme.secondColor}
              onHandleColor={theme.mainColor}
              offHandleColor={theme.mainColor}
              checkedIcon={<MoonSVG />}
              uncheckedIcon={<SunSVG />}
            />
          </label>
        </div>
      </div>
    );
  }
}
