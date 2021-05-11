interface RSSFeedItem {
  link: string;
  title: string;
  pubDate: string;
  categories: string[];
  dc: {
    creator: string;
  };
  contentSnippet: string;
  content:
    | {
        encoded: string;
        encodedSnippet: string;
      }
    | string;
}

interface PublicationItem extends RSSFeedItem {
  resource: string;
  language: string;
}
