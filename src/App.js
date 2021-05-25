import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LastSearch from "./components/last-search";
import SearchPanel from "./components/search-panel";
import Cards from "./components/cards";
import AppStyled from "./styled/app-styled";

import PreLoader from "./components/pre-loader";

import { duck } from "./store/ducks/widgets";

const App = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector(state => state.itemsList);
  const listOfThreeLastItems = useSelector(state => state.listOfThreeLastItems);
  const searchedItem = useSelector(state => state.searchedItem);
  const isLoaded = useSelector(state => state.isLoaded);

  useEffect(() => {
    const fetchItemsAction = () => dispatch(duck.actionCreators.fetchItemsAction());
    const setIsLoaded = () => dispatch(duck.actionCreators.setIsLoaded(true));
    fetchItemsAction();
    setIsLoaded();
  }, [dispatch]);

  const viewList = searchedItem.length !== 0 ? searchedItem : itemsList

  return (
    <AppStyled>
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems} />
      {isLoaded ? 
        (<Cards viewList={viewList}/>) 
        : (<PreLoader />)
      }
    </AppStyled>
  );
};

export default App;
