import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { duck } from "./ducks/widgets";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(duck.reducers.reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;

sagaMiddleware.run(duck.saga);
