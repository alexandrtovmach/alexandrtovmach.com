import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Navigation extends React.Component {

  constructor() {
    super();

    this.state = {
      index: 2
    }

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChangeIndex(newIndex) {
    this.setState({
      index: newIndex
    })
  }

  render () {
    return (
      <div className="navi">
        <div className="tab" onClick={() => {this.handleChangeIndex(0)}}>One {this.state.index === 0}</div>
        <div className="tab" onClick={() => {this.handleChangeIndex(1)}}>Two {this.state.index === 1}</div>
        <div className="tab" onClick={() => {this.handleChangeIndex(2)}}>Three {this.state.index === 2}</div>
        <AutoPlaySwipeableViews
          enableMouseEvents={true}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.props.children}
        </AutoPlaySwipeableViews>
      </div>
    )
  }
};
