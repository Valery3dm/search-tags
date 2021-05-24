import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { duck } from "../../store/ducks/widgets";

import styled from "styled-components";
import "./last-search.css";



const LastSearch = (props) => {
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

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

  const viewTags = props.listOfThreeLastItems.map((item) => (
    <li>
        <Link to={`/${item}`}>
          <Button onClick={() => setTags(item)}>{item}</Button>
        </Link>
    </li>
  ));

  return (
    <div className="lastItemSearch">
      <div>Last search:</div>
        <ul>{viewTags}</ul>
    </div>
  );
};

export default LastSearch;