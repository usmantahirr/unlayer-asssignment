import React from "react";

import Heading from "../atoms/heading";
import Button from "../atoms/button";
import HeaderContainer from "../atoms/headerContainer";

const Header = () => (
  <HeaderContainer>
    <Heading>Templates</Heading>
    <Button fat type="primary" to="add">
      Add
    </Button>
  </HeaderContainer>
);

export default Header;
