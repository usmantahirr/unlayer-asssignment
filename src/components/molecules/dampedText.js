import React from "react";
import styled from "styled-components";

const StyledDampedText = styled.div`
  text-align: center;
  color: #718093;
`;

const DampedText = ({ children }) => (
  <StyledDampedText>{children}</StyledDampedText>
);

export default DampedText;
