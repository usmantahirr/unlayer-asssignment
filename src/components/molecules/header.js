import React from "react";
import styled from "styled-components";

import Heading from "../atoms/heading";
import Button from "../atoms/button";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dcdde1;
`;

const Header = () => (
  <HeaderContainer>
    <Heading>Templates</Heading>
    <Button type="primary" to="add">
      Add
    </Button>
  </HeaderContainer>
);

export default Header;
