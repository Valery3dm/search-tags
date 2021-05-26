import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const ButtonStyled = styled(Button)`
  margin: 10px 4px 0px 4px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;

const LastItemSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const LastThreeItemSearch = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`

export { LastItemSearch, ButtonStyled, LastThreeItemSearch };
