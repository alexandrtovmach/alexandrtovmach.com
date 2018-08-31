import React from "react";

import { renderDateString } from "../../services/calendar";

export default props => {
  const post = props.post;
  const dateArr = post.id.split("-").reverse();
  if (post) {
    return (
      <a
        href={`blog/${props.locale}/${post.id}`}
        title={post.name[props.locale]}
        className="blog-link post"
      >
        <h3>{post.name[props.locale]}</h3>
        <p style={{ WebkitBoxOrient: "vertical" }}>
          {post.short_description[props.locale]}
        </p>
        <div className="blog-date">
          {renderDateString(
            props.locale,
            new Date("20" + dateArr[0], dateArr[1] - 1, dateArr[2])
          )}
        </div>
      </a>
    );
  } else {
    return null;
  }
};
