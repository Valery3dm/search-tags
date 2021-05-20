import { all } from "redux-saga/effects";
import { fetchItemsWatcher } from "./items-saga";

function* rootWatcher() {
  yield all([fetchItemsWatcher()])
}

export default rootWatcher;