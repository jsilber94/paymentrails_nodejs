var apiKey;
var apiSecret;
var method;
var endPoint;
var body = '';
var apiBase = 'api.paymentrails.com';
var crypto = require('crypto');

function Configuration() {
}

Configuration.prototype.getApiKey = function () {
    return apiKey;
};

Configuration.prototype.setApiKey = function (newApiKey) {
    apiKey = newApiKey;
};

Configuration.prototype.getApiSecret = function () {
    return apiSecret;
};

Configuration.prototype.setApiSecret = function (newApiSecret) {
    apiSecret = newApiSecret;
};

Configuration.prototype.getApiBase = function () {
    return apiBase;
};

Configuration.prototype.setApiBase = function (newApiBase) {
    apiBase = newApiBase;
};

Configuration.prototype.getEndPoint = function () {
    return endPoint;
};

Configuration.prototype.setEndPoint = function (newEndPoint) {
    endPoint = newEndPoint;
};

Configuration.prototype.getMethod = function () {
    return method;
};

Configuration.prototype.setMethod = function (newMethod) {
    method = newMethod;
};

Configuration.prototype.getBody = function () {
    return body;
};

Configuration.prototype.setBody = function (newBody) {
    body = JSON.stringify(newBody);
};

Configuration.prototype.generateAuthorization = function (timestamp) {
    var message = timestamp + '\n' + method + '\n' + endPoint + '\n' + body + '\n';
    try {
        hmac = crypto.createHmac('sha256', apiSecret);
        hmac.update(message);
        signature = hmac.digest('hex');
        body = ''; //reset body ater each request since optional
        return 'prsign ' + apiKey + ':' + signature;
    } catch (TypeError) {
        return 'prsign 1:1'; //return invalid code incase of error
    }
}

module.exports = Configuration;
