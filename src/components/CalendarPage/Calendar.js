import React from "react";
import classnames from "classnames";

export default class Calendar extends React.Component {
  render() {
    return (
      <div className={classnames("calendar")}>
        {this.props.langPack.calendar}
      </div>
    );
  }
}