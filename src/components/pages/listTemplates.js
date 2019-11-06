import React from "react";
import DampedText from "../molecules/dampedText";
import Card from "../molecules/card";

const ListTemplates = ({ templates }) =>
  templates && templates.length ? (
    templates.map(template => (
      <Card key={template.id} id={template.id} name={template.name} />
    ))
  ) : (
    <DampedText>No Templates Found</DampedText>
  );

export default ListTemplates;
