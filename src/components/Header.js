import React from "react";
import Switch from "react-switch";

import MoonSVG from "../styles/assets/icons/moon";
import SunSVG from "../styles/assets/icons/sun";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        Header
        <label htmlFor="normal-switch">
          <span>Switch with default style</span>
          <Switch
            className="theme-switcher"
            onChange={this.props.handleThemeChange}
            checked={this.props.theme.name === "light-theme"}
            id="normal-switch"
            onColor={this.props.theme.secondColor}
            offColor={this.props.theme.secondColor}
            onHandleColor="#eee"
            offHandleColor="#eee"
            checkedIcon={<MoonSVG />}
            uncheckedIcon={<SunSVG />}
          />
        </label>
      </div>
    );
  }
}
