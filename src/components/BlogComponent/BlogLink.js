import React from "react";

import { renderDateString } from "../../services/calendar";

export default props => {
  const post = props.post;
  return (
    <a
      href={post.link}
      title={post.name}
      className="blog-link post"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{post.name}</h3>
      <p style={{ WebkitBoxOrient: "vertical" }}>{post.short_description}</p>
      <div className="blog-lang" />
      <div className="blog-meta">
        <span className="meta-lang">
          {`${props.langPack.language}: ${post.lang}`}
        </span>
        <span className="meta-date">
          {renderDateString(props.locale, new Date(post.id))}
        </span>
      </div>
    </a>
  );
};
