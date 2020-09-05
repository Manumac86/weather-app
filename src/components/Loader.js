import React from 'react';
import styled, { keyframes } from 'styled-components';

// Styled components
// Animations
const loaderSpin = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;
// Styles
const StyledLoader = styled.div`
  align-items: center;
  animation: 2s linear infinite;
  animation-name: ${loaderSpin};
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

// React Component
export default function Loader(props) {
  return (
    <StyledLoader />
  )
};
