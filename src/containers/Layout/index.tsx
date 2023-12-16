import React from 'react';

import * as styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}) => (
  <div className={styles.pageWrapper}>
    {children}
  </div>
);

export default Layout;