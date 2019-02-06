import React from "react";
import classNames from "classnames";

import { getEvents } from "../../services/calendar";
import { ReactComponent as ContactSVG } from "../../styles/assets/icons/contact.svg";

const oneDayMilliseconds = 1000 * 60 * 60 * 24;

export default class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      fitCount: 2,
      events: []
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      const fitElementsCount = Math.ceil(window.innerWidth / 600);
      getEvents(fitElementsCount * 3 + 2).then(eventsArr => {
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

  _findEvents(events = [], date_start) {
    const date_end = date_start + oneDayMilliseconds;
    return events.filter(event => {
      return event.start >= date_start && event.start < date_end;
    });
  }

  render() {
    const { fitCount: daysCount, events } = this.state;
    const { langPack } = this.props;
    const dates = this._makeArrOfDates(Date.now(), daysCount);
    return (
      <div className={classNames("calendar-container")}>
        {dates.map(date => {
          const { d, w, m } = this._dateGenerator(date);
          const currentEvents = this._findEvents(events, date) || {};
          return (
            <div
              key={"date-" + date}
              className={classNames("calendar-item", {
                holiday: currentEvents.some(
                  event => event.tags && event.tags.includes("holiday")
                ),
                freeday: !currentEvents.length
              })}
            >
              {currentEvents.map((event, i) => {
                if (event.name) {
                  return (
                    <div
                      key={`date-event-${date}-${i}`}
                      className={classNames("calendar-event", {
                        holiday: event.tags && event.tags.includes("holiday"),
                        freeday: !event.name
                      })}
                    >
                      <div className="event-tags">
                        {event.tags &&
                          event.tags.map(tag => (
                            <div
                              key={"date-tag-" + date + tag}
                              className="event-tag"
                            >
                              {tag}
                            </div>
                          ))}
                      </div>
                      <div className="event-title">{event.name}</div>
                      <div className="event-description">
                        {event.description}
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
                          {langPack.book_now_description}
                        </div>
                        <ContactSVG
                          className="event-contact-button"
                          alt={langPack.book_now}
                        />
                      </div>
                    </div>
                  );
                }
              })}
              <div className="meta-date">
                <div className="date">{d}</div>
                <div className="month">{langPack[`month${m}`]}</div>
                <div className="weekday">{langPack[`weekday${w}`]}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
