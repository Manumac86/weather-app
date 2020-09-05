import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledDescription = styled.div`
  align-items: center;
  display: flex;
  font-size: 2em;
  justify-content: center;
  width: 50vw;
  @media (max-width: 530px) {
    width: 100%;
    height: 25vh;
  }
`;

const Desc = styled.h2`
  font-size: 40px;
`;

// React Component
export default function Description(props) {
  return (
    <StyledDescription>
      <Desc>{props.description}</Desc>
    </StyledDescription>
  )
};