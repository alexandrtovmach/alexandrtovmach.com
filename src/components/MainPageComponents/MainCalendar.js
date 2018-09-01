import React from "react";

import CalendarComponent from "../CalendarComponents/Calendar";

export default class MainCalendarComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  render() {
    return (
      <div className={"main-calendar"}>
        <div className="calendar-block">
          <h2>{this.props.langPack.calendar_head}</h2>
          <p>{this.props.langPack.calendar_text}</p>
          <div className="calendar-wrap">
            <CalendarComponent
              langPack={this.props.calendarLangPack}
              isEqual={this.props.isEqual}
            />
          </div>
          <a
            href="/calendar"
            className="button"
            title={this.props.langPack.calendar}
          >
            {this.props.langPack.details}
          </a>
        </div>
      </div>
    );
  }
}
