/* import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects';
import { setFetchedItemsAction } from '../actionCreators/item';
import { ItemActionType, ItemAction } from '../types/item';

interface FechedDataView {
  total: number;
  totalHits: number;
  hits: ItemAction;
}

const APIURL =
  "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true";

function* sagaFetchItemsWorker() {
    const allData: FechedDataView = yield call(() => fetch(APIURL).then(res => res.json()));
    const arrData: any[] =  yield call(() => allData.hits);
    yield put(setFetchedItemsAction(arrData));
}

export function* sagaFetchItemsWatcher(): Generator<StrictEffect> {
  yield takeEvery(ItemActionType.FETCH_ITEMS, sagaFetchItemsWorker)
}
 */