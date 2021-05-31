import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { sagaFetchItemsWatcher } from './saga/sagaFetchItems';
import { itemReducer } from './ducks/itemReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  itemReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(sagaFetchItemsWatcher);