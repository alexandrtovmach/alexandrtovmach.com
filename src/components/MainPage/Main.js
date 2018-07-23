import React from "react";
import classnames from "classnames";
import SkillsChart from './SkillsChart';

import Navigation from '../Navigation';
import data from '../../utils/skillsData';

export default class Main extends React.Component {
  onSelect(event){
    console.log(event);
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
          <h2>{this.props.langPack.a_bit_about}</h2>
          <p>{this.props.langPack.welcome_text}</p>
          <SkillsChart
            data={data[this.props.locale]}
            onSelect={this.onSelect}
            scale="linear"
            tooltip
            keyId="skillsChart"
            width="300"
            height="300"
          />
          <a href="/about" className="button" title={this.props.langPack.about} >
            {this.props.langPack.details}
          </a>
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
