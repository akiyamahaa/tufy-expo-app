import { combineReducers } from 'redux';
import errorReducer from './error.reducer';
import loadingReducer from './loading.reducer';

const reducers = {
  loading: loadingReducer,
  error: errorReducer,
};

export default combineReducers(reducers);
