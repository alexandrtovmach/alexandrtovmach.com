const fetch = require(`node-fetch`);
const { resolve } = require(`path`);
const { promises: fs, existsSync } = require(`fs`);
const { meanBy, chunk } = require(`lodash`);

const LOG_PREFIX = '[openlib-books]: ';
const DATA_CACHE_KEY = 'openlib-books-data';
const OPEN_LIB_URL = 'https://openlibrary.org';
const DALL_E_URL = 'https://bf.dallemini.ai';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCoverFromAI = async (id, title, coversFolderPath, reporter) => {
  try {
    const resultPath = resolve(coversFolderPath, `${id}.jpg`);
    if (existsSync(resultPath)) {
      return resultPath;
    } else {
      const res = await fetch(`${DALL_E_URL}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `"${title}" vignette illustration b/w` }),
        redirect: 'follow',
      });
      const json = await res.json();
      const resultImage = json.images[0] || '';
      if (resultImage) {
        await fs.writeFile(resultPath, resultImage.replaceAll('\n', ''), 'base64');
        return resultPath;
      }
    }
  } catch (err) {
    reporter.error(`${LOG_PREFIX}Failed to get AI cover for "${title}"`);
  }
};

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter, cache },
  pluginOptions
) => {
  if (!pluginOptions.listSrc) {
    reporter.error(`${LOG_PREFIX}Missed required field "listSrc"`);
    return;
  }
  if (!pluginOptions.coversFolderPath) {
    reporter.error(`${LOG_PREFIX}Missed required field "coversFolderPath"`);
    return;
  }
  reporter.info(`${LOG_PREFIX}Start`);

  const sourcesList = require(resolve(pluginOptions.listSrc));
  const coversFolderPath = resolve(pluginOptions.coversFolderPath);

  if (!Array.isArray(sourcesList) || !sourcesList.length) {
    reporter.error(`${LOG_PREFIX}"listSrc" empty or incorrect.`);
    return;
  }

  const cachedData = await cache.get(DATA_CACHE_KEY);

  const chunks = chunk(sourcesList, 5);
  let booksData = [];
  for (let chunk of chunks) {
    console.log('chunk');
    await sleep(10000);
    const chunkBooksData = await Promise.all(
      chunk.map(async ({ id }) => {
        const fromCache = (cachedData || []).find(
          ({ id: cachedId }) => cachedId === id
        );
        try {
          if (fromCache) {
            return fromCache;
          } else {
            const workDataRes = await fetch(`${OPEN_LIB_URL}/works/${id}.json`);
            const workData = await workDataRes.json();
            const authorDataRes = await fetch(
              `${OPEN_LIB_URL}${workData.authors[0].author.key}.json`
            );
            const authorData = await authorDataRes.json();
            if (!workData.authors) {
              reporter.error(`${LOG_PREFIX}Work ${id} not found`);
              return;
            }
            const editionsDataRes = await fetch(
              `${OPEN_LIB_URL}/works/${id}/editions.json`
            );
            const editionsData = await editionsDataRes.json();
  
            const pagesCount = meanBy(
              editionsData.entries.filter(
                ({ number_of_pages }) => number_of_pages
              ),
              'number_of_pages'
            );
  
            const coverPath = await getCoverFromAI(id, workData.title, coversFolderPath, reporter);
  
            return {
              id,
              workData,
              authorData,
              pagesCount,
              coverPath,
            };
          }
        } catch (err) {
          reporter.error(`${LOG_PREFIX}Failed to fetch ${id}`, err);
          return {};
        }
      })
    );
    booksData = [...booksData, ...chunkBooksData];
  }

  booksData.forEach(
    ({ id, workData, authorData, pagesCount, coverPath }) =>
      id &&
      workData &&
      authorData &&
      actions.createNode({
        title: workData.title,
        subjects: workData.subjects,
        pagesCount: Math.ceil(pagesCount || 0),
        coverPath,
        author: authorData.name,
        authorId: authorData.key.split('/')[2],
        workId: id,
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
      })
  );

  await cache.set(DATA_CACHE_KEY, booksData);
  reporter.info(`${LOG_PREFIX}End`);
};
