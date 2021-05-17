import React from "react";

import styled from "styled-components";
import "./last-search.css";

const LastSearch = () => {

  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

    return (
      <div className="lastItemSearch">
        <div>Last search:</div>
        <div>
          <Button>rose</Button>
          <Button>flower</Button>
          <Button>petal</Button>
        </div>
      </div>
    );
  };

export default LastSearch;