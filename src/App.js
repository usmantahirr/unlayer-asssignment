import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TemplateList from "./components/pages/listTemplates";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <TemplateList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
