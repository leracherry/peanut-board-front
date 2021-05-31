import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import {Step1} from "./Step1"
import { Step2 } from "./Step2";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
            <Route path="/Step1" component={Step1} />
          <Route path="/Step2" component={Step2} />
        </Switch>
      </Router>
    </>
  );

}

export default App;
