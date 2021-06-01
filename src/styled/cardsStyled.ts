import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ListCards: any = styled.ul`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const CardStyled: any = styled(Card)`
  width: 18rem;
  margin: 5px;
  height: 18rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;

const CardImgStyled: any = styled(Card.Img)`
  height: 12rem;
  object-fit: cover;
`;

export { ListCards, CardStyled, CardImgStyled };
