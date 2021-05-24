import React from "react";

import Card from "react-bootstrap/Card";
import "./cards.css";

const Cards = (props) => {
  const viewCard = props.viewList.map((item) => (
    <li key={item.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.previewURL} />
        <Card.Body>
          <Card.Title>{item.tags}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));

  return <ul className>{viewCard}</ul>;
};

export default Cards;
