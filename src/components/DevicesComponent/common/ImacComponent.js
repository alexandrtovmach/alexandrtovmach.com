import React from 'react';
import classnames from "classnames";

import { ReactComponent as IMacSVG } from '../../../styles/assets/images/IMac.svg';

export default (props) => {
  return (
    <div className={classnames("device", "desktop-device")} >
      <img src={props.img} alt="desktop-screenshot"/>
      <IMacSVG />
    </div>
  )
}