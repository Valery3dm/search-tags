import React from "react";

import Card from "react-bootstrap/Card";
import "./cards.css";

const Cards = (props) => {

  return (
    <ul className>
      {props.itemsList.map((item) => (
        <li key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.previewURL} />
            <Card.Body>
              <Card.Title>{item.tags}</Card.Title>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
