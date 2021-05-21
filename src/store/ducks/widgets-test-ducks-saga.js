/* import { takeEvery, call, put, select } from "redux-saga/effects";
import { Duck } from "saga-duck";

// Initial state
const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: ''
};

// DDDDDDDDDDUUUUUUUUUUUUUUCCCCCCCCCCCCKKKKKKKKKKKKKKK
export const duck = new Duck({
  typeList: [
    "search-tags/reducer/SET_FETCHED_ITEMS",
    "search-tags/reducer/SET_THREE_LAST_ITEMS",
    "search-tags/reducer/SET_INPUT_ITEM"
  ],
  reducers: ({types}) => ({
      num: (state=initialState, action)=>{
          switch(action.type){
              case types.SET_FETCHED_ITEMS:
                return {
                  ...state, itemsList: action.payload
                };
              case types.SET_THREE_LAST_ITEMS:
                return {
                  ...state,
                  listOfThreeLastItems: [...state.listOfThreeLastItems.slice(-2), action.payload]
                };
              case types.SET_INPUT_ITEM:
                return {
                  ...state, inputItem: action.payload
                };
              default:
                return state;
          }
      }
  }),
  creators: ({types}) => ({
    setFetchedItemsAction: (payload)=>({type: types.SET_FETCHED_ITEMS, payload}),
    fetchItemsAction: ()=>({type: types.FETCH_ITEMS}),
    setThreeLastAction: (payload)=>({type: types.SET_THREE_LAST_ITEMS, payload}),
    setInputItemAction: (payload)=>({type: types.SET_INPUT_ITEM, payload}),
    fetchItemsFromApi: ()=>fetch("https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true")
  }),
  selectors: {
      num: state => state.num
  },
  sagas: [
      function* ({types, selectors, selector, creators}){
          yield takeEvery(types.FETCH_ITEMS, function*(fetchItemsAction){
              const data = yield select(creators.fetchItemsFromApi) 
              const json = yield select(call(() => new Promise(res => res(data.json()))))
              yield put(creators.setFetchedItemsAction(json.hits))
          })
      }
  ]
})
 */

/* 
const listDuck = new ListDuck({
  actionTypes() {
    return {
      FETCH_ITEMS: `search-tags/reducer/"FETCH_ITEMS`,
      SET_FETCHED_ITEMS: `search-tags/reducer/"SET_FETCHED_ITMS`,
      SET_THREE_LAST_ITEMS: `search-tags/reducer/"SET_THREE_LASTITEMS`,
      SET_INPUT_ITEM: `search-tags/reducer/"SET_INPUT_ITEM`,
    };
  },

  actionCreators() {
    return {
      fetchItemsAction: () => ({ type: listDuck.actionTypes.FETCH_ITEMS }),
      setFetchedItemsAction: (payload) => ({
        type: listDuck.actionTypes.SET_FETCHED_ITEMS,
        payload,
      }),
      setThreeLastAction: (payload) => ({
        type: listDuck.actionTypes.SET_THREE_LAST_ITEMS,
        payload,
      }),
      setInputItemAction: (payload) => ({
        type: listDuck.actionTypes.SET_INPUT_ITEM,
        payload,
      }),
      fetchItemsFromApi: () =>
        fetch(
          "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true"
        ),
    };
  },

  reducers() {
    return {
      reducer: (state = initialState, action = {}) => {
        switch (action.type) {
          case listDuck.actionTypes.SET_FETCHED_ITEMS:
            return {
              ...state,
              itemsList: action.payload,
            };
          case listDuck.actionTypes.SET_THREE_LAST_ITEMS:
            return {
              ...state,
              listOfThreeLastItems: [
                ...state.listOfThreeLastItems.slice(-2),
                action.payload],
            };
          case listDuck.actionTypes.SET_INPUT_ITEM:
            return {
              ...state,
              inputItem: action.payload,
            };
          default:
            return state;
        }
      },
    };
  },

  sagas() {
    return {
      fetchItemsWorker: function* () {
        yield takeEvery(listDuck.actionTypes.FETCH_ITEMS, function* () {
          const data = yield call(actionCreators.fetchItemsFromApi);
          const json = yield call(() => new Promise((res) => res(data.json())));
          yield put(
            listDuck.actionCreators.setFetchedItemsAction(json.hits)
          );
        });
      },
    }
  }
}); */