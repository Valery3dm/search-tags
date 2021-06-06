import { useSelector } from "react-redux";
import { ItemsState } from "./store/types/item";

const FetchApi = () => {

    const { inputItem } = useSelector((state: ItemsState) => state);

    const apiUrl = () => fetch(`https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=${inputItem}&image_type=photo&pretty=true`)
        .then(res => res.json());

    return apiUrl()
}

export default FetchApi;
