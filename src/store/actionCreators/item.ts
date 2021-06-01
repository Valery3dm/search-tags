import { Dispatch } from 'redux';
import { ItemAction, ItemActionType } from '../types/item';


const  fetchItemsAction = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({type: ItemActionType.FETCH_ITEMS})
    } catch (e) {
      console.error(e)
    }
  }
}

const setFetchedItemsAction = (payload: ItemAction) => ({
    type: ItemActionType.SET_FETCHED_ITEMS,
    payload
  });
const setThreeLastAction = (payload: ItemAction) => ({
    type: ItemActionType.SET_THREE_LAST_ITEMS,
    payload
  });
const setInputItemAction = (payload: ItemAction) => ({
    type: ItemActionType.SET_INPUT_ITEM,
    payload
  });
const setViewList = (payload: ItemAction) => ({
    type: ItemActionType.SET_VIEW_LIST,
    payload
  });
const setIsLoaded = (payload: ItemAction) => ({
    type: ItemActionType.SET_IS_LOADED,
    payload
  });

export {
  fetchItemsAction,
  setFetchedItemsAction,
  setThreeLastAction,
  setInputItemAction,
  setViewList,
  setIsLoaded
}
