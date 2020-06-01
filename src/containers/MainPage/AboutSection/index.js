import React from "react";

import SkillsChart from "../../../components/SkillsChart";

import "./About.scss";

export default class MainAboutComponent extends React.Component {
  state = {
    skillsData: {}
  };

  componentDidMount() {
    const { getAllByCategory } = this.props;
    getAllByCategory && getAllByCategory("skills").then(skillsData => this.setState({ skillsData }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.props.isEqual(this.state, nextState) || !this.props.isEqual(this.props, nextProps);
  }

  calcHowOldIAm(yearWord) {
    const yearDiff = Math.floor((new Date() - new Date(1995, 9, 2)) / (1000 * 60 * 60 * 24 * 365));
    return yearDiff.toString().slice(-1) === "1" ? `${yearDiff} ${yearWord.one}` : `${yearDiff} ${yearWord.many}`;
  }

  onTooltipUpdate = ({ name, months }) => {
    this.setState({
      selectedSkillName: name,
      selectedSkillsMoths: months
    });
  };

  render() {
    const { langPack, isEqual } = this.props;
    const { skillsData, selectedSkillName, selectedSkillsMoths } = this.state;
    return (
      <div className="main-about">
        <div className="about-text-block">
          <p className="h1">{langPack.about_head}</p>
          <h2 className="p1">
            {langPack.about_text_p1} {this.calcHowOldIAm(langPack.years)}. &nbsp;
            {langPack.about_text_p2}{" "}
            <span className="toltip-name">
              {selectedSkillName || langPack.many}{" "}
              {selectedSkillsMoths
                ? `${langPack.about_text_p3} ${selectedSkillsMoths} ${langPack.about_text_p4}`
                : null}
            </span>
            <br />
            {langPack.about_text_p5}
          </h2>
          <a
            href={`/resume.${langPack._locale}.html`}
            className="button"
            title={langPack.openPrintableCV}
            target="_blank"
            rel="noopener noreferrer"
          >
            {langPack.openPrintableCV}
          </a>{" "}
          <a href="/about" className="button button-outline" title={langPack.moreAboutMe}>
            {langPack.moreAboutMe}
          </a>
        </div>
        <SkillsChart
          data={skillsData}
          locale={langPack._locale}
          onTooltipUpdate={this.onTooltipUpdate}
          scale="linear"
          keyId="skillsChart"
          isEqual={isEqual}
        />
      </div>
    );
  }
}
