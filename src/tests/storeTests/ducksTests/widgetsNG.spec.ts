import SingleDuck from '../../../store/ducks/widgetsNG';
import { ItemActionType } from '../../../store/types/item';

describe('REDUCER', () => {

    const {
        setIsLoaded,
        setEmtyItemList,
        setInputItemAction,
        setThreeLastAction,
        setFetchedItemsListAction
    } = SingleDuck().actionCreators();
    
    const reducers = SingleDuck().reducers()
    
    const state = {
        itemsList: [],
        listOfThreeLastItems: [],
        inputItem: '',
        page: 1,
        isLoaded: false
    };

    it('should set Fetched Items List Action', () => {
        let action = setFetchedItemsListAction([
            {
                id: 1,
                largeImageURL: '',
                tags: ''
            }
        ]);
        let newState = reducers.reducer(state, action);
        expect(newState.itemsList.length).toBe(1);
    });

    it('should set Emty Item List', () => {
        const newState = reducers.reducer(state, setEmtyItemList([]));
        expect(newState.itemsList.length).toBe(0);
    });

    it('should set Three Last Action', () => {
        const newState = reducers.reducer(state, setThreeLastAction('12345678'));
        expect(newState.listOfThreeLastItems.length).toBe(1);
    });

    it('should set Input Item Action', () => {
        const newState = reducers.reducer(state, setInputItemAction('123456789'));
        expect(newState.inputItem.length).toBe(9);
    });

    it('should set Is Loaded', () => {
        const newState = reducers.reducer(state, setIsLoaded(true));
        expect(newState.isLoaded).toBe(true);
    });
});

describe('ACTIONS', () => {
    
    it('should set Fetched Items List Action', () => {
        expect(ItemActionType.SET_FETCHED_ITEMS).toBe('search-tags/reducer/SET_FETCHED_ITEMS');
    });

    it('should set Three Last Action', () => {
        expect(ItemActionType.SET_THREE_LAST_ITEMS).toBe('search-tags/reducer/SET_THREE_LASTITEMS');
    });

    it('should set Input Item Action', () => {
        expect(ItemActionType.SET_INPUT_ITEM).toBe('search-tags/reducer/SET_INPUT_ITEM');
    });

    it('should set Page', () => {
        expect(ItemActionType.SET_PAGE).toBe('search-tags/reducer/SET_PAGE');
    });

    it('should set Is Loaded', () => {
        expect(ItemActionType.SET_IS_LOADED).toBe('search-tags/reducer/SET_IS_LOADED');
    });
});
