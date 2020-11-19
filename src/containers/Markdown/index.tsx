import React, { ElementType } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './markdown.module.scss';

const customRender: { [nodeType: string]: ElementType } = {
  strong: ({ children }) => (
    <span className={styles.highlighted}>{children}</span>
  ),
};

const Markdown: React.FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return (
    <ReactMarkdown renderers={customRender} linkTarget={'_blank'}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
