import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { Modal, Button } from "react-bootstrap";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      isOpen: false
    };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.recordMouse = this.recordMouse.bind(this);
    this.makeBase = this.makeBase.bind(this);
    this.canvasRef = React.createRef();
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    $('.box-fileupload').hide();
  }

  canvas () {
    return document.querySelector("#imageCanvas");
  }
  ctx () {
    return this.canvas().getContext("2d");
  }
  componentDidMount() {
    const canvas = this.canvas()
    const ctx = this.ctx()
    if(this.props.fullscreen === true){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = Number(this.state.minWidth) + 1;
  }

  recordMouse(event) {
    const canvas = this.canvas()
    const ctx = this.ctx()
    ctx.beginPath();
    ctx.fillRect(event.nativeEvent.offsetX,event.nativeEvent.offsetY,3,3);
    ctx.stroke();
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }

  openModal(event) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }

  closeModal(event) {
    this.setState({ isOpen: false });
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
                  <p class="box-fileupload__lable">Upload a certificate template</p>
              </div>
              {this.state.file && (
                <span className="image-preview__delete-btn" onClick={this.resetFile}></span>
              )}
              <img className="image-preview" src={this.state.file} onClick={this.openModal && this.makeBase} />
              <Modal show={this.state.isOpen} onHide={this.closeModal}>
                  <canvas id="imageCanvas" width="200" height="100" onMouseMove={this.recordMouse} >
                  </canvas>
              </Modal>
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
