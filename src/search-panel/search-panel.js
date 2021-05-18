import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./search-panel.css"

const SearchPanel = () => {

  const [ inputValue, setInputValue ] = useState('');

  

    return (

        <InputGroup className="mb-3 inputGroup">
          <FormControl
            placeholder="type your tag here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <InputGroup.Append>
            <NavLink to={`/${inputValue}`}><Button variant="outline-secondary">Search</Button></NavLink>
          </InputGroup.Append>
          </InputGroup>

    );
  };

export default connect(
  (state) => ({
    itemsList: state.itemsList
  }),
  (dispatch) => ({
    onSetItemsToState: (fetchedItems) => {
      dispatch({ type: "SET_THREE_LAST_ITEMS", payload: fetchedItems });
    }
  })
)(SearchPanel);