import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="order-2 order-md-1 col-md-6 px-5 pt-5">
              <h3 className="bold text-center">Enter a name</h3>
              <form className="form pt-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="name"/>
                </div>
              </form>
              <div className="divider div-transparent div-dot"></div>
              <div className="d-flex justify-content-center">
                <div class="upload-btn-wrapper">
                  <button className="btn">Upload a CSV file</button>
                  <input type="file" name="myfile" />
                </div>
              </div>
              <h5 className="text-center my-5"> Don't know how to generate form? <a className="link-instructions" href="#">See our instruction</a></h5>
            </div>
            <div className="h-75 order-2 order-md-1 col-md-6">
              <div className="box-fileupload">
                <input type="file" id="fileId" className="file-upload-input" name="files" multiple=""/>
                <label for="fileId" className="file-upload-btn"></label>
                <p className="box-fileupload__lable">Upload a certificate template</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn" type="button">Generate</button>
          </div>
        </div>
      </div>
    );
  }
}
