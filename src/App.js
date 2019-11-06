import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TemplateContainer from "./components/container/TemplateContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <TemplateContainer />
          </Route>
          <Route path="/:id">
            <TemplateContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
