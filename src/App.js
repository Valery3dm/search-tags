import React, { useState, useEffect } from "react";

import LastSearch from "./last-search/last-search";
import SearchPanel from "./search-panel/search-panel";
import Cards from "./cards/cards";
import PreLoader from './pre-loader/pre-loader';

import "./App.css";

const App = () => {
  
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=21652349-10296171d71009a10a9cdc544&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((result) => {
        setState(result.hits);
      });
  }, []);

  return (
    <div className="app">
      <SearchPanel />
      <LastSearch />
      {state ? <Cards state={state} /> : <PreLoader/>}
    </div>
  );
};

export default App;
