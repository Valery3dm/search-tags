import { put, takeEvery, call } from "redux-saga/effects";
import { Duck } from "saga-duck";

const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: "",
  searchedItem: [],
  isLoaded: false
};

class SingleDuck extends Duck {
  get quickTypes() {
    return {
      ...super.quickTypes,
      FETCH_ITEMS: "search-tags/reducer/FETCH_ITEMS",
      SET_FETCHED_ITEMS: "search-tags/reducer/SET_FETCHED_ITMS",
      SET_THREE_LAST_ITEMS: "search-tags/reducer/SET_THREE_LASTITEMS",
      SET_INPUT_ITEM: "search-tags/reducer/SET_INPUT_ITEM",
      SET_SEARCHED_ITEMS: "search-tags/reducer/SET_SEARCHED_ELEMENTS",
      SET_IS_LOADED: "search-tags/reducer/SET_IS_LOADED"
    };
  }

  get actionCreators() {
    const APIURL =
      "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true";

    return {
      fetchItemsAction: () => ({ 
        type: this.quickTypes.FETCH_ITEMS 
      }),
      setFetchedItemsAction: payload => ({
        type: this.quickTypes.SET_FETCHED_ITEMS,
        payload
      }),
      setThreeLastAction: payload => ({
        type: this.quickTypes.SET_THREE_LAST_ITEMS,
        payload
      }),
      setInputItemAction: payload => ({
        type: this.quickTypes.SET_INPUT_ITEM,
        payload
      }),
      setSearchedItemAction: payload => ({
        type: this.quickTypes.SET_SEARCHED_ITEMS,
        payload
      }),
      setIsLoaded: payload => ({
        type: this.quickTypes.SET_IS_LOADED,
        payload
      }),
      fetchItemsFromApi: () => fetch(APIURL),
    };
  }

  get reducers() {
    return {
      ...super.reducers,
      reducer: (state = initialState, action = {}) => {
        switch (action.type) {
          case this.quickTypes.SET_FETCHED_ITEMS:
            return {
              ...state,
              itemsList: action.payload
            };
          case this.quickTypes.SET_THREE_LAST_ITEMS:
            return {
              ...state,
              listOfThreeLastItems: [
                ...state.listOfThreeLastItems.slice(-2),
                action.payload
              ],
            };
          case this.quickTypes.SET_INPUT_ITEM:
            return {
              ...state,
              inputItem: action.payload
            };
          case this.quickTypes.SET_SEARCHED_ITEMS:
            return {
              ...state,
              searchedItem: action.payload
            };
          case this.quickTypes.SET_IS_LOADED:
            return {
              ...state,
              isLoaded: action.payload
            };
          default:
            return state;
        }
      },
    };
  }

  *saga() {
    yield* super.saga();
    yield takeEvery(duck.quickTypes.FETCH_ITEMS, function* () {
      const data = yield call(duck.actionCreators.fetchItemsFromApi);
      const json = yield call(() => new Promise(res => res(data.json())));
      const newData = yield call(() => {
        const newList = json.hits.map(item => {
          return {
            id: item.id,
            largeImageURL: item.largeImageURL,
            tags: item.tags
          };
        });
        return newList;
      });
      yield put(duck.actionCreators.setFetchedItemsAction(newData));
    });
  }
}

export const duck = new SingleDuck();
