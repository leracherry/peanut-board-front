import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Google } from "./Google";
import { Main } from "./Main";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'
import logo from './logo.png';
import GoogleLogin from "react-google-login";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";


function App() {
  return (
    <>
      <Router>
          <div className="Nav">
              <Navbar bg="myWhite" variant="light" fixed="top" expand="sm" collapseOnSelect>
                  <Navbar.Brand>
                      <img src ={logo} height={40} width={80} />{' '}
                      Peanut board
                  </Navbar.Brand>
                  <Navbar.Toggle/>
                  <Navbar.Collapse class="nav">
                      <Nav>
                          <NavLink to="#Main"> Main </NavLink>
                          <NavLink to="#About Us"> About Us </NavLink>
                          <NavLink to="#Payments"> Payments </NavLink>
                          <NavLink to="#Step1"> Sign up </NavLink>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
              <div className="content">
                  hui
              </div>
          </div>
        <Switch>
            <Route exact path="/" component={Main} />
          <Route path="/Step1" component={Step1} />
          <Route path="/Step2" component={Step2} />
          <Route path="/Google" component={Google} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
