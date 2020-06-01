import React from "react";
import Calendar from "../../components/CalendarPage/CalendarPage";

import "./CalendarPage.scss";

const CalendarPage = props => (
  <div className="page">
    <Calendar {...props} />
  </div>
);

export default CalendarPage;
