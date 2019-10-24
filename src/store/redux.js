import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { apiMiddleware } from './middleware';
import ui from './ui';
import metas from './metas';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  ui,
  metas,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, apiMiddleware))
);
export const persistor = persistStore(store);

export default store;
