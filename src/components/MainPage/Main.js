import React from "react";
import classnames from "classnames";
import SkillsChart from './SkillsChart';

import Navigation from '../Navigation';
import data from '../../utils/skillsData';

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

  render() {
    return (
      <Navigation
        theme={ this.props.theme }
        langPack={ this.props.navigationLangPack }
      >
        <div className={classnames("main-index")}>
          <span>{this.props.langPack.welcome}</span>
          <h1>{this.props.langPack.welcome_text}</h1>
        </div>
        <div className={classnames("main-about")}>
          <div className="about-text-block">
            <h2>{this.props.langPack.a_bit_about}</h2>
            <p>
              {this.props.langPack.about_text_start}
              &nbsp;
              <span ref={ref => this.skillsTooltipRef = ref} className="toltip-name">
                Name
              </span>
              <br/>
              {this.props.langPack.about_text_finish}
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
          <a href="/calendar">{this.props.langPack.calendar}</a>
        </div>
        <div className={classnames("main-portfolio")}>
          <a href="/portfolio">{this.props.langPack.portfolio}</a>
        </div>
        <div className={classnames("main-blog")}>
          <a href="/blog">{this.props.langPack.blog}</a>
        </div>
      </Navigation>
    );
  }
}
