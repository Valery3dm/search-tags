import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_ITEMS, setFetchedItemsAction } from "../store/ducks/widgets";


const fetchItemsFromApi = () => fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")

function* fetchItemsWorker() {
  const data = yield call(fetchItemsFromApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(setFetchedItemsAction(json.hits))
}

export function* fetchItemsWatcher() {
  yield takeEvery(FETCH_ITEMS, fetchItemsWorker)
}
