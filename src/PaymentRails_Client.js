var http = require('http');
var Configuration = require('./Configuration');


module.exports = {
    get: function (endPoint, callback) {
        get(endPoint, callback);
    },
    post: function (endPoint, body, callback) {
        post(endPoint, body, callback);
    },
    patch: function (endPoint, body, callback) {
        patch(endPoint, body, callback);
    },
    remove: function (endPoint, callback) {
        remove(endPoint, callback);
    }
};


/**
 * Makes an HTTP GET request to the API
 * @param {String} endPoint
 * @param {function} callback
 */
function get(endPoint, callback) {

    var options = {
        host: Configuration.prototype.getApiBase(),
        path: endPoint,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': Configuration.prototype.getApiKey()
        }
    };

    var req = http.get(options, function (res) {
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        });
        var body;

        res.on('end', function () {
            body = Buffer.concat(bodyChunks);
            callback(res.error, body + '', res);
        });
    });


    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
        throw new Exception('Error');
    });

}

/**
 * Makes an HTTP POST request to the API
 * @param {String} endPoint
 * @param {array} body
 * @param {function} callback
 * @returns {The response}
 */
function post(endPoint, body, callback) {
    var request = require('request');

    var options = {
        uri: 'http://' + Configuration.prototype.getApiBase() + endPoint,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': Configuration.prototype.getApiKey()
        },
        json: body
    };

    request(options, function (error, response, body) {
        callback(error, JSON.stringify(body), response)
    });
}

/**
 * Makes an HTTP PATCH request to the API
 * @param {String} endPoint
 * @param {array} body
 * @param {function} callback
 * @returns {The response}
 */
function patch(endPoint, body, callback) {
    var request = require('request');


    var options = {
        uri: 'http://' + Configuration.prototype.getApiBase() + endPoint,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': Configuration.prototype.getApiKey()
        },
        json: body
    };

    request(options, function (error, response, body) {
        callback(error, JSON.stringify(body), response);
    });

}

/**
 * Makes an HTTP DELETE request to the API
 * @param {String} endPoint
 * @param {function} callback
 * @returns {The response}
 */
function remove(endPoint, callback) {
    var options = {
        host: Configuration.prototype.getApiBase(),
        path: endPoint,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': Configuration.prototype.getApiKey()
        }
    };

    var req = http.get(options, function (res) {
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        });
        var body;

        res.on('end', function () {
            body = Buffer.concat(bodyChunks);
            callback(res.error, body + '', res);
        });


    });


    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });

}