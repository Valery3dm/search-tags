import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects';
import { Duck } from 'saga-duck';
import { ItemAction, ItemActionType, ItemsState, FechedDataView } from '../types/item';

const initialState = {
    itemsList: [],
    listOfThreeLastItems: [],
    inputItem: "",
    viewList: [],
    isLoaded: false
};

const APIURL =
    "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true";

class SingleDuck extends Duck {

    get actionCreators() {
        return {
            fetchItemsAction: () => ({
                type: ItemActionType.FETCH_ITEMS
            }),
            setFetchedItemsAction: (payload: object[]): ItemAction => ({
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
            setViewList: (payload: any[]): ItemAction => ({
                type: ItemActionType.SET_VIEW_LIST,
                payload
            }),
            setIsLoaded: (payload: boolean): ItemAction => ({
                type: ItemActionType.SET_IS_LOADED,
                payload
            })
        }
    }

    get reducers() {
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
                    case ItemActionType.SET_VIEW_LIST:
                        return {
                            ...state,
                            viewList: action.payload
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
    }

    *sagaFetchItemsWorker() {
        const allData: FechedDataView = yield call(() => fetch(APIURL).then(res => res.json()));
        const arrData: any[] = yield call(() => allData.hits);
        yield put(duck.actionCreators.setFetchedItemsAction(arrData));
    }

    *sagaFetchItemsWatcher(): Generator<StrictEffect> {
        yield takeEvery(ItemActionType.FETCH_ITEMS, duck.sagaFetchItemsWorker)
    }
}

const duck = new SingleDuck();

export default duck;