import http from "../http-common";

class CertDataService {
  create(data) {
    return http.post("/create", data);
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new CertDataService();
