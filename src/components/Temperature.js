import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledTemperature = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50vw;
  @media (max-width: 530px) {
    width: 100vw;
    height: 25vh;
  }
`;

const Temp = styled.h2`
  font-size: 4em;
`;

const Span = styled.span`
  cursor: pointer;
`;

// React Component
export default function Temperature(props) {
  return (
    <StyledTemperature>
      <Temp>{props.temp}<Span>˚{props.degree}</Span></Temp>
    </StyledTemperature>
  )
};
