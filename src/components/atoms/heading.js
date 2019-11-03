import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 500;
`;

const Heading = ({ children }) => <H1>{children}</H1>;
export default Heading;
