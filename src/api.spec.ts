import fetchApi from './api';

let state = {
    itemsList: [],
    listOfThreeLastItems: [],
    inputItem: '',
    page: 1,
    isLoaded: false
};

describe('api', () => {
    it('check empty value api',async () => {
        const objItems = await fetchApi(state);
        const arrItems = objItems.hits;
        expect(arrItems).toHaveLength(20);
    });

    it('check null value api',async () => {
        state.inputItem = 'unreal value of key'
        const objItems = await fetchApi(state);
        const arrItems = objItems.hits;
        expect(arrItems).toHaveLength(0);
    });
});
