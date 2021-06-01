import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Google } from "./Google";
import { Main } from "./Main";
import { About } from "./About";
import { Pricing } from "./Pricing";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'
import logo from './logo.png';
import GoogleLogin from "react-google-login";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import GoogleButton from "react-google-button";
import {Form} from "./components/Form";
import Button from "@material-ui/core/Button";



function App() {
  return (
    <>
      <Router>
          <div className="Nav">
              <Navbar bg="myWhite" variant="light" /*fixed="top"*/ expand="sm" collapseOnSelect>
                  <Navbar.Brand>
                      <img src ={logo} height={40} width={80} />{' '}
                      Peanut board
                  </Navbar.Brand>
                  <Navbar.Toggle/>
                  <Navbar.Collapse class="nav">
                      <Nav>
                          <NavLink to="#Main" onClick={() => {
                              window.location.assign('/');
                          }}> Main </NavLink>
                          <NavLink to="#About Us" onClick={() => {
                              window.location.assign('/About');
                          }}> About Us </NavLink>
                          <NavLink to="#Payments" onClick={() => {
                              window.location.assign('/Pricing');
                          }}> Pricing </NavLink>
                          <Button  variant="contained" size="small" color="primary" onClick={() => {
                              window.location.assign('/Step1');
                          }} >Sign up</Button>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        <Switch>
            <Route exact path="/" component={Main} />
          <Route path="/Step1" component={Step1} />
          <Route path="/Step2" component={Step2} />
          <Route path="/Google" component={Google} />
          <Route path="/About" component={About} />
          <Route path="/Pricing" component={Pricing} />
        </Switch>
      </Router>

    </>
        );
}

export default App;

