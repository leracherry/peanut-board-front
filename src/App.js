import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Google } from "./Google";
import GoogleLogin from "react-google-login";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/Step2" component={Step2} />
          <Route path="/Google" component={Google} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
