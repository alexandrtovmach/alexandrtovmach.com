import React from "react";

import SkillsChart from "./SkillsChart";

export default class MainAboutComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      skillsData: {}
    };

    this.onTooltipUpdate = this.onTooltipUpdate.bind(this);
  }

  componentDidMount() {
    const { getAllByCategory } = this.props;
    getAllByCategory &&
      getAllByCategory("skills").then(skillsData =>
        this.setState({ skillsData })
      );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  calcHowOldIAm(yearWord) {
    const yearDiff = Math.floor(
      (new Date() - new Date(1995, 9, 2)) / (1000 * 60 * 60 * 24 * 365)
    );
    return yearDiff.toString().slice(-1) === "1"
      ? `${yearDiff} ${yearWord.one}`
      : `${yearDiff} ${yearWord.many}`;
  }

  onTooltipUpdate(content) {
    this.skillsTooltipRef.innerHTML = content;
  }

  render() {
    const { langPack, isEqual } = this.props;
    const { skillsData } = this.state;
    return (
      <div className="main-about">
        <div className="about-text-block">
          <h2>{langPack.about_head}</h2>
          <p>
            {langPack.about_text_p1}
            &nbsp;
            {this.calcHowOldIAm(langPack.years)}. &nbsp;
            {langPack.about_text_p2}
            &nbsp;
            <span
              ref={ref => (this.skillsTooltipRef = ref)}
              className="toltip-name"
            >
              {langPack.many}
            </span>
            <br />
            {langPack.about_text_p3}
          </p>
          {/* <a href="/about" className="button" title={langPack.about}>
            {langPack.details}
          </a> */}
          <a
            href={`/resume.${langPack._locale}.html`}
            className="button button-outline"
            title={langPack.about}
            target="_blank"
            rel="noopener noreferrer"
          >
            {langPack.openPrintableCV}
          </a>
        </div>
        <SkillsChart
          data={skillsData[langPack._locale]}
          onTooltipUpdate={this.onTooltipUpdate}
          scale="linear"
          keyId="skillsChart"
          isEqual={isEqual}
        />
      </div>
    );
  }
}
