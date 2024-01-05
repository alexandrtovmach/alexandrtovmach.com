/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode } from "gatsby";

// You can delete this file if you're not using it

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({ node, loadNodeContent }) => {
  if (
    node.internal.type === 'File' &&
    ['mdContent'].includes(String(node.sourceInstanceName))
  ) {
    await loadNodeContent(node);
  }
};
