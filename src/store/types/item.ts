export interface ItemsState {
    itemsList: any[];
    listOfThreeLastItems: any[];
    inputItem: string;
    viewList: any[];
    isLoaded: boolean;
}

export enum ItemActionType {
    FETCH_ITEMS = "search-tags/reducer/FETCH_ITEMS",
    SET_FETCHED_ITEMS = "search-tags/reducer/SET_FETCHED_ITEMS",
    SET_THREE_LAST_ITEMS = "search-tags/reducer/SET_THREE_LASTITEMS",
    SET_INPUT_ITEM = "search-tags/reducer/SET_INPUT_ITEM",
    SET_VIEW_LIST = "search-tags/reducer/SET_VIEW_LIST",
    SET_IS_LOADED = "search-tags/reducer/SET_IS_LOADED"
}

interface FetchItemsAction {
    type: ItemActionType.FETCH_ITEMS;
}

interface SetFetchedItemsAction {
    type: ItemActionType.SET_FETCHED_ITEMS;
    payload: any[];
}

interface SetThreeLastAction {
    type: ItemActionType.SET_THREE_LAST_ITEMS;
    payload: string;
}

interface SetInputItemAction {
    type: ItemActionType.SET_INPUT_ITEM;
    payload: string;
}

interface SetViewList {
    type: ItemActionType.SET_VIEW_LIST;
    payload: any[];
}

interface SetIsLoaded {
    type: ItemActionType.SET_IS_LOADED;
    payload: boolean;
}

export type ItemAction =
    FetchItemsAction
    | SetFetchedItemsAction
    | SetThreeLastAction
    | SetInputItemAction
    | SetViewList
    | SetIsLoaded
