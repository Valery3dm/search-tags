import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./search-panel.css"

const SearchPanel = () => {
    return (
      <InputGroup className="mb-3 inputGroup">
        <FormControl
          placeholder="type your tag here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  };

export default SearchPanel;