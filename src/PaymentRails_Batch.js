var PaymentRails_Client = require('./PaymentRails_Client');
var Configuration = require('./Configuration');


module.exports = {
    get: function (batchId, callback) {
        get(batchId, callback);
    },
    post: function (callback, body, batchId = '') {
        post(callback, body, batchId);
    },
    generateQuote: function (callback, batchId) {
        var endPoint = batchId + '/generate-quote';
        post(callback, "", endPoint);
    },
    processBatch: function (callback, batchId) {
        var endPoint = batchId + '/start-processing';
        post(callback, '', endPoint);
    },
    patch: function (batchId, body, callback) {
        patch(batchId, body, callback);
    },
    remove: function (batchId, callback) {
        remove(batchId, callback);
    },
    query: function (callback, page = 1, pageSize = 10, search = '') {
        query(callback, page, pageSize, search);
    }
};

/**
 * Retrieves a batch based on the batch id
 * @param {String} batchId
 * @param {function} callback
 */
function get(batchId, callback) {
    var endPoint = '/v1/batches/' + batchId;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.get(endPoint, callback);
}

/**
 * Creates a batch or 
 * generates quote based on batch id or
 * process batch based on batch id
 * @param {String} batchId 
 * @param {array} body
 * @param {function} callback
 */
function post(callback, body, batchId) {
    var endPoint = '/v1/batches/' + batchId;
    console.log(endPoint)
    Configuration.prototype.setMethod('POST');
    if (body !== "") { Configuration.prototype.setBody(body) };
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.post(endPoint, body, callback);
}

/**
 * @deprecated May 31, 2017
 * Updates a batch based on the batch id
 * @param {String} batchId
 * @param {array} body
 * @param {function} callback
 */
function patch(batchId, body, callback) {
    var endPoint = '/v1/batches/' + batchId;
    Configuration.prototype.setMethod('PATCH');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.patch(endPoint, body, callback);
}

/**
 * Delete a batch based on the batch id
 * @param {String} batchId
 * @param {function} callback
 */
function remove(batchId, callback) {
    var endPoint = '/v1/batches/' + batchId;
    Configuration.prototype.setMethod('DELETE');
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.remove(endPoint, callback);
}

/**
 * List all batches based on the batch id and
 *  (optional) a given wildcard, page amount and page size
 * @param {int} page
 * @param {int} pageSize
 * @param {String} search
 * @param {function} callback
 */
function query(callback, page, pageSize, search) {
    var endPoint = '/v1/batches/?' + '&search=' + search + '&page=' + page + '&pageSize=' + pageSize;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.get(endPoint, callback);
}


