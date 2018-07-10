import getBrowserLanguage from 'get-browser-language';
import langPacks from './translations';

export function getLanguage() {
  return getBrowserLanguage().slice(0, 2) || "en";
}

export function getTranslations(lang, filter) {
  let result = langPacks[lang] || langPacks["en"];
  return filter? result[filter]: result;
}