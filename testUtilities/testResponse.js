module.exports = class TestResponse {
    statusCode = 0;
    data = {};
    headers = {}
    

    status(code) {
        this.statusCode = code;
        return this;
    };

    json(data) {
        this.data = data;
    };

    send(data) {
        this.data = data;
    };

    setHeader(name, value) {
        this.headers[name] = value;
    }
};