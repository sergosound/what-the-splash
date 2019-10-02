import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statsReducer,
  router: connectRouter(history)
});

export default rootReducer;
