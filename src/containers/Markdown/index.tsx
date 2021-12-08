import React, { ElementType } from 'react';
import ReactMarkdown from 'react-markdown';

import * as styles from './markdown.module.scss';

const customRender: { [nodeType: string]: ElementType } = {
  strong: ({ children }) => (
    <span className={styles.highlighted}>{children}</span>
  ),
  p: ({ children }) => <p className="text">{children}</p>,
};

const Markdown: React.FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return (
    <ReactMarkdown components={customRender} linkTarget={'_blank'}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
