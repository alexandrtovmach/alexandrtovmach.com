import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './layout.module.scss';

interface Props {
  withoutFooter?: boolean;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  withoutFooter,
}) => (
  <div className={styles.pageWrapper}>
    <Header siteTitle={'Alexandr Tovmach website'} />
    <main>{children}</main>
    {!withoutFooter && <Footer />}
  </div>
);

export default Layout;
