import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from './reducers/counter.js';

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
