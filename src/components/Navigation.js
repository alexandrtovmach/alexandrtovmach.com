import React from 'react';
import classnames from "classnames";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

import HomeSVG from '../styles/assets/icons/home';
import AboutSVG from '../styles/assets/icons/about';
import CalendarSVG from '../styles/assets/icons/calendar';
import PortfolioSVG from '../styles/assets/icons/portfolio';
import BlogSVG from '../styles/assets/icons/blog';

const iconsInOrder = [
  <HomeSVG className="icon" />,
  <AboutSVG className="icon" />,
  <CalendarSVG className="icon" />,
  <PortfolioSVG className="icon" />,
  <BlogSVG className="icon" />
]

const AutoPlaySwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

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
      return (
        <div
          key={i}
          className={classnames("tab", {
            "active-tab": this.state.index === i
          })}
          onClick={() => {this.handleChangeIndex(i)}}
        >
          <span className="text">{el}</span>
          {iconsInOrder[i]}
        </div>
      )
    })
  }

  render () {
    return (
      <div className="navigation">
        <AutoPlaySwipeableViews
          resistance
          className="tabs-content"
          interval={5000}
          enableMouseEvents={true}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.props.children}
        </AutoPlaySwipeableViews>
        <div className="tabs-panel">
          {this.generateTabs(this.props.langPack.tags)}
        </div>
      </div>
    )
  }
};
