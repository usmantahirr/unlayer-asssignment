import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: 20px 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

export default Section;
