import React from "react";
import Header from "../molecules/header";
import DampedText from "../molecules/dampedText";
import Section from "../atoms/section";
import Card from "../molecules/card";

const TemplateList = () => (
  <React.Fragment>
    <Header />
    <Section>
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <Card id="123" name="Template 1" />
      <DampedText>No Templates Found</DampedText>
    </Section>
  </React.Fragment>
);

export default TemplateList;
