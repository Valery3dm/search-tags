import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { duck } from "../store/ducks/widgets";

import { LastItemSearch, ButtonStyled, LastThreeItemSearch } from "../styled/last-search-style";

const LastSearch = (props) => {

  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.itemsList);


  const setInputItemAction = (item) => dispatch(duck.actionCreators.setInputItemAction(item))


  const setSearchedItemAction = (item) => {
    const filteredList = itemsList.filter(
      (el) => el.tags.toLowerCase().includes(item) === true
    );
    return dispatch(duck.actionCreators.setSearchedItemAction(filteredList));
  };

  const setTags = (item) => {
    setSearchedItemAction(item);
    setInputItemAction(item);
  }

  const viewTags = props.listOfThreeLastItems.map((item, idx) => (
    <li key={idx}>
        <Link to={`/${item}`}>
        <ButtonStyled variant="outline-dark" onClick={() => setTags(item)}>{item}</ButtonStyled>
        </Link>
    </li>
  ));
  

  return (
    <LastItemSearch>
      <div>Last search:</div>
      <div>
        <LastThreeItemSearch>{viewTags}</LastThreeItemSearch>
      </div>
    </LastItemSearch>
  )
};

export default LastSearch;
