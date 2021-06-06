import { put, takeEvery, call, StrictEffect, select } from 'redux-saga/effects';
import { ItemAction, ItemActionType, ItemsState, FechedDataView } from '../types/item';
import fetchApi from '../../api';

const initialState = {
    itemsList: [],
    listOfThreeLastItems: [],
    inputItem: '',
    isLoaded: false
};

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
        const state: ItemsState = yield select();
        const allData: FechedDataView = yield call(() => fetchApi(state));
        const arrData: any[] = yield call(() => allData.hits);
        yield put(SingleDuck().actionCreators().setFetchedItemsListAction(arrData));
    };

    function* sagaFetchItemsWatcher(): Generator<StrictEffect> {
        yield takeEvery(ItemActionType.FETCH_ITEMS, SingleDuck().sagaFetchItemsWorker)
    };

    return {
        reducers,
        actionCreators,
        sagaFetchItemsWatcher,
        sagaFetchItemsWorker
    };
}

export default SingleDuck;
