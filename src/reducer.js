const initialState = {
  itemsList: [],
  listOfThreeLastItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ITEMS":
          return { itemsList: action.payload };
        case "SET_THREE_LAST_ITEMS":
          return { listOfThreeLastItems: action.payload };
        default:
          return state;
      }
}

export default reducer;