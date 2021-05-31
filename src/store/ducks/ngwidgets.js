const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: "",
  viewList: [],
  isLoaded: false
};

export const actionType = {
  FETCH_ITEMS: "search-tags/reducer/FETCH_ITEMS",
  SET_FETCHED_ITEMS: "search-tags/reducer/SET_FETCHED_ITMS",
  SET_THREE_LAST_ITEMS: "search-tags/reducer/SET_THREE_LASTITEMS",
  SET_INPUT_ITEM: "search-tags/reducer/SET_INPUT_ITEM",
  SET_VIEW_LIST: "search-tags/reducer/SET_VIEW_LIST",
  SET_IS_LOADED: "search-tags/reducer/SET_IS_LOADED",
};

const APIURL =
  "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true";

export const actionCreators = {
  fetchItemsAction: () => ({
    type: actionType.FETCH_ITEMS,
  }),
  setFetchedItemsAction: (payload) => ({
    type: actionType.SET_FETCHED_ITEMS,
    payload,
  }),
  setThreeLastAction: (payload) => ({
    type: actionType.SET_THREE_LAST_ITEMS,
    payload,
  }),
  setInputItemAction: (payload) => ({
    type: actionType.SET_INPUT_ITEM,
    payload,
  }),
  setViewList: (payload) => ({
    type: actionType.SET_VIEW_LIST,
    payload,
  }),
  setIsLoaded: (payload) => ({
    type: actionType.SET_IS_LOADED,
    payload,
  }),
  fetchItemsFromApi: () => fetch(APIURL),
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.SET_FETCHED_ITEMS:
      return {
        ...state,
        itemsList: action.payload,
      };
    case actionType.SET_THREE_LAST_ITEMS:
      return {
        ...state,
        listOfThreeLastItems: [
          ...state.listOfThreeLastItems.slice(-2),
          action.payload,
        ],
      };
    case actionType.SET_INPUT_ITEM:
      return {
        ...state,
        inputItem: action.payload,
      };
    case actionType.SET_VIEW_LIST:
      return {
        ...state,
        viewList: action.payload,
      };
    case actionType.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};
