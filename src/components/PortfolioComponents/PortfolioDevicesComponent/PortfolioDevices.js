import React from "react";

import ImacComponent from "./common/Imac";
import IpadComponent from "./common/Ipad";
import IphoneComponent from "./common/Iphone";

export default class DevicesComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.isEqual(this.props, nextProps);
  }

  render() {
    const {
      project: {
        screenshots: { desktop, pad, phone }
      }
    } = this.props;
    return (
      <div className="devices">
        <div className="desktop-device-container">
          <ImacComponent images={desktop} />
        </div>
        <div className="pad-device-container">
          <IpadComponent images={pad} />
        </div>
        <div className="phone-device-container">
          <IphoneComponent images={phone} />
        </div>
      </div>
    );
  }
}
