import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import StatBlock from "./components/StatBlock";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
