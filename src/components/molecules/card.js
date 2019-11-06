import React from "react";
import styled from "styled-components";
import Button from "../atoms/button";

const CardContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #f2f2f3;
  display: inline-flex;
  align-items: center;
  padding: 10px;
  margin: 7px;
`;

const CardText = styled.span`
  margin-right: 20px;
`;

const Card = ({ id, name }) => (
  <CardContainer>
    <CardText>{name}</CardText>
    <Button to={`/${id}`}>Edit</Button>
    {/*
    <Button
      type="danger"
      actionHandler={() => {
        console.log(`deleting id ${id}`);
      }}
    >
      Delete
    </Button>
*/}
  </CardContainer>
);

export default Card;
