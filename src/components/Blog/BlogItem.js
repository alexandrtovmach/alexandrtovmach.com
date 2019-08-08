import React from "react";

const BlogItem = props => {
  return <div>{props.post.name && props.post.name[props.locale]}</div>;
};

export default BlogItem;
