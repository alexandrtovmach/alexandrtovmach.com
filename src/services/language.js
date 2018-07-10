import getBrowserLanguage from 'get-browser-language';
import langPacks from './translations';

export function getLanguage() {
  return getBrowserLanguage() || "en";
}

export function getTranslations(lang, filter) {
  let result = langPacks[lang.slice(0, 2)] || langPacks["en"];
  return filter? result[filter]: result;
}