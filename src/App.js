import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import BoxShadow from "./pages/BoxShadow";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/boxshadow">
          <BoxShadow />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
