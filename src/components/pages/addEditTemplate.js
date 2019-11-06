import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import EmailEditor from "react-email-editor";

import Button from "../atoms/button";
import HeaderContainer from "../atoms/headerContainer";
import { uuidv4 } from "../../services/utils";

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

const AddEditTemplate = ({ activeTemplate, saveTemplate, history }) => {
  const [state, setState] = React.useState({
    id: uuidv4(),
    name: "",
    design: {}
  });

  const editor = useRef(null);

  useEffect(() => {
    setState(s => ({
      ...s,
      id: activeTemplate ? activeTemplate.id : s.id,
      name: activeTemplate ? activeTemplate.name : s.name,
      design: activeTemplate ? activeTemplate.design : s.design
    }));
  }, [activeTemplate]);

  function saveChanges() {
    editor.current.saveDesign(changes => {
      saveTemplate({
        design: changes,
        name: state.name,
        id: state.id
      });
    });
  }

  return (
    <React.Fragment>
      <HeaderContainer>
        <FormContainer>
          <Button fat actionHandler={() => history.push("/")}>
            &larr;
          </Button>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Template Name"
              value={state.name}
              onChange={e =>
                setState({
                  ...state,
                  name: e.target.value
                })
              }
            />
          </FormGroup>
        </FormContainer>
        <Button fat type="primary" actionHandler={saveChanges}>
          Save template
        </Button>
      </HeaderContainer>
      <EmailEditor
        ref={editor}
        onLoad={() => {
          if (activeTemplate && editor.current) {
            editor.current.loadDesign(state.design);
          }
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(AddEditTemplate);
