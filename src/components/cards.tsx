import React from 'react';

import Card from 'react-bootstrap/Card';

import { ListCards, CardStyled, CardImgStyled } from '../styled';

interface Props {
  viewList: any[];
}

const Cards: React.FC<Props> = ({ viewList }) => (
  <ListCards>
    {viewList.map(item => (
      <li key={item.id}>
        <CardStyled>
          <CardImgStyled variant="top" src={item.largeImageURL} />
          <Card.Body>
            <Card.Title>{item.tags}</Card.Title>
          </Card.Body>
        </CardStyled>
      </li>
    ))}
  </ListCards>
);

export default Cards;
