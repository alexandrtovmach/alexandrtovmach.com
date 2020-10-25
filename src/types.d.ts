interface RSSFeedItem {
  link: string;
  title: string;
  pubDate: string;
  categories: string[];
  dc: {
    creator: string;
  };
  contentSnippet: string;
  content: {
    encodedSnippet: string;
  };
}

interface PublicationItem extends RSSFeedItem {
  resource: string;
  language: string;
}
