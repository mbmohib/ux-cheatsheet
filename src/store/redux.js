import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from './middleware';

import ui from './ui';
import metas from './metas';

const rootReducer = combineReducers({
  ui,
  metas,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, apiMiddleware))
);
