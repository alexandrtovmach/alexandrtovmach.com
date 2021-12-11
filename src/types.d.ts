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

interface BookWikiItem {
  title: string;
  requestUrl: string;
  extract: string;
  firstImage: string;
}

interface BookItem {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
  };
}
interface PublicationItem extends RSSFeedItem {
  resource: string;
  language: string;
}

interface SkillItem {
  label?: string;
  category?:
    | 'backend'
    | 'frontend'
    | 'mobile'
    | 'databases'
    | 'design'
    | 'devops'
    | 'other';
  value: string;
}

interface ExperienceItem {
  name: string;
  url?: string;
  position?: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills: SkillItem['value'][];
}

interface ExtExperienceItem {
  name: string;
  url?: string;
  position?: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills: SkillItem[];
}
