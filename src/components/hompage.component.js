import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    $('.box-fileupload').hide();
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }

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
              <h5 className="text-center my-5"> Don't know how to generate form?
              <Link className="link-instructions" to={"/instruction"}>See our instruction</Link>
              </h5>
            </div>
            <div className="h-75 order-2 order-md-1 col-md-6">
              <div class="box-fileupload">
                  <input onChange={this.onChange} type="file" id="fileId" class="file-upload-input" name="files" multiple/>
                  <label for="fileId" class="file-upload-btn"></label>
                  <p class="box-fileupload__lable">Drop files here to upload</p>
              </div>
              {this.state.file && (
                <div style={{ textAlign: "center" }}>
                  <button className="btn" onClick={this.resetFile}>Remove File</button>
                </div>
              )}
              <img style={{ width: "100%" }} src={this.state.file} />
              <div class="error-wrapper"></div>
              <div class="image-preview"></div>
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
