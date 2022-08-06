const fetch = require(`node-fetch`);
const { resolve } = require(`path`);
const { getAverageColor } = require(`fast-average-color-node`);
const { meanBy, isEqual, sortBy } = require(`lodash`);

const LOG_PREFIX = '[openlib-books]: ';
const SOURCE_CACHE_KEY = 'openlib-books-source';
const DATA_CACHE_KEY = 'openlib-books-data';
const OPEN_LIB_URL = 'https://openlibrary.org';
// const CYRILLIC_PATTERN = /^[\u0400-\u04FF -,.!]+$/;

const getColorFromImageSrc = async (imgSrc, reporter) => {
  try {
    if (imgSrc) {
      const res = await fetch(imgSrc);
      const arrayBuffer = await res.arrayBuffer();
      const coverColor = await getAverageColor(Buffer.from(arrayBuffer));
      return coverColor.hex;
    } else {
      return '#c1c1c1';
    }
  } catch (err) {
    reporter.error(`${LOG_PREFIX}${err.message || err.toString()}`);
    return '#c1c1c1';
  }
};

// const getCoverImage = (work, editions) => {
//   const workLang =
//     get(work, 'languages[0].key') || CYRILLIC_PATTERN.test(work.title)
//       ? '/languages/rus'
//       : '/languages/eng';
//   const filteredEditions = editions.entries
//     .filter(
//       ({ covers, publish_date }) =>
//         publish_date &&
//         covers &&
//         covers.length
//     )
//     .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
    
//   const candidate = filteredEditions.filter((edition) => get(edition, 'languages[0].key') === workLang)[0] || filteredEditions[0];
//   const coverId = filteredEditions.length ? candidate.covers[0] : (work.covers || [])[0];

//   console.log(`${work.title}[${Number(filteredEditions.length)}]: https://covers.openlibrary.org/b/id/${coverId}-L.jpg`);
// };

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter, cache },
  pluginOptions
) => {
  if (!pluginOptions.listSrc) {
    reporter.error(`${LOG_PREFIX}Missed required field "listSrc"`);
    return;
  }
  reporter.info(`${LOG_PREFIX}Start`);

  const sourcesList = require(resolve(pluginOptions.listSrc));

  if (!Array.isArray(sourcesList) || !sourcesList.length) {
    reporter.error(`${LOG_PREFIX}"listSrc" empty or incorrect.`);
    return;
  }

  const cachedSourcesList = await cache.get(SOURCE_CACHE_KEY);
  const cachedData = await cache.get(DATA_CACHE_KEY);

  if (
    isEqual(sortBy(sourcesList, 'id'), sortBy(cachedSourcesList, 'id')) &&
    cachedData
  ) {
    reporter.info(`${LOG_PREFIX}Cache found`);
    cachedData.forEach(
      ({ id, workData, authorData, pagesCount, coverSrc, coverColor }) =>
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
        })
    );
    reporter.info(`${LOG_PREFIX}Restored from cache`);
  } else {
    reporter.info(`${LOG_PREFIX}Cache not found. Fetching.`);
    const data = await Promise.all(
      sourcesList.map(async ({ id }) => {
        try {
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
            editionsData.entries.filter(({ number_of_pages }) => number_of_pages),
            'number_of_pages'
          );
  
          // const filteredEditions = editionsData.entries.filter(
          //   ({ languages }) => (languages || []).length >= 2
          // );
  
          // filteredEditions.length && console.log(filteredEditions);
  
          // getCoverImage(workData, editionsData);
  
          const coverSrc =
            workData.covers?.length &&
            `https://covers.openlibrary.org/b/id/${workData.covers[0]}-L.jpg`;
          const coverColor = await getColorFromImageSrc(coverSrc, reporter);
          return { id, workData, authorData, pagesCount, coverSrc, coverColor };
        } catch(err) {
          reporter.error(`${LOG_PREFIX}Failed to fetch ${id}`, err)
        }
      })
    );

    data.forEach(
      ({ id, workData, authorData, pagesCount, coverSrc, coverColor }) =>
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
        })
    );

    reporter.info(`${LOG_PREFIX}Fetched`);

    await cache.set(SOURCE_CACHE_KEY, sourcesList);
    await cache.set(DATA_CACHE_KEY, data);

    reporter.info(`${LOG_PREFIX}Saved to cache`);
  }
  reporter.info(`${LOG_PREFIX}End`);
}
