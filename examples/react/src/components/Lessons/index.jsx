import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus } from '../../reducers/lessons.js';
import './Lessons.css';

export const Lessons = () => {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state.lessons);

  return (
    <>
      <h2>Lessons:</h2>
      {lessons.map(({ title, status }, index) => (
        <div
          key={title}
          onClick={() => dispatch(toggleStatus(title))}
          className={status === 'COMPLETED' ? 'completed' : ''}
        >
          Lesson {index}: {title}
        </div>
      ))}
    </>
  )
};
