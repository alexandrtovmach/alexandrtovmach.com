import React from 'react';
import classNames from 'classnames';

import { getEvents } from "../../services/calendar";

export default class Calendar extends React.Component {

  generateEvents() {
    return (
      getEvents(6).map(event => (
        <div
          className={classNames("calendar-event", {
            holiday: event.tags.includes("holiday")
          })}
        >
          <div className="event-title">{event.name}</div> 
          <div className="event-description">{event.description}</div> 
          <div className="event-tags">
            {event.tags.map(tag => (
              <div className="event-tag">{tag}</div>
            ))}
          </div> 
          <div className="event-time">{event.start} --- {event.end}</div> 
        </div>
      ))
    )
  }

  

  generateDays(baseDate = new Date(), limitRound = 3, events = []) {

  }

  render() {
    return (
      <div className="calendar-container">
        {this.generateEvents()}
      </div>
    )
  }
};