import React from "react";

import BlogItemComponent from "./BlogItemComponent";
import { getAllByCategory } from "../../services/api/firebase";

export default class BlogListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getAllByCategory("blog", this.props.items || 3).then(posts => {
      this.setState({
        posts: posts
      });
    });
  }

  render() {
    return (
      <div className="blog-list">
        <BlogItemComponent />
      </div>
    );
  }
}
