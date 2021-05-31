import { put, takeEvery, call } from 'redux-saga/effects';
import { actionType, actionCreators } from '../ducks/ngwidgets'

function* sagaFetchItemsWorker() {
    const data = yield call(actionCreators.fetchItemsFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    const allData = yield call(() => {
      const newList = json.hits.map((item) => {
        return {
          id: item.id,
          largeImageURL: item.largeImageURL,
          tags: item.tags,
        };
      });
      return newList;
    });
    yield put(actionCreators.setFetchedItemsAction(allData));
}

export function* sagaFetchItemsWatcher() {
  yield takeEvery(actionType.FETCH_ITEMS, sagaFetchItemsWorker)
}
