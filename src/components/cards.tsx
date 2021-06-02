import React from 'react';

import { ListCards, CardStyled, CardImgStyled } from '../styled';

import Card from 'react-bootstrap/Card';

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
