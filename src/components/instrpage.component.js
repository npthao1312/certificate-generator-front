import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InstrPage extends Component {
  render() {
    return (
  <div className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12"><img className="img-fluid d-block center-block mx-auto" src="https://media.gettyimages.com/videos/modern-question-mark-line-icon-animation-on-white-background-video-id1213673269?s=640x640"/></div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Introduction</h1>
          <p> After two classes, we found that we always had to put names of students into certificate templates respectively manually. That's why we come up with a solution to automate this process to reduce the time taken. </p>
          <h1> Instructions </h1>
          <ol className="">
            <li>Upload a certificate template and an excel file including names.</li>
            <li>Position text for name on the certificate image template.</li>
            <li>Click generate to have a list of certificates with respective names.</li>
            <li>Download</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
