const path = require(`path`);
const fetch = require(`node-fetch`);

const LOG_PREFIX = '[openlib-books]: ';
const OPEN_LIB_URL = 'https://openlibrary.org';

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

  await Promise.all(
    sourcesList.map(async ({ id }) => {
      const workData = await fetch(`${OPEN_LIB_URL}/works/${id}.json`).then(
        (res) => res.json()
      );
      const authorData = await fetch(
        `${OPEN_LIB_URL}${workData.authors[0].author.key}.json`
      ).then((res) => res.json());

      actions.createNode({
        title: workData.title,
        subjects: workData.subjects,
        author: authorData.name,
        openLibUrl: `${OPEN_LIB_URL}/works/${id}`,
        id: createNodeId(`OpenLibBooks-${id}`),
        parent: null,
        children: [],
        internal: {
          type: `OpenLibBooks`,
          contentDigest: createContentDigest(workData),
          content: JSON.stringify({
            workData,
            authorData,
          }),
        },
      });
    })
  );
  reporter.info(`${LOG_PREFIX}End`);
};
