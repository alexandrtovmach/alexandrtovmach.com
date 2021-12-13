const path = require(`path`);
const wtf = require('wtf_wikipedia');
const get = require('lodash/get');

const LOG_PREFIX = '[wiki-books]: ';

const getAuthorName = (rawJson) => {
  const authorNames = ['author', 'auteur', 'автор'];

  for (let i = 0; i <= authorNames.length; i++) {
    const name =
      get(rawJson, `sections[0].infoboxes[0].${authorNames[i]}.text`) ||
      get(rawJson, `sections[0].infoboxes[0].${authorNames[i]}`) ||
      get(rawJson, `sections[0].templates[0].${authorNames[i]}.text`) ||
      get(rawJson, `sections[0].templates[0].${authorNames[i]}`) ||
      get(rawJson, `sections[0].templates[1].${authorNames[i]}.text`) ||
      get(rawJson, `sections[0].templates[1].${authorNames[i]}`) ||
      get(rawJson, `sections[0].templates[2].${authorNames[i]}.text`) ||
      get(rawJson, `sections[0].templates[2].${authorNames[i]}`);

    if (name) {
      return name;
    }
  }
  console.warn(
    "can't find author name",
    JSON.stringify(rawJson.sections[0], null, 2)
  );
};

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
  sourcesList.forEach((url) => (hashTable[url] = true));
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
            firstImage: doc.images()[0] && doc.images()[0].url(),
          };
          actions.createNode({
            ...nodeData,
            id: createNodeId(`WikiBooks-${doc.pageID()}`),
            parent: null,
            children: [],
            internal: {
              type: `WikiBooks`,
              contentDigest: createContentDigest(nodeData),
              content: JSON.stringify(doc.json()),
            },
          });
        })
        .catch((err) => {
          console.warn(url, err);
        })
    )
  );
};
