import React from 'react';
import styled from 'styled-components';

const StyledLocation = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2.5em;
  width: 50vw;
  @media (max-width: 530px) {
    width: 100vw;
    height: 20vh;
  }
`

export default function Location(props) {
  return (
    <StyledLocation>
      <h2>{props.location}</h2>
    </StyledLocation>
  )
};
