import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LastSearch from "./last-search/last-search";
import SearchPanel from "./search-panel/search-panel";
import Cards from "./cards/cards";
import PreLoader from "./pre-loader/pre-loader";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.itemsList);
  const listOfThreeLastItems = useSelector(state => state.listOfThreeLastItems)

  const onSetItemsToState = (fechedItems) =>
    dispatch({ type: "FETCH_ITEMS", payload: fechedItems });

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((result) => {
        onSetItemsToState(result.hits);
      });
  }, []);

  return (
    <div className="app">
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems}/>
      {itemsList ? <Cards itemsList={itemsList} /> : <PreLoader />}
    </div>
  );
};

export default App;
