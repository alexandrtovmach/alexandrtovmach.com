const path = require(`path`);
const fetch = require(`node-fetch`);
const { getAverageColor } = require(`fast-average-color-node`);
const { meanBy } = require('lodash');

const LOG_PREFIX = '[openlib-books]: ';
const OPEN_LIB_URL = 'https://openlibrary.org';

const getColorFromImageSrc = async (imgSrc) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (imgSrc) {
        const res = await fetch(imgSrc);
        const arrayBuffer = await res.arrayBuffer();
        const coverColor = await getAverageColor(Buffer.from(arrayBuffer));
        resolve(coverColor.hex);
      } else {
        resolve('#c1c1c1');
      }
    } catch (err) {
      reject(err);
    }
  });
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

  await Promise.all(
    sourcesList.map(async ({ id }) => {
      const workData = await fetch(`${OPEN_LIB_URL}/works/${id}.json`).then(
        (res) => res.json()
      );
      const authorData = await fetch(
        `${OPEN_LIB_URL}${workData.authors[0].author.key}.json`
      ).then((res) => res.json());
      const editionsData = await fetch(
        `${OPEN_LIB_URL}/works/${id}/editions.json`
      ).then((res) => res.json());
      const pagesCount = meanBy(
        editionsData.entries.filter(({ number_of_pages }) => number_of_pages),
        'number_of_pages'
      );
      const coverSrc =
        workData.covers?.length &&
        `https://covers.openlibrary.org/b/id/${workData.covers[0]}-L.jpg`;
      const coverColor = await getColorFromImageSrc(coverSrc);

      actions.createNode({
        title: workData.title,
        subjects: workData.subjects,
        pagesCount: Math.ceil(pagesCount || 0),
        coverSrc,
        coverColor,
        author: authorData.name,
        authorId: authorData.key.split('/')[2],
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
