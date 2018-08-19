import React from "react";
import classnames from "classnames";


import SkillsChart from './common/SkillsChart';
import Navigation from './common/Navigation';
import CalendarComponent from '../CalendarComponent/CalendarComponent';
import DevicesComponent from '../DevicesComponent/DevicesComponent';

import data from '../../utils/skillsData';
import portfolio_collector from '../../utils/portfolio/portfolio_collector';

export default class Main extends React.Component {
  constructor() {
    super();
    this.onTooltipUpdate = this.onTooltipUpdate.bind(this);
  }

  onSelect(event){
    console.log(event);
  }

  onTooltipUpdate(content) {
    this.skillsTooltipRef.innerHTML = content;
  }

  calcHowOldIAm(yearWord) {
    const yearDiff = Math.floor((new Date() - new Date(1995, 9, 2))/(1000*60*60*24*365));
    return (yearDiff.toString().slice(-1) === "1") ? `${yearDiff} ${yearWord.one}`: `${yearDiff} ${yearWord.many}` 
  }

  render() {
    return (
      <Navigation
        theme={ this.props.theme }
        langPack={ this.props.navigationLangPack }
      >
        <div className={classnames("main-index")}>
          <span>{this.props.langPack.welcome_head}</span>
          <h1>{this.props.langPack.welcome_text}</h1>
        </div>
        <div className={classnames("main-about")}>
          <div className="about-text-block">
            <h2>{this.props.langPack.about_head}</h2>
            <p>
              {this.props.langPack.about_text_p1}
              &nbsp;
              {this.calcHowOldIAm(this.props.langPack.years)}.
              &nbsp;
              {this.props.langPack.about_text_p2}
              &nbsp;
              <span ref={ref => this.skillsTooltipRef = ref} className="toltip-name">
                many
              </span>
              <br/>
              {this.props.langPack.about_text_p3}
            </p>
            <a href="/about" className="button" title={this.props.langPack.about} >
              {this.props.langPack.details}
            </a>
          </div>
          <SkillsChart
            data={data[this.props.locale]}
            onSelect={this.onSelect}
            onTooltipUpdate={this.onTooltipUpdate}
            scale="linear"
            keyId="skillsChart"
          />
        </div>
        <div className={classnames("main-calendar")}>
          <div className="calendar-block">
            <h2>{this.props.langPack.calendar_head}</h2>
            <p>
              {this.props.langPack.calendar_text}
            </p>
            <div className="calendar-wrap">
              <CalendarComponent
                langPack={ this.props.calendarLangPack }
              />
            </div>
            <a href="/calendar" className="button" title={this.props.langPack.calendar} >
              {this.props.langPack.details}
            </a>
          </div>
        </div>
        <div className={classnames("main-portfolio")}>
          <div className="portfolio-text-block">
            <h2>{this.props.langPack.portfolio_head}</h2>
            <a href="/portfolio" className="button" title={this.props.langPack.portfolio} >
              {this.props.langPack.more}
            </a>
          </div>
          <div className="portfolio-devices-container">
            <DevicesComponent
              portfolio={portfolio_collector[1]}
            />
          </div>
        </div>
        <div className={classnames("main-blog")}>
          <a href="/blog">{this.props.langPack.blog}</a>
        </div>
      </Navigation>
    );
  }
}
