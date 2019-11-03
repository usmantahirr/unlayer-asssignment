import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

export default Section;
