import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from './reducers/newsReducer';

const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
