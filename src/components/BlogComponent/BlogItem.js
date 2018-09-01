import React from "react";

export default props => {
  return <div>{props.post.name && props.post.name[props.locale]}</div>;
};
