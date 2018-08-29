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
        posts: Object.keys(posts).map(el => posts[el])
      });
    });
  }

  render() {
    return (
      <div className="blog-list">
        {this.state.posts.map((post, i) => (
          <BlogItemComponent
            key={"blog-item-" + i}
            post={post}
            locale={this.props.locale}
          />
        ))}
      </div>
    );
  }
}
