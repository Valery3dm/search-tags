import { put, takeEvery, call, all } from "redux-saga/effects";
// Initial state
const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: "",
};

/* const actionTypes = {
  FETCH_ITEMS: `search-tags/reducer/"FETCH_ITEMS`,
  SET_FETCHED_ITEMS: `search-tags/reducer/"SET_FETCHED_ITMS`,
  SET_THREE_LAST_ITEMS: `search-tags/reducer/"SET_THREE_LASTITEMS`,
  SET_INPUT_ITEM: `search-tags/reducer/"SET_INPUT_ITEM`,
};

export const actionCreators = {
  fetchItemsAction: () => ({type: actionTypes.FETCH_ITEMS}),
  setFetchedItemsAction: (payload) => ({type: actionTypes.SET_FETCHED_ITEMS,payload}),
  setThreeLastAction: (payload) => ({type: actionTypes.SET_THREE_LAST_ITEMS,payload}),
  setInputItemAction: (payload) => ({type: actionTypes.SET_INPUT_ITEM,payload}),
  fetchItemsFromApi: () => fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")
};

export const reducer = (state = initialState, action = {}) => {
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

export function* rootWatcher() {

  function* fetchItemsWorker() {
    yield takeEvery(actionTypes.FETCH_ITEMS, function* () {
      const data = yield call(actionCreators.fetchItemsFromApi);
      const json = yield call(() => new Promise((res) => res(data.json())));
      yield put(
        actionCreators.setFetchedItemsAction(json.hits)
      );
    });
  }
  yield all([fetchItemsWorker()])
} */
// Actions && Action Creators && Reducer && Saga
export const duck = () => {

  const actionTypes = {
    FETCH_ITEMS: `search-tags/reducer/"FETCH_ITEMS`,
    SET_FETCHED_ITEMS: `search-tags/reducer/"SET_FETCHED_ITMS`,
    SET_THREE_LAST_ITEMS: `search-tags/reducer/"SET_THREE_LASTITEMS`,
    SET_INPUT_ITEM: `search-tags/reducer/"SET_INPUT_ITEM`,
  };

  const actionCreators = {
    fetchItemsAction: () => ({type: actionTypes.FETCH_ITEMS}),
    setFetchedItemsAction: (payload) => ({type: actionTypes.SET_FETCHED_ITEMS,payload}),
    setThreeLastAction: (payload) => ({type: actionTypes.SET_THREE_LAST_ITEMS,payload}),
    setInputItemAction: (payload) => ({type: actionTypes.SET_INPUT_ITEM,payload}),
    fetchItemsFromApi: () => fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")
  };

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

  function* rootWatcher() {

    function* fetchItemsWorker() {
      yield takeEvery(actionTypes.FETCH_ITEMS, function* () {
        const data = yield call(actionCreators.fetchItemsFromApi);
        const json = yield call(() => new Promise((res) => res(data.json())));
        yield put(
          actionCreators.setFetchedItemsAction(json.hits)
        );
      });
    }
    yield all([fetchItemsWorker()])
  }


  return {
    actionTypes,
    actionCreators,
    reducer,
    rootWatcher
  }
}

console.log(duck())

/* export const duck = new Duck({
  get actionTypes() {
    return {
      FETCH_ITEMS: `search-tags/reducer/FETCH_ITEMS`,
      SET_FETCHED_ITEMS: `search-tags/reducer/SET_FETCHED_ITMS`,
      SET_THREE_LAST_ITEMS: `search-tags/reducer/SET_THREE_LASTITEMS`,
      SET_INPUT_ITEM: `search-tags/reducer/SET_INPUT_ITEM`,
    };
  },

  get actionCreators() {
    return {
      fetchItemsAction: () => ({
        type: this.actionTypes.FETCH_ITEMS
      }),
      setFetchedItemsAction: (payload) => ({
        type: this.actionTypes.SET_FETCHED_ITEMS,
        payload,
      }),
      setThreeLastAction: (payload) => ({
        type: this.actionTypes.SET_THREE_LAST_ITEMS,
        payload,
      }),
      setInputItemAction: (payload) => ({
        type: this.actionTypes.SET_INPUT_ITEM,
        payload,
      }),
      fetchItemsFromApi: () =>
        fetch(
          "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true"
        ),
    };
  },

  get reducers() {
    return {
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
                action.payload],
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
    };
  }  
}); */
