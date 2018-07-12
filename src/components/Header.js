import React from "react";
import Switch from "react-switch";

import RadialMenu from './RadialMenu';
import MoonSVG from "../styles/assets/icons/moon";
import SunSVG from "../styles/assets/icons/sun";
import LogoSVG from "../styles/assets/images/logo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="logo" href="/" title={this.props.langPack.go_to_main_page}>
          <LogoSVG />
        </a>
        <div className="control-panel">
          <div className="language-switcher">
            <RadialMenu
              handleLanguageChange={this.props.handleLanguageChange}
              languageWord={this.props.langPack.language}
            />
          </div>
          <div style={{fontSize: "initial"}} title={this.props.theme.name === "light-theme"? this.props.langPack.switch_to_night_mode: this.props.langPack.switch_to_day_mode}>
            <Switch
              className="theme-switcher"
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
