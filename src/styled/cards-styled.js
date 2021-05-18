import Card from "react-bootstrap/Card";
import styled from "styled-components";

const ListCards = styled.ul`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const CardStyled = styled(Card)`
  width: 18rem;
  margin: 3px;
  height: 18rem;
`;
const CardImgStyled = styled(Card.Img)`
  height: 12rem;
  object-fit: cover;
`;

export { ListCards, CardStyled, CardImgStyled };
