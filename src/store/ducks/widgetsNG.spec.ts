import SingleDuck from './widgetsNG';
import { ItemActionType } from '../types/item';

let actionCreators = SingleDuck().actionCreators()
    let reducers = SingleDuck().reducers()

    const state = {
        itemsList: [],
        listOfThreeLastItems: [],
        inputItem: '',
        page: 1,
        isLoaded: false
    };

describe('REDUCER', () => {

    it('set Fetched Items List Action', () => {
        let action = actionCreators.setFetchedItemsListAction([
            {
                id: 1,
                largeImageURL: 'qweasdzxc123',
                tags: 'item1'
            }
        ]);
        let newState = reducers.reducer(state, action);
        expect(newState.itemsList.length).toBe(1);
    });

    it('set Three Last Action', () => {
        let action = actionCreators.setThreeLastAction('12345678');
        let newState = reducers.reducer(state, action);
        expect(newState.listOfThreeLastItems.length).toBe(1);
    });

    it('set Input Item Action', () => {
        let action = actionCreators.setInputItemAction('123456789');
        let newState = reducers.reducer(state, action);
        expect(newState.inputItem.length).toBe(9);
    });

    it('set Is Loaded', () => {
        let action = actionCreators.setIsLoaded(true);
        let newState = reducers.reducer(state, action);
        expect(newState.isLoaded).toBe(true);
    });
});

describe('ACTIONS', () => {
    
    it('set Fetched Items List Action', () => {
        expect(ItemActionType.SET_FETCHED_ITEMS).toBe('search-tags/reducer/SET_FETCHED_ITEMS');
    });

    it('set Three Last Action', () => {
        expect(ItemActionType.SET_THREE_LAST_ITEMS).toBe('search-tags/reducer/SET_THREE_LASTITEMS');
    });

    it('set Input Item Action', () => {
        expect(ItemActionType.SET_INPUT_ITEM).toBe('search-tags/reducer/SET_INPUT_ITEM');
    });

    it('set Is Loaded', () => {
        expect(ItemActionType.SET_IS_LOADED).toBe('search-tags/reducer/SET_IS_LOADED');
    });
});
