import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import HomePage from './components/hompage.component';
import InstrPage from './components/instrpage.component';

class App extends Component {
  render(){
      return (
        <div className="App">
          <nav className="navbar navbar-expand-md navbar-dark my-bg-primary">
            <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mx-auto"></ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link to={"/"} className="nav-link text-white">
                  Home
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-white" to={"/instruction"}>
                  Instructions
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container-fluid">
            <Switch>
              <Route exact path={["/"]} component={HomePage} />
              <Route exact path={["/instruction"]} component={InstrPage} />
            </Switch>
          </div>
        </div>
      );
    }
  }
export default App;
