import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from 'redux/middleware/api';
import reducer from 'redux/reducer';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, apiMiddleware))
);
export default store;

export type StoreState = ReturnType<typeof reducer>;
