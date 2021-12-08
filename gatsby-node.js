/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = async ({ node, loadNodeContent }) => {
  if (
    node.internal.type === 'File' &&
    ['mdContent'].includes(node.sourceInstanceName)
  ) {
    await loadNodeContent(node);
  }
};
