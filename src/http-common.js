import axios from 'axios';

// 5000 is the default flask port
export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "multipart/formdata"
  }
});
