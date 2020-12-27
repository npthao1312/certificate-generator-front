import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InstrPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            1. Upload a certificate template and an excel file including names.<br/>
            2. Click generate to have a list of certificates with respective names
          </div>
        </div>
      </div>
    );
  }
}
