import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
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
import Nav from "react-bootstrap/Nav";
import Button from "@material-ui/core/Button";
import AsyncStorage from "@react-native-community/async-storage";


function App() {
    const [token, setToken] = React.useState(null);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('jwt');
            if(value !== null) {
                setToken(value);
                return value;
            }
            return null;
        } catch(e) {
            console.log(e);
        }
    };
    const userToken = getData();
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
                          <Link to="/" className="nav-link">
                              Main
                          </Link>
                          <Link to="/About" className="nav-link">
                              About Us
                          </Link>
                          <Link to="/Pricing" className="nav-link">
                              Pricing
                          </Link>
                          <Link to="/Step1" className="button-link">
                              <Button variant="contained" size="small" color="primary">Sign up</Button>
                          </Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        <Switch>
            <Route exact path="/" component={Main} />
          <Route path="/Step1" component={Step1} />
          <Route path="/Step2" component={Step2} initialParams={{setToken}}/>
          <Route path="/Google" component={Google} />
          <Route path="/About" component={About} />
          <Route path="/Pricing" component={Pricing} />
        </Switch>
      </Router>

    </>
        );
}

export default App;

