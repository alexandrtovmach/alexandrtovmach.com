import React from "react";

import CalendarComponent from "../../components/Calendar/Calendar";

export default class MainCalendarComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  render() {
    const { langPack, isEqual } = this.props;
    return (
      <div className={"main-calendar"}>
        <div className="calendar-block">
          <h2>{langPack.calendar_head}</h2>
          <p>{langPack.calendar_text}</p>
          <div className="calendar-wrap">
            <CalendarComponent langPack={langPack} isEqual={isEqual} />
          </div>
          {/* <a
            href="/calendar"
            className="button"
            title={langPack.calendar}
          >
            {langPack.details}
          </a> */}
        </div>
      </div>
    );
  }
}
