import React from 'react';
import classNames from 'classnames';

import { getEvents } from "../../services/calendar";

const oneDayMilliseconds = 1000*60*60*24;

export default class Calendar extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  // generateEvents() {
  //   return (
  //     getEvents(6).map(event => (
  //       <div
  //         className={classNames("calendar-event", {
  //           holiday: event.tags.includes("holiday")
  //         })}
  //       >
  //         <div className="event-title">{event.name}</div> 
  //         <div className="event-tags">
  //           {event.tags.map(tag => (
  //             <div className="event-tag">{tag}</div>
  //           ))}
  //         </div>
  //         <div className="event-description">{event.description}</div> 
  //       </div>
  //     ))
  //   )
  // }

  _makeArrOfDates(base = Date.now(), count = 10) {
    const datesArr = [];
    for (let i = 0; i < count; i++) {
      datesArr.push(base + i*oneDayMilliseconds);
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

  _findEvents(events = [], date = Date.now()) {
    return events.find(event => {
      return date <= event.start && event.start < date + oneDayMilliseconds
    })
  }

  generateDays(baseDate = Date.now(), daysCount = 3, events = []) {
    const dates = this._makeArrOfDates(baseDate, daysCount);
    return dates.map((date) => {
      const {d, w, m} = this._dateGenerator(date);
      const event = this._findEvents(events, date) || {};
      console.log(event, this.props.langPack[`month${m}`], this.props.langPack[`weekday${w}`], d);

      return (
        <div
          key={"date-" + date}
          className={classNames("calendar-event", {
            holiday: event.tags && event.tags.includes("holiday")
          })}
        >
          <div className="event-title">{event.name}</div> 
          <div className="event-tags">
            {event.tags && event.tags.map(tag => (
              <div
                key={"date-tag-" + date}
                className="event-tag"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="event-description">{event.description}</div>
          <div className="meta-date">
            <div className="date">{d}</div>
            <div className="month">{this.props.langPack[`month${m}`]}</div>
            <div className="weekday">{this.props.langPack[`weekday${w}`]}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="calendar-container">
        {this.generateDays(Date.now(), 4, getEvents(9))}
      </div>
    )
  }
};