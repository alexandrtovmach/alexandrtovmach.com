import React from "react";
import Calendar from "../../components/CalendarPage/CalendarPage";

import "./CalendarPage.scss";

export default props => (
  <div className="page">
    <Calendar {...props} />
  </div>
);
