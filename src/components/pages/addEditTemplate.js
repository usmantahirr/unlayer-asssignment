import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Button from "../atoms/button";
import HeaderContainer from "../atoms/headerContainer";

const FormContainer = styled.div`
  margin: 10px 0;
`;

const FormGroup = styled.div`
  margin-left: 10px;
  display: inline-block;

  label {
    margin-right: 5px;
  }
  input {
    transition: all 0.2s;
    font-size: 12px;
    outline: none;
    padding: 0 10px;
    height: 1.8rem;
    line-height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    border-color: rgb(226, 232, 240);
    background-color: #fff;
    min-width: 15rem;
    &:focus {
      outline: none;
      border-color: rgb(88, 153, 214);
    }
  }
`;

const AddEditTemplate = ({ history }) => {
  return (
    <HeaderContainer>
      <FormContainer>
        <Button fat actionHandler={() => history.push("/")}>
          &larr;
        </Button>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Template Name" />
        </FormGroup>
      </FormContainer>
      <Button fat type="primary">
        Save template
      </Button>
    </HeaderContainer>
  );
};

export default withRouter(AddEditTemplate);
