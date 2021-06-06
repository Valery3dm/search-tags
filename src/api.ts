import { ItemsState } from './store/types/item';

const fetchApi = (state: ItemsState) => fetch(
    `https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=${state.inputItem}&image_type=photo&pretty=true`
    ).then(
        res => res.json()
    );

export default fetchApi;
