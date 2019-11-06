import React from "react";
import Section from "../atoms/section";

const GenericTemplate = ({ header: Header, children }) => (
  <React.Fragment>
    <Header />
    <Section>{children}</Section>
  </React.Fragment>
);

export default GenericTemplate;
