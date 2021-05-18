import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers/counter.js';

export const DisplayCount = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}> Decrement! </button>
      <button onClick={() => dispatch(increment())}> Increment! </button>
    </div>
  )
};
