import React, { useState, useEffect } from "react";

import LastSearch from "./components/last-search";
import SearchPanel from "./components/search-panel";
import Cards from "./components/cards";
import PreLoader from "./components/pre-loader";
import AppStyled from "./styled/app-styled";

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
    <AppStyled>
      <SearchPanel />
      <LastSearch />
      {state ? <Cards state={state} /> : <PreLoader />}
    </AppStyled>
  );
};

export default App;
