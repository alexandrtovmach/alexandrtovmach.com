import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Navigation extends React.Component {

  constructor() {
    super();

    this.state = {
      index: 0
    }

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.generateTabs = this.generateTabs.bind(this);
  }

  handleChangeIndex(newIndex) {
    this.setState({
      index: newIndex
    })
  }

  generateTabs(tagsArray) {
    return tagsArray.map((el, i) => {
      return <div key={i} className="tab" onClick={() => {this.handleChangeIndex(i)}}>{el}</div>
    })
  }

  render () {
    return (
      <div className="navigation">
        <AutoPlaySwipeableViews
          enableMouseEvents={true}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.props.children}
        </AutoPlaySwipeableViews>
        <div className="tabs-panel">
          {this.generateTabs(this.props.tags)}
        </div>
      </div>
    )
  }
};
