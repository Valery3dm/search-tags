import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { duck } from "../../store/ducks/widgets";

import "./search-panel.css";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.itemsList);
  const inputItem = useSelector((state) => state.inputItem);

  const setInputItemAction = (inputItem) =>
    dispatch(duck.actionCreators.setInputItemAction(inputItem));

  const setThreeLastAction = (inputItem) => {
    if (inputItem.length !== 0) {
      return dispatch(duck.actionCreators.setThreeLastAction(inputItem));
    }
  };
  const setSearchedItemAction = (inputItem) => {
    if (inputItem.length !== 0) {
      const filteredList = itemsList.filter(
        (item) =>
          item.tags.toLowerCase().includes(inputItem.toLowerCase()) === true
      );
      return dispatch(duck.actionCreators.setSearchedItemAction(filteredList));
    }
  };

  const setTags = (inputItem) => {
    setThreeLastAction(inputItem);
    setSearchedItemAction(inputItem);
  };

  return (
    <InputGroup className="mb-3 inputGroup">
      <FormControl
        placeholder="type your tag here"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setInputItemAction(e.target.value)}
        value={inputItem}
      />
      <InputGroup.Append>
        <Link to={`/${inputItem}`}>
          <Button
            variant="outline-secondary"
            onClick={() => setTags(inputItem)}
          >
            Search
          </Button>
        </Link>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchPanel;
