import React, { useEffect } from "react";
import { connect } from 'react-redux';

import LastSearch from "./last-search/last-search";
import SearchPanel from "./search-panel/search-panel";
import Cards from "./cards/cards";
import PreLoader from "./pre-loader/pre-loader";

import "./App.css";

const App = (props) => {

  const { itemsList, onSetItemsToState } = props;

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((result) => {
        onSetItemsToState(result.hits)
      });
  }, [onSetItemsToState]);

  return (
    <div className="app">
      <SearchPanel />
      <LastSearch />
      {itemsList ? <Cards itemsList={itemsList} /> : <PreLoader />}
    </div>
  );
};

export default connect(
  (state) => ({
    itemsList: state.itemsList
  }),
  (dispatch) => ({
    onSetItemsToState: (fetchedItems) => {
      dispatch({ type: "FETCH_ITEMS", payload: fetchedItems });
    }
  })
)(App);
