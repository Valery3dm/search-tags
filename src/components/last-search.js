import React from "react";

import { LastItemSearch, ButtonStyled } from "../styled/last-search-style";

const LastSearch = () => (
  <LastItemSearch>
    <div>Last search:</div>
    <div>
      <ButtonStyled variant="outline-dark">sunflower</ButtonStyled>
      <ButtonStyled variant="outline-dark">rose</ButtonStyled>
      <ButtonStyled variant="outline-dark">petal</ButtonStyled>
    </div>
  </LastItemSearch>
);

export default LastSearch;
