const initialState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: ''
};

const FETCH_ITEMS = "FETCH_ITEMS";
const SET_THREE_LAST_ITEMS = "SET_THREE_LAST_ITEMS";
const SET_INPUT_ITEM = "SET_INPUT_ITEM";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, itemsList: action.payload };
    case SET_THREE_LAST_ITEMS:
      return { ...state,
         listOfThreeLastItems: [ ...state.listOfThreeLastItems, action.payload]
        };
    case SET_INPUT_ITEM:
      return { ...state, inputItem: action.payload };
    default:
      return state;
  }
};

export default reducer;