import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: 20px 0;
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

export default Section;
