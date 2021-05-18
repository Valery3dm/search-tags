import React from "react";

import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import SearchPanelStyle from "../styled/search-panel-style";

const SearchPanel = () => (
  <SearchPanelStyle className="mb-3 inputGroup">
    <FormControl
      placeholder="type your tag here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </SearchPanelStyle>
);

export default SearchPanel;
