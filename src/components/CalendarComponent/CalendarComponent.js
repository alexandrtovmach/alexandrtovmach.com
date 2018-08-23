import React from "react";
import classNames from "classnames";

import { getEvents } from "../../services/calendar";

const oneDayMilliseconds = 1000 * 60 * 60 * 24;

export default class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      fitCount: 3,
      events: []
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      const fitElementsCount = Math.ceil(window.innerWidth / 300);
      getEvents(fitElementsCount + 2).then(eventsArr => {
        console.info("Pulled events", eventsArr);
        this.setState({
          events: eventsArr,
          fitCount: fitElementsCount
        });
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  _makeArrOfDates(base = Date.now(), count = 10) {
    const datesArr = [];
    base = new Date(base);
    base.setHours(0);
    base.setMinutes(0);
    base.setSeconds(0);
    base.setMilliseconds(0);
    for (let i = 0; i < count; i++) {
      datesArr.push(base.valueOf() + i * oneDayMilliseconds);
    }
    return datesArr;
  }

  _dateGenerator(dateStamp = Date.now()) {
    return {
      d: new Date(dateStamp).getDate(),
      w: new Date(dateStamp).getDay(),
      m: new Date(dateStamp).getMonth() + 1
    };
  }

  _findEvents(events = [], date_end) {
    const date_start = date_end - oneDayMilliseconds;
    return events.find(event => {
      console.log(
        `${event.start} >= ${date_start} && ${event.start} < ${date_end}`
      );
      return event.start >= date_start && event.start < date_end;
    });
  }

  generateDays(baseDate = Date.now(), daysCount = 3, events = []) {
    const dates = this._makeArrOfDates(baseDate, daysCount);
    return dates.map(date => {
      const { d, w, m } = this._dateGenerator(date);
      const event = this._findEvents(events, date) || {};

      if (event.name) {
        return (
          <div
            key={"date-" + date}
            className={classNames("calendar-event", {
              holiday: event.tags && event.tags.includes("holiday"),
              freeday: !event.name
            })}
          >
            <div className="event-title">{event.name}</div>
            <div className="event-tags">
              {event.tags &&
                event.tags.map(tag => (
                  <div key={"date-tag-" + date + tag} className="event-tag">
                    {tag}
                  </div>
                ))}
            </div>
            <div className="event-description">{event.description}</div>
            <div className="meta-date">
              <div className="date">{d}</div>
              <div className="month">{this.props.langPack[`month${m}`]}</div>
              <div className="weekday">
                {this.props.langPack[`weekday${w}`]}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={"date-" + date}
            className={classNames("calendar-event", {
              holiday: event.tags && event.tags.includes("holiday"),
              freeday: !event.name
            })}
          >
            <div className="event-freeday">
              <div className="event-description">
                {this.props.langPack.book_now_description}
              </div>
              <button className="button">{this.props.langPack.book_now}</button>
            </div>
            <div className="meta-date">
              <div className="date">{d}</div>
              <div className="month">{this.props.langPack[`month${m}`]}</div>
              <div className="weekday">
                {this.props.langPack[`weekday${w}`]}
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="calendar-container">
        {this.generateDays(Date.now(), this.state.fitCount, this.state.events)}
      </div>
    );
  }
}
