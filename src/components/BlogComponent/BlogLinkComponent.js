import React from "react";

export default props => {
  const post = props.post;
  if (post) {
    return (
      <a
        href={`blog/${props.locale}/${post.id}`}
        title={post.name[props.locale]}
        className="blog-link"
      >
        <h3>{post.name[props.locale]}</h3>
        <p>{post.short_description[props.locale]}</p>
      </a>
    );
  } else {
    return null;
  }
};
