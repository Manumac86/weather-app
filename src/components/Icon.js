import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledIcon = styled.div`
  align-items: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 50vw;
  @media (max-width: 530px) {
    width: 100vw;
    height: 25vh;
  }
`;

const Image = styled.img`
  width: 45%;
`;

// React Component
export default function Icon(props) {
  return (
    <StyledIcon background-image={props.image}>
      <Image src={props.image} alt="Weather Icon"/>
    </StyledIcon>
  )
};
