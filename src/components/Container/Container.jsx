import React from 'react';
import styles from './Container.module/Container.module.css';

function Container({ children }) {
  return <section><div className={styles.container}>{children}</div></section>;
}

export default Container;
