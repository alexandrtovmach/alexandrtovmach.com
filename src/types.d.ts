interface RSSFeedItem {
  link: string;
  title: string;
  pubDate: string;
  categories: string[];
  dc: {
    creator: string;
  };
  contentSnippet: string;
}
