import fetchApi from '../api';

let state = {
    itemsList: [],
    listOfThreeLastItems: [],
    inputItem: '',
    page: 1,
    isLoaded: false
};

describe('api', () => {
    it('should check empty value api',async () => {
        const objItems = await fetchApi(state);
        const arrItems = objItems.hits;
        expect(arrItems).toHaveLength(20);
    });

    it('should check null value api',async () => {
        state.inputItem = 'unreal value of key'
        const objItems = await fetchApi(state);
        const arrItems = objItems.hits;
        expect(arrItems).toHaveLength(0);
    });
});
