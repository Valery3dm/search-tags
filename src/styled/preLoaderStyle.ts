import styled, { keyframes } from 'styled-components';

const rotate: any = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate: string = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 3rem 1rem;
  font-size: 3rem;
`;

export default Rotate;
