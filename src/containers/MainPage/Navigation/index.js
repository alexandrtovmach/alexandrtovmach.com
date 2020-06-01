import React from "react";
import classnames from "classnames";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

import { ReactComponent as HomeSVG } from "../../../styles/assets/icons/home.svg";
import { ReactComponent as AboutSVG } from "../../../styles/assets/icons/profile.svg";
import { ReactComponent as CalendarSVG } from "../../../styles/assets/icons/calendar.svg";
import { ReactComponent as PortfolioSVG } from "../../../styles/assets/icons/briefcase.svg";
import { ReactComponent as BlogSVG } from "../../../styles/assets/icons/clip.svg";
import { ReactComponent as LeftArrowSVG } from "../../../styles/assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowSVG } from "../../../styles/assets/icons/right-arrow.svg";

import "./Navigation.scss";

const iconsInOrder = [
  <HomeSVG className="icon" key="home-icon-key" />,
  <AboutSVG className="icon" key="about-icon-key" />,
  <CalendarSVG className="icon" key="calendar-icon-key" />,
  <PortfolioSVG className="icon" key="protfolio-icon-key" />,
  <BlogSVG className="icon" key="blog-icon-key" />
];

const AutoPlaySwipeableViews = bindKeyboard(SwipeableViews);

export default class Navigation extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = newIndex => () => {
    this.setState({
      index: newIndex
    });
  };

  handleSwipe = newIndex => {
    this.setState({
      index: newIndex
    });
  };

  generateTabs = tagsArray => {
    const { index } = this.state;
    return tagsArray.map((el, i) => {
      return (
        <div
          key={i}
          className={classnames("tab", {
            "active-tab": index === i
          })}
          onClick={this.handleChangeIndex(i)}
        >
          <span className="text">{el}</span>
          {iconsInOrder[i]}
        </div>
      );
    });
  };

  render() {
    const { langPack, children, theme } = this.props;
    const { index } = this.state;
    return (
      <div className="navigation">
        <AutoPlaySwipeableViews
          resistance
          className="tabs-content"
          interval={30000}
          enableMouseEvents={true}
          index={index}
          onChangeIndex={this.handleSwipe}
        >
          {children}
        </AutoPlaySwipeableViews>
        <div className="tabs-panel">
          {this.generateTabs([langPack.main, langPack.about, langPack.schedule, langPack.portfolio, langPack.blog])}
        </div>
        <div className="navigation-arrows">
          <button
            className={classnames("left", "arrow", {
              hidden: !index
            })}
            title={langPack.left_button}
            name={langPack.left_button}
            onClick={this.handleChangeIndex(index - 1)}
          >
            <LeftArrowSVG stroke={theme.secondColor} />
          </button>
          <button
            className={classnames("right", "arrow", {
              hidden: children.length - 1 === index
            })}
            title={langPack.right_button}
            name={langPack.right_button}
            onClick={this.handleChangeIndex(index + 1)}
          >
            <RightArrowSVG stroke={theme.secondColor} />
          </button>
        </div>
      </div>
    );
  }
}
