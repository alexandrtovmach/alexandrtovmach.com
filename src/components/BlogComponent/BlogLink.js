import React from "react";

import { renderDateString } from "../../services/calendar";

export default props => {
  const post = props.post;
  if (post && post.link[props.locale]) {
    return (
      <a
        href={post.link[props.locale]}
        title={post.name[props.locale]}
        className="blog-link post"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{post.name[props.locale]}</h3>
        <p style={{ WebkitBoxOrient: "vertical" }}>
          {post.short_description[props.locale]}
        </p>
        <div className="blog-date">
          {renderDateString(props.locale, new Date(post.id))}
        </div>
      </a>
    );
  } else {
    return null;
  }
};
