import React from "react";

import Card from "react-bootstrap/Card";
import { ListCards, CardStyled, CardImgStyled } from "../styled/cards-styled";

const Cards = (props) => (
  <ListCards>
    {props.state.map((item) => (
      <li key={item.id}>
        <CardStyled>
          <CardImgStyled variant="top" src={item.previewURL} />
          <Card.Body>
            <Card.Title>{item.tags}</Card.Title>
          </Card.Body>
        </CardStyled>
      </li>
    ))}
  </ListCards>
);

export default Cards;
