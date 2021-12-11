const path = require(`path`);
const wtf = require('wtf_wikipedia');
const get = require('lodash/get');

const LOG_PREFIX = '[wiki-books]: ';

const getAuthorName = (rawJson) =>
  get(rawJson, 'sections[0].infoboxes[0].author.text') ||
  get(rawJson, 'sections[0].infoboxes[0].author') ||
  get(rawJson, 'sections[0].templates[0].author.text') ||
  get(rawJson, 'sections[0].templates[0].author') ||
  get(rawJson, 'sections[0].templates[1].author.text') ||
  get(rawJson, 'sections[0].templates[1].author') ||
  get(rawJson, 'sections[0].infoboxes[0].автор.text') ||
  get(rawJson, 'sections[0].infoboxes[0].автор') ||
  get(rawJson, 'sections[0].templates[0].автор.text') ||
  get(rawJson, 'sections[0].templates[0].автор') ||
  get(rawJson, 'sections[0].templates[1].автор.text') ||
  get(rawJson, 'sections[0].templates[1].автор');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter },
  pluginOptions
) => {
  if (!pluginOptions.listSrc) {
    reporter.error(`${LOG_PREFIX}Missed required field "listSrc"`);
    return;
  }
  reporter.info(`${LOG_PREFIX}Start`);

  const sourcesList = require(path.resolve(pluginOptions.listSrc));

  if (!Array.isArray(sourcesList) || !sourcesList.length) {
    reporter.error(`${LOG_PREFIX}"listSrc" empty or incorrect.`);
    return;
  }

  const hashTable = {};
  sourcesList.forEach(({ url }) => (hashTable[url] = true));
  const uniqueSourcesList = Object.keys(hashTable);

  return Promise.all(
    uniqueSourcesList.map(async (url) =>
      wtf
        .fetch(url, {
          'Api-User-Agent': 'wiki-books',
        })
        .then((doc) => {
          const nodeData = {
            requestUrl: url,
            title: doc.title(),
            author: getAuthorName(doc.json()),
            url: doc.url(),
            extract: doc.sections()[0].text(),
            firstImage: doc.images()[0].url(),
          };
          actions.createNode({
            ...nodeData,
            id: createNodeId(`WikiBooks-${doc.pageID()}`),
            parent: null,
            children: [],
            internal: {
              type: `WikiBooks`,
              contentDigest: createContentDigest(nodeData),
            },
          });
        })
        .catch((err) => {
          console.warn(url, err);
        })
    )
  );
};
