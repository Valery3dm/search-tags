import { put, takeEvery, call } from "redux-saga/effects";
import { Duck } from "saga-duck";

// Initial state
const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: "",
};

class SingleDuck extends Duck {

  get quickTypes() {
    return {
      ...super.quickTypes,
      FETCH_ITEMS: "search-tags/reducer/FETCH_ITEMS",
      SET_FETCHED_ITEMS: "search-tags/reducer/SET_FETCHED_ITMS",
      SET_THREE_LAST_ITEMS: "search-tags/reducer/SET_THREE_LASTITEMS",
      SET_INPUT_ITEM: "search-tags/reducer/SET_INPUT_ITEM"
    }
  }

  get actionCreators() {
    return {
      fetchItemsAction: () => ({type: this.quickTypes.FETCH_ITEMS}),
      setFetchedItemsAction: (payload) => ({type: this.quickTypes.SET_FETCHED_ITEMS, payload}),
      setThreeLastAction: (payload) => ({type: this.quickTypes.SET_THREE_LAST_ITEMS, payload}),
      setInputItemAction: (payload) => ({type: this.quickTypes.SET_INPUT_ITEM, payload}),
      fetchItemsFromApi: () => fetch(`https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true`)
    }
  }

  get reducers() {
    return {
      ...super.reducers,
      reducer: (state = initialState, action = {}) => {
        switch (action.type) {
          case this.quickTypes.SET_FETCHED_ITEMS:
            return {
              ...state,
              itemsList: action.payload,
            };
          case this.quickTypes.SET_THREE_LAST_ITEMS:
            return {
              ...state,
              listOfThreeLastItems: [
                ...state.listOfThreeLastItems.slice(-2),
                action.payload,
              ],
            };
          case this.quickTypes.SET_INPUT_ITEM:
            return {
              ...state,
              inputItem: action.payload,
            };
          default:
            return state;
        }
      }
    }
  }

  *saga() {
    yield* super.saga();
    yield takeEvery( duck.quickTypes.FETCH_ITEMS, function*(){
      const data = yield call(duck.actionCreators.fetchItemsFromApi);
      const json = yield call(() => new Promise((res) => res(data.json())));
      yield put(duck.actionCreators.setFetchedItemsAction(json.hits));
    })
  }
}

export const duck = new SingleDuck()

console.log(duck)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Actions && Action Creators && Reducer && Saga
/* 
export const duck = new Duck ({

  actionTypes: {
    FETCH_ITEMS: "search-tags/reducer/FETCH_ITEMS",
    SET_FETCHED_ITEMS: "search-tags/reducer/SET_FETCHED_ITMS",
    SET_THREE_LAST_ITEMS: "search-tags/reducer/SET_THREE_LASTITEMS",
    SET_INPUT_ITEM: "search-tags/reducer/SET_INPUT_ITEM"
  },

  actionCreators: {
    fetchItemsAction: () => ({type: this.actionTypes.FETCH_ITEMS}),
    setFetchedItemsAction: (payload) => ({type: this.actionTypes.SET_FETCHED_ITEMS, payload}),
    setThreeLastAction: (payload) => ({type: this.actionTypes.SET_THREE_LAST_ITEMS, payload}),
    setInputItemAction: (payload) => ({type: this.actionTypes.SET_INPUT_ITEM, payload}),
    fetchItemsFromApi: () => fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")
  },

  reducer: (state = initialState, action = {}) => {
    switch (action.type) {
      case this.actionTypes.SET_FETCHED_ITEMS:
        return {
          ...state,
          itemsList: action.payload,
        };
      case this.actionTypes.SET_THREE_LAST_ITEMS:
        return {
          ...state,
          listOfThreeLastItems: [
            ...state.listOfThreeLastItems.slice(-2),
            action.payload,
          ],
        };
      case this.actionTypes.SET_INPUT_ITEM:
        return {
          ...state,
          inputItem: action.payload,
        };
      default:
        return state;
    }
  },

  *fetchItemsWorker() {
    const data = yield call(this.actionCreators.fetchItemsFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(this.actionCreators.setFetchedItemsAction(json.hits));
  },
  
  *fetchItemsWatcher() {
    yield takeEvery( this.actionTypes.FETCH_ITEMS, this.fetchItemsWorker);
  }

}) */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Actions && Action Creators && Reducer && Saga

/* 


export const duck = () => {

  const actionTypes = {
    FETCH_ITEMS: "search-tags/reducer/FETCH_ITEMS",
    SET_FETCHED_ITEMS: "search-tags/reducer/SET_FETCHED_ITMS",
    SET_THREE_LAST_ITEMS: "search-tags/reducer/SET_THREE_LASTITEMS",
    SET_INPUT_ITEM: "search-tags/reducer/SET_INPUT_ITEM"
  }

  const actionCreators = {
    fetchItemsAction: () => ({type: actionTypes.FETCH_ITEMS}),
    setFetchedItemsAction: (payload) => ({type: actionTypes.SET_FETCHED_ITEMS, payload}),
    setThreeLastAction: (payload) => ({type: actionTypes.SET_THREE_LAST_ITEMS, payload}),
    setInputItemAction: (payload) => ({type: actionTypes.SET_INPUT_ITEM, payload}),
    fetchItemsFromApi: () => fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")
  }

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case actionTypes.SET_FETCHED_ITEMS:
        return {
          ...state,
          itemsList: action.payload,
        };
      case actionTypes.SET_THREE_LAST_ITEMS:
        return {
          ...state,
          listOfThreeLastItems: [
            ...state.listOfThreeLastItems.slice(-2),
            action.payload,
          ],
        };
      case actionTypes.SET_INPUT_ITEM:
        return {
          ...state,
          inputItem: action.payload,
        };
      default:
        return state;
    }
  }

  function* fetchItemsWorker() {
    const data = yield call(actionCreators.fetchItemsFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(actionCreators.setFetchedItemsAction(json.hits));
  }
  
  function* fetchItemsWatcher() {
    yield takeEvery( actionTypes.FETCH_ITEMS, fetchItemsWorker);
  }

  return {
    fetchItemsWatcher,
    reducer,
    actionCreators,
    actionTypes
  }
} */

