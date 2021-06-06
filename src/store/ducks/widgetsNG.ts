import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects';
import { ItemAction, ItemActionType, ItemsState, FechedDataView } from '../types/item';

const initialState = {
    itemsList: [],
    listOfThreeLastItems: [],
    inputItem: '',
    isLoaded: false
};

const APIURL =
    `https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=&image_type=photo&pretty=true`;

const SingleDuck = () => {
  const actionCreators = () => {
    return {
            fetchItemsAction: () => ({
                type: ItemActionType.FETCH_ITEMS
            }),
            setFetchedItemsListAction: (payload: object[]): ItemAction => ({
                type: ItemActionType.SET_FETCHED_ITEMS,
                payload
            }),
            setThreeLastAction: (payload: string): ItemAction => ({
                type: ItemActionType.SET_THREE_LAST_ITEMS,
                payload
            }),
            setInputItemAction: (payload: string): ItemAction => ({
                type: ItemActionType.SET_INPUT_ITEM,
                payload
            }),
            setIsLoaded: (payload: boolean): ItemAction => ({
                type: ItemActionType.SET_IS_LOADED,
                payload
            })
        }
    };

    const reducers = () => {
        return {
            reducer: (state: ItemsState = initialState, action: ItemAction) => {
                switch (action.type) {
                    case ItemActionType.SET_FETCHED_ITEMS:
                        return {
                            ...state,
                            itemsList: action.payload
                        };
                    case ItemActionType.SET_THREE_LAST_ITEMS:
                        return {
                            ...state,
                            listOfThreeLastItems: [
                                ...state.listOfThreeLastItems.slice(-2),
                                action.payload
                            ]
                        };
                    case ItemActionType.SET_INPUT_ITEM:
                        return {
                            ...state,
                            inputItem: action.payload
                        };
                    case ItemActionType.SET_IS_LOADED:
                        return {
                            ...state,
                            isLoaded: action.payload
                        };
                    default:
                        return state;
                }
            }
        }
    };

    function* sagaFetchItemsWorker() {
        const allData: FechedDataView = yield call(() => fetch(APIURL).then(res => res.json()));
        const arrData: any[] = yield call(() => allData.hits);
        yield put(SingleDuck().actionCreators().setFetchedItemsListAction(arrData));
    };

    function* sagaFetchItemsWatcher(): Generator<StrictEffect> {
        yield takeEvery(ItemActionType.FETCH_ITEMS, SingleDuck().sagaFetchItemsWorker)
    };

    return {
        actionCreators,
        reducers,
        sagaFetchItemsWatcher,
        sagaFetchItemsWorker
    }
}

export default SingleDuck;
