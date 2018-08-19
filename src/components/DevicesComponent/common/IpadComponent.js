import React from 'react';
import classnames from "classnames";

import { ReactComponent as IPadSVG } from '../../../styles/assets/images/IPad_Air.svg';

export default (props) => {
  return (
    <div className={classnames("device", "pad-device")} >
      <img src={props.img} alt="pad-screenshot"/>
      <IPadSVG />
    </div>
  )
}