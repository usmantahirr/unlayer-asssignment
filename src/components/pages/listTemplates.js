import React from "react";
import Header from "../molecules/header";
import DampedText from "../molecules/dampedText";
import Section from "../atoms/section";

const TemplateList = () => (
  <React.Fragment>
    <Header />
    <Section>
      <DampedText>No Templates Found</DampedText>
    </Section>
  </React.Fragment>
);

export default TemplateList;
