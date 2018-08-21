import React from "react";
import isEqual from 'lodash.isequal';

import ImacComponent from './common/ImacComponent';
import IpadComponent from './common/IpadComponent';
import IphoneComponent from './common/IphoneComponent';

export default class DevicesComponent extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      project: this.props.portfolio
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState) || !isEqual(this.props, nextProps);
  }

  render() {
    const { project } = this.state;
    return (
      <div className="devices">
        <div
          className="desktop-device-container"
        >
          <ImacComponent
            img={project && project.screenshots && project.screenshots.desktop}
          />
        </div>
        <div
          className="pad-device-container"
        >
          <IpadComponent
            img={project && project.screenshots && project.screenshots.pad}
          />
        </div>
        <div
          className="phone-device-container"
        >
          <IphoneComponent
            img={project && project.screenshots && project.screenshots.phone}
          />
        </div>
      </div>
    )
  }
}