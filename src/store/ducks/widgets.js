// Actions
const SET_FETCHED_ITEMS = "search-tags/reducer/SET_FETCHED_ITEMS";
const SET_THREE_LAST_ITEMS = "search-tags/reducer/SET_THREE_LAST_ITEMS";
const SET_INPUT_ITEM = "search-tags/reducer/SET_INPUT_ITEM";

// Initial state
const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: ''
};

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FETCHED_ITEMS:
      return {
        ...state, itemsList: action.payload
      };
    case SET_THREE_LAST_ITEMS:
      return {
        ...state,
        listOfThreeLastItems: [...state.listOfThreeLastItems.slice(-2), action.payload]
      };
    case SET_INPUT_ITEM:
      return {
        ...state, inputItem: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

// Action Creators
export const setFetchedItemsAction = (payload) => ({
  type: SET_FETCHED_ITEMS,
  payload
});

export const fetchItemsAction = () => ({
  type: FETCH_ITEMS
});

export const setThreeLastAction = (payload) => ({
  type: SET_THREE_LAST_ITEMS,
  payload
});

export const setInputItemAction = (payload) => ({
  type: SET_INPUT_ITEM,
  payload
});

// Saga watcher
export const FETCH_ITEMS = "FETCH_ITEMS";