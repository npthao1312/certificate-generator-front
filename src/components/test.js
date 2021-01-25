import React, { useRef, useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import Downloader from './Downloader/Downloader';

function App() {
  const formRef = useRef(null);
  const [selectedCSVFile, setSelectedCSVFile] = useState(null);
  const [selectedTemplateFile, setSelectedTemplateFile] = useState(null);
  const [name, setName] = useState("");
  const [openDownload, setOpenDownload] = useState(false);
  const [formDta, setFormDta] = useState(null);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleCSVChange(evt) {
    setSelectedCSVFile(evt.target.files[0]);
  }

  function handleTemplateChange(evt) {
    setSelectedTemplateFile(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("csv", selectedCSVFile);
    formData.append("template", selectedTemplateFile);
    formData.append("text", name);
    formData.append("x-coordinate", 1);
    formData.append("y-coordinate", 3);

    const response = await axios.post(
      "http://c6a493336a13.ngrok.io/create",
      formData,
      {
        responseType: "blob",
      }
    );
    FileDownload(response.data, "test.zip");
    // setOpenDownload(true);
    // setFormDta(formData);
  }

  function handleTurnOff() {
    setOpenDownload(false);
    formRef.current.reset();
    setSelectedCSVFile(null);
    setSelectedTemplateFile(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="text">Name{": "}</label>
        <input id="text" name="text" type="text" onChange={handleNameChange} />

        <label htmlFor="csv">CSV{": "}</label>
        <input id="csv" name="csv" type="file" onChange={handleCSVChange} />

        <label htmlFor="cert-template">Template{": "}</label>
        <input
          id="cert-template"
          name="template"
          type="file"
          onChange={handleTemplateChange}
        />

        <button>Generate</button>
      </form>
      {openDownload && <Downloader data={formDta} turnOff={handleTurnOff} />}
    </div>
  );
}

export default App;
