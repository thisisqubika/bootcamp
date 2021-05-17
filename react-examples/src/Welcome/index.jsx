import React from 'react';

import styles from './Welcome.module.css';

const Welcome = ({ name, children, onClick }) => (
  <>
    {name
      ? <h1 className={styles.App} onClick={() => onClick(name)}>Welcome, {name}!</h1>
      : <h1 onClick={() => onClick('Stranger')}>Welcome, Stranger!</h1>}
    {children}
  </>
);

export default Welcome;
