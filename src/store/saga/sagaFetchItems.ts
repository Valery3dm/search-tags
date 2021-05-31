import { put, takeEvery, call } from 'redux-saga/effects';
import { setFetchedItemsAction } from '../actionCreators/item';
import { ItemActionType } from '../types/item';

interface FechedDataView {
  total: number;
  totalHits: number;
  hits: any[];
}

const APIURL =
  "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true";

function* sagaFetchItemsWorker() {
    const data: FechedDataView = yield call(() => fetch(APIURL).then(res => res.json()));
    const arrData: any[] = data.hits
    const allData: any[] = yield call(() => {
      const newList: any[] = arrData.map((item) => {
        return {
          id: item.id,
          largeImageURL: item.largeImageURL,
          tags: item.tags,
        };
      });
      return newList;
    });
    yield put(setFetchedItemsAction(allData));
}

export function* sagaFetchItemsWatcher() {
  yield takeEvery(ItemActionType.FETCH_ITEMS, sagaFetchItemsWorker)
}
