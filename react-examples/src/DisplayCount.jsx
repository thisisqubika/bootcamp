import React from 'react';

export const DisplayCount = ({ count, setCount }) => (
  <div>
    <button onClick={() => setCount(count - 1)}> Decrement! </button>
    <button onClick={() => setCount(count + 1)}> Increment! </button>
  </div>
);
