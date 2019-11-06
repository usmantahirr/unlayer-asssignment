import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import ListTemplate from "../pages/listTemplates";
import AddEditTemplate from "../pages/addEditTemplate";
import GenericTemplate from "../templates/genericTemplate";
import Header from "../molecules/header";
import {
  loadTemplates,
  addTemplate as addToLocalStorage,
  updateTemplate as updateInLocalStorage
} from "../../services/templateService";
import DampedText from "../molecules/dampedText";

const TemplateContainer = ({ history, match }) => {
  const { params } = match;
  const [state, setState] = useState({
    isLoading: false,
    templates: [],
    activeTemplate: undefined,
    reset: 0,
    error: undefined
  });

  useEffect(() => {
    function updateState(updatedState) {
      setState(s => ({
        ...s,
        ...updatedState
      }));
    }

    async function fetchTemplates() {
      updateState({
        error: undefined,
        activeTemplate: undefined,
        isLoading: true
      });

      try {
        const templates = await loadTemplates();
        let newState = {
          templates: templates && templates.length ? templates : [],
          isLoading: false
        };
        if (params.id && params.id !== "add") {
          newState.activeTemplate = templates.find(t => t.id === params.id);
        }
        updateState(newState);
      } catch (e) {
        updateState({
          error: e,
          isLoading: false
        });
      }
    }

    fetchTemplates();
  }, [state.reset, params.id]);

  async function addTemplate(template) {
    try {
      await addToLocalStorage(template);
    } catch (e) {
      setState({
        ...state,
        activeTemplate: undefined,
        error: e
      });
    }
  }
  async function updateTemplate(template) {
    try {
      await updateInLocalStorage(template);
    } catch (e) {
      setState({
        ...state,
        activeTemplate: undefined,
        error: e
      });
    }
  }

  function saveTemplate(template) {
    if (Object.keys(params).length && params.id === "add") {
      addTemplate(template).then(() => {
        setState({
          ...state,
          activeTemplate: undefined,
          reset: state.reset + 1
        });
        history.push("/");
      });
    } else {
      updateTemplate(template).then(() => {
        setState({
          ...state,
          activeTemplate: undefined,
          reset: state.reset + 1
        });
        history.push("/");
      });
    }
  }

  function renderPage() {
    if (Object.keys(params).length) {
      if (params.id === "add") {
        return <AddEditTemplate saveTemplate={saveTemplate} />;
      }
      return (
        <AddEditTemplate
          saveTemplate={saveTemplate}
          activeTemplate={state.activeTemplate}
        />
      );
    }

    return <ListTemplate templates={state.templates} />;
  }

  return (
    <GenericTemplate header={!Object.keys(params).length ? Header : undefined}>
      {state.isLoading ? <DampedText>Loading...</DampedText> : renderPage()}
    </GenericTemplate>
  );
};

export default withRouter(TemplateContainer);
