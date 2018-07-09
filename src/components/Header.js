import React from "react";
import Switch from "react-switch";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        Header
        <label htmlFor="normal-switch">
          <span>Switch with default style</span>
          <Switch
            onChange={this.props.handleThemeChange}
            checked={this.props.themeChecked}
            id="normal-switch"
            onColor="#FFB300"
            offColor="#280671"
            onHandleColor="#eee"
            offHandleColor="#eee"
            checkedIcon={<span>M</span>}
            uncheckedIcon={<span>S</span>}
          />
        </label>
      </div>
    );
  }
}
