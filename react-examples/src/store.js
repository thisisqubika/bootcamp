import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from './reducers/counter.js';
import lessonsReducer from './reducers/lessons.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
    lessons: lessonsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
