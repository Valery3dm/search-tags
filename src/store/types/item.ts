export interface ItemsState {
    itemsList: object[];
    listOfThreeLastItems: any[];
    inputItem: string;
    isLoaded: boolean;
}

export enum ItemActionType {
    FETCH_ITEMS = 'search-tags/reducer/FETCH_ITEMS',
    SET_FETCHED_ITEMS = 'search-tags/reducer/SET_FETCHED_ITEMS',
    SET_THREE_LAST_ITEMS = 'search-tags/reducer/SET_THREE_LASTITEMS',
    SET_INPUT_ITEM = 'search-tags/reducer/SET_INPUT_ITEM',
    SET_IS_LOADED = 'search-tags/reducer/SET_IS_LOADED'
}

export interface FechedDataView {
    total: number;
    totalHits: number;
    hits: ItemAction;
  }

interface FetchItemsAction {
    type: ItemActionType.FETCH_ITEMS;
}

interface SetFetchedItemsListAction {
    type: ItemActionType.SET_FETCHED_ITEMS;
    payload: object[];
}

interface SetThreeLastAction {
    type: ItemActionType.SET_THREE_LAST_ITEMS;
    payload: string;
}

interface SetInputItemAction {
    type: ItemActionType.SET_INPUT_ITEM;
    payload: string;
}

interface SetIsLoaded {
    type: ItemActionType.SET_IS_LOADED;
    payload: boolean;
}

export type ItemAction =
    FetchItemsAction
    | SetFetchedItemsListAction
    | SetThreeLastAction
    | SetInputItemAction
    | SetIsLoaded
