class TestResponse {
  constructor() {
    this.statusCode = 0;
    this.data = null;
    this.headers = {};
  }

  status(code) {
    this.statusCode = code;
    return this;
  }

  send(data) {
    this.data = data;
    return this;
  }

  setHeader(key, value) {
    this.headers[key] = value;
  }
}

module.exports = TestResponse;
