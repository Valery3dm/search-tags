import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LastSearch from "./components/last-search/last-search";
import SearchPanel from "./components/search-panel/search-panel";
import Cards from "./components/cards/cards";
import PreLoader from "./components/pre-loader/pre-loader";

import { duck } from "./store/ducks/widgets";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.itemsList);
  const listOfThreeLastItems = useSelector(
    (state) => state.listOfThreeLastItems
  );

  useEffect(() => {
    dispatch(duck.actionCreators.fetchItemsAction());
  }, [dispatch]);

  return (
    <div className="app">
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems} />
      {itemsList ? <Cards itemsList={itemsList} /> : <PreLoader />}
    </div>
  );
};

export default App;
