import React from "react";

import BlogLinkComponent from "./BlogLink";
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
        posts: Object.keys(posts).map(el => ({ id: el, ...posts[el] }))
      });
    });
  }

  render() {
    return (
      <div className="blog-list">
        {this.state.posts.map((post, i) => (
          <BlogLinkComponent
            key={"blog-item-link" + i}
            post={post}
            locale={this.props.locale}
          />
        ))}
      </div>
    );
  }
}
