import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { Modal, Button } from "react-bootstrap";
import CertDataService from "../services/cert.service";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      isOpen: false,
      inputValue: '',
      x: null,
      y: null
    };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.drawOverlayImage = this.drawOverlayImage.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    $('.box-fileupload').hide();
  }

  canvas () {
    return document.querySelector('#imageCanvas');
  }

  ctx () {
    return this.canvas().getContext("2d");
  }

  handleImage(event) {
    const canvas = this.canvas()
    const ctx = this.ctx()
    var text_title = this.state.inputValue;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image();
    img.src = this.state.file;
    canvas.width = img.width;
    canvas.height = img.height;

    this.drawOverlayImage(img);
    ctx.fillStyle = "#000000";
    ctx.font = "50px 'Montserrat'";;
    let rect = canvas.getBoundingClientRect();
    console.log(rect);
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    ctx.fillText(text_title, x, y);
    this.setState({ x: x, y: y });
    console.log(text_title);
  }

  drawOverlayImage(img){
    const canvas = this.canvas()
    const ctx = this.ctx()
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = 'rgba(0, 0, 200, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

  saveCert() {
    var data = {
      path: this.state.file,
      name: this.state.inputValue,
      x: this.state.x,
      y: this.state.y
    };

    CertDataService.create(data)
      .then(response => {
        this.setState({
          path: response.data.file,
          name: response.data.inputValue,
          x: response.data.x,
          y: response.data.y
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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
                  <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} id="name" type="text" className="form-control" placeholder="name"/>
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
              <img className="image-preview" src={this.state.file} onClick={this.openModal} />
              <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <canvas id="imageCanvas" onClick={this.handleImage} >
              </canvas>
              </Modal>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn" type="button" onClick={this.saveCert}>Generate</button>
          </div>
        </div>
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}

export default HomePage;
