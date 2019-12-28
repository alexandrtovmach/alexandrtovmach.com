import React from "react";

import BlogListContainer from "../../../containers/BlogList/BlogList";

import "./Blog.scss";

export default class MainPortfolioComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !this.props.isEqual(this.state, nextState) || !this.props.isEqual(this.props, nextProps);
  }

  render() {
    const { langPack } = this.props;
    return (
      <div className="main-blog">
        <h2 className="h1">{langPack.blog_head}</h2>
        <BlogListContainer items={2} infinityScroll={false} locale={langPack._locale} langPack={langPack} />
        <a href="/blog" className="button" title={langPack.more}>
          {langPack.more}
        </a>
      </div>
    );
  }
}
