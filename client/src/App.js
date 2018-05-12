import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

//most likely don't need router as we use auth0
//not sure
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
