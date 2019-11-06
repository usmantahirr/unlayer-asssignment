import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import ListTemplate from "../pages/listTemplates";
import AddEditTemplate from "../pages/addEditTemplate";
import GenericTemplate from "../templates/genericTemplate";
import Header from "../molecules/header";
import { loadTemplates } from "../../services/templateService";
import DampedText from "../molecules/dampedText";

const TemplateContainer = ({ match }) => {
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
        updateState({
          templates: templates && templates.length ? templates : [],
          isLoading: false
        });
      } catch (e) {
        updateState({
          error: e,
          isLoading: false
        });
      }
    }

    fetchTemplates();
  }, [state.reset]);

  function addTemplate(template) {}
  function updateTemplate(template) {}
  function deleteTemplate(id) {}

  function renderPage() {
    if (Object.keys(params).length) {
      if (params.id === "add") {
        return <AddEditTemplate />;
      }
      return <AddEditTemplate activeTemplate={state.activeTemplate} />;
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
