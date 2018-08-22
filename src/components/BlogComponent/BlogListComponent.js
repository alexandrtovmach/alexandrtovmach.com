import React from "react";

import BlogItemComponent from "./BlogItemComponent";
import { getAllByCategory } from "../../services/api/firebase";

export default class BlogListComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getAllByCategory("/blog", 3).then(res => console.log(res));
  }

  render() {
    return (
      <div className="blog-list">
        <BlogItemComponent />
      </div>
    );
  }
}
