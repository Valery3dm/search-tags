import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import SingleDuck from './ducks/widgetsNG';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  SingleDuck().reducers().reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(SingleDuck().sagaFetchItemsWatcher);
