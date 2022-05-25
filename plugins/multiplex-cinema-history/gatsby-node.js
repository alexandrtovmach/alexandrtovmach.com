const fetch = require(`node-fetch`);
const { sortBy } = require('lodash');

const LOG_PREFIX = '[multiplex-cinema-history]: ';
// const SOURCE_CACHE_KEY = 'openlib-books-source';
// const DATA_CACHE_KEY = 'openlib-books-data';
// const OPEN_LIB_URL = 'https://openlibrary.org';

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter },
  pluginOptions
) => {
  if (!pluginOptions.token) {
    reporter.error(`${LOG_PREFIX}Missed required field "token"`);
    return;
  }
  reporter.info(`${LOG_PREFIX}Start`);

  const historyRes = await fetch('https://friends.multiplex.ua/orderhistory', {
    headers: {
      cookie: `token=${pluginOptions.token};`,
    },
    body: JSON.stringify({
      offset: 0,
      limit: 200,
    }),
    method: 'POST',
  });
  const { films, current } = await historyRes.json();

  sortBy(current, 'date_time')
    .reverse()
    .map(({ items }) => films[items[0].film])
    .forEach(({ id, inner_poster, mob_poster, ua, ru }) =>
      actions.createNode({
        title: ua.title || ru.title,
        innerPoster: `https://multiplex.ua${inner_poster}`,
        mobPoster: `https://multiplex.ua${mob_poster}`,
        id: createNodeId(`MultiplexFilms-${id}`),
        parent: null,
        children: [],
        internal: {
          type: `MultiplexFilms`,
          contentDigest: createContentDigest({
            id,
            inner_poster,
            mob_poster,
            ua,
            ru,
          }),
          content: JSON.stringify({ id, inner_poster, mob_poster, ua, ru }),
        },
      })
    );

  reporter.info(`${LOG_PREFIX}End`);
};
