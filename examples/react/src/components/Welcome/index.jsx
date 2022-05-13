import React from 'react';

const Welcome = ({ name, children, onClick }) => (
  <>
    {name
      ? <h1 onClick={() => onClick(name)}>Welcome, {name}!</h1>
      : <h1 onClick={() => onClick('Stranger')}>Welcome, Stranger!</h1>}
    {children}
  </>
);

export default Welcome;
