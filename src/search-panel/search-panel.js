import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./search-panel.css"

const SearchPanel = () => {

  const dispatch = useDispatch();
  const inputItem = useSelector(state => state.inputItem);

  const setInputItem = (value) => dispatch({ type: "SET_INPUT_ITEM", payload: value})
  const setTags = (inputItem) => dispatch({ type: "SET_THREE_LAST_ITEMS", payload: inputItem})
  
  
    return (

        <InputGroup className="mb-3 inputGroup">
          <FormControl
            placeholder="type your tag here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setInputItem(e.target.value)}
            value={inputItem}
          />
          <InputGroup.Append>
            <NavLink to={`/${inputItem}`}><Button variant="outline-secondary" onClick={() => setTags(inputItem)}>Search</Button></NavLink>
          </InputGroup.Append>
          </InputGroup>

    );
  };

export default SearchPanel;