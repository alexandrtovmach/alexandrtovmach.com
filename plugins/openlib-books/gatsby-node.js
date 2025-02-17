const fetch = require(`node-fetch`);
const { resolve } = require(`path`);
const { promises: fs, existsSync } = require(`fs`);
const { meanBy, difference } = require(`lodash`);

const LOG_PREFIX = '[openlib-books]: ';
const DATA_CACHE_KEY = 'openlib-books-data';
const OPEN_LIB_URL = 'https://openlibrary.org';
const DALL_E_URL = 'https://bf.dallemini.ai';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCoverFromAI = async (id, title, coversFolderPath) => {
  try {
    const resultPath = resolve(coversFolderPath, `${id}.jpg`);
    if (existsSync(resultPath)) {
      return resultPath;
    } else {
      await sleep(1000);
      const res = await fetch(`${DALL_E_URL}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `"${title}" vignette illustration b/w`,
        }),
        redirect: 'follow',
      });
      const json = await res.json();
      const resultImage = json.images[0] || '';
      if (resultImage) {
        await fs.writeFile(
          resultPath,
          resultImage.replaceAll('\n', ''),
          'base64'
        );
        return resultPath;
      }
    }
  } catch (err) {
    throw new Error(`${LOG_PREFIX}Failed to get AI cover for "${title}"`);
  }
};

const getBookDataById = async (bookId, coversFolderPath) => {
  const workDataRes = await fetch(`${OPEN_LIB_URL}/works/${bookId}.json`);
  const workData = await workDataRes.json();
  if (workData.status === 429) {
    await sleep(10000);
    return getBookDataById(bookId, coversFolderPath);
  }
  if (workData.type?.key === '/type/redirect') {
    throw new Error(
      `${bookId} > ${workData.location.split('/')[2]}`
    );
  }
  if (!workData.authors) {
    throw new Error(`${LOG_PREFIX}Work ${bookId} not found. ${JSON.stringify(workData)}`);
  }
  const authorDataRes = await fetch(
    `${OPEN_LIB_URL}${workData.authors[0].author.key}.json`
  );
  const authorData = await authorDataRes.json();
  const editionsDataRes = await fetch(
    `${OPEN_LIB_URL}/works/${bookId}/editions.json`
  );
  const editionsData = await editionsDataRes.json();

  const pagesCount = meanBy(
    editionsData.entries?.filter(({ number_of_pages }) => number_of_pages),
    'number_of_pages'
  );

  const coverPath = await getCoverFromAI(
    bookId,
    workData.title,
    coversFolderPath
  );

  return {
    id: bookId,
    workData,
    authorData,
    pagesCount,
    coverPath,
  };
};

const cleanUpCoversFolder = async (coversFolderPath, idsArr) => {
  const files = await fs.readdir(coversFolderPath);
  return Promise.all(
    difference(files, idsArr).map((fileName) =>
      fs.unlink(resolve(coversFolderPath, fileName))
    )
  );
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
  const COVERS_FOLDER_PATH = resolve(pluginOptions.coversFolderPath);

  if (!Array.isArray(sourcesList) || !sourcesList.length) {
    reporter.error(`${LOG_PREFIX}"listSrc" empty or incorrect.`);
    return;
  }

  const cachedData = (await cache.get(DATA_CACHE_KEY)) || [];
  const booksData = [];
  // split sourcesList to chunks by 5
  const chunks = sourcesList.reduce(
    (acc, item) => {
      const last = acc[acc.length - 1];
      if (last.length < 3) {
        last.push(item);
      } else {
        acc.push([item]);
      }
      return acc;
    },
    [[]]
  );
  for (const chunk of chunks) {
    const booksChunk = await Promise.all(
      chunk.map(({ id }) => {
        const fromCache = cachedData.find(
          ({ id: cachedId }) => cachedId === id
        );
        try {
          if (fromCache) {
            return fromCache;
          } else {
            reporter.info(`${LOG_PREFIX}Fetching - ${id}`);
            return getBookDataById(id, COVERS_FOLDER_PATH);
          }
        } catch (err) {
          reporter.error(`${LOG_PREFIX}Failed to fetch ${id}`, err);
        }
      })
    );
    booksData.push(...booksChunk);
  }

  booksData.forEach(
    ({ id, workData, authorData, pagesCount, coverPath }) =>
      id &&
      workData &&
      authorData &&
      actions.createNode({
        title: workData.title.normalize('NFC').replace(/[\u0300-\u036f]/g, ''),
        subjects: workData.subjects,
        pagesCount: Math.ceil(pagesCount || 0),
        coverPath,
        author: authorData.name
          .normalize('NFC')
          .replace(/[\u0300-\u036f]/g, ''),
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

  await cleanUpCoversFolder(
    COVERS_FOLDER_PATH,
    sourcesList.map(({ id }) => `${id}.jpg`)
  );
  await cache.set(DATA_CACHE_KEY, booksData);
  reporter.info(`${LOG_PREFIX}End`);
};
