import http from "../http-common";

class CertDataService {
  create(data) {
    return http.post("/create", data);
  }
}

export default new CertDataService();