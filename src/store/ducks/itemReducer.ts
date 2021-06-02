import { ItemsState, ItemActionType, ItemAction } from '../types/item';

const initialState: ItemsState = {
  itemsList: [],
  listOfThreeLastItems: [],
  inputItem: "",
  viewList: [],
  isLoaded: false
};

export const itemReducer = (state: ItemsState = initialState, action: ItemAction) => {
    switch (action.type) {
      case ItemActionType.SET_FETCHED_ITEMS:
        return {
          ...state,
          itemsList: action.payload,
        };
      case ItemActionType.SET_THREE_LAST_ITEMS:
        return {
          ...state,
          listOfThreeLastItems: [
            ...state.listOfThreeLastItems.slice(-2),
            action.payload,
          ],
        };
      case ItemActionType.SET_INPUT_ITEM:
        return {
          ...state,
          inputItem: action.payload,
        };
      case ItemActionType.SET_VIEW_LIST:
        return {
          ...state,
          viewList: action.payload,
        };
      case ItemActionType.SET_IS_LOADED:
        return {
          ...state,
          isLoaded: action.payload,
        };
      default:
        return state;
    }
  };