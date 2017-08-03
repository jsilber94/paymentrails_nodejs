var Client = require('./Client');
var Configuration = require('./Configuration');
var batchId;

module.exports = {
    get: function (paymentId, callback) {
        get(paymentId, callback);
    },
    post: function (batchId, body, callback) {
        post(batchId, body, callback);
    },
    patch: function (paymentId, body, callback) {
        patch(paymentId, body, callback);
    },
    remove: function (paymentId, callback) {
        remove(paymentId, callback);
    },
    query: function (callback, page = 1, pageSize = 10, search = '') {
        query(callback, page, pageSize, search);
    },
    setBatchId: function (newBatchId) {
        batchId = newBatchId;
    }
};

/**
 * Retrieves a payment based on the payment id and or
 * the batch id
 * @param {String} paymentId
 * @param {function} callback
 */
function get(paymentId, callback) {
    var endPoint = '/v1/payments/' + paymentId;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    Client.get(endPoint, callback);
}

/**
 * Creates a payment based on the batch id
 * @param {String} batchId 
 * @param {array} body
 * @param {function} callback
 */
function post(batchId, body, callback) {
    var endPoint = '/v1/batches/' + batchId + '/payments';
    Configuration.prototype.setMethod('POST');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.post(endPoint, body, callback);
}
/**
 * Updates a payment based on the payment id
 * @param {String} paymentId
 * @param {array} body
 * @param {function} callback
 */
function patch(paymentId, body, callback) {
    var endPoint = '/v1/batches/' + batchId + '/payments/' + paymentId;
    Configuration.prototype.setMethod('PATCH');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.patch(endPoint, body, callback);
}
/**
 * Delete a payment based on the paymentId id
 * @param {String} paymentId
 * @param {function} callback
 */
function remove(paymentId, callback) {
    var endPoint = '/v1/batches/' + batchId + '/payments/' + paymentId;
    Configuration.prototype.setMethod('DELETE');
    Configuration.prototype.setEndPoint(endPoint);
    Client.remove(endPoint, callback);
}

/**
 * List all payments based on the batch id and
 *  (optional) a given wildcard, page amount and page size
 * @param {int} page
 * @param {int} pageSize
 * @param {String} search
 * @param {function} callback
 */
function query(callback, page, pageSize, search) {
    var endPoint = '/v1/batches/' + batchId + '/payments/?' + '&search=' + search + '&page=' + page + '&pageSize=' + pageSize;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    Client.get(endPoint, callback);


}


