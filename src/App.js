import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-md navbar-dark my-bg-primary">
        <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mx-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link text-white" href="#">Home</a> </li>
              <li className="nav-item"> <a className="nav-link text-white" href="#">Instructions</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
