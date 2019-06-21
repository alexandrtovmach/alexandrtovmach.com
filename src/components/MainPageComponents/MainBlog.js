import React from "react";

import BlogListComponent from "../BlogComponent/BlogList";

export default class MainPortfolioComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.isEqual(this.state, nextState) ||
      !this.props.isEqual(this.props, nextProps)
    );
  }

  render() {
    const { langPack } = this.props;
    return (
      <div className="main-blog">
        <h2>{langPack.blog_head}</h2>
        <BlogListComponent
          items={3}
          infinityScroll={false}
          locale={langPack._locale}
          langPack={langPack}
        />
        {/* <a href="/blog" className="button" title={langPack.blog}>
          {langPack.more}
        </a> */}
      </div>
    );
  }
}
