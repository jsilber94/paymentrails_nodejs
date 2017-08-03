var Client = require('./Client');
var Configuration = require('./Configuration');

module.exports = {
    get: function (recipientId, callback, term = '') {
        get(recipientId, callback, term);
    },
    post: function (body, callback) {
        post(body, callback);
    },
    patch: function (recipientId, body, callback) {
        patch(recipientId, body, callback);
    },
    remove: function (recipientId, callback) {
        remove(recipientId, callback);
    },
    query: function (callback, page = 1, pageSize = 10, search = '') {
        query(page, pageSize, search, callback);
    }
};

/**
 * Retrieves a recipient based on the recipient id given or
 * retrieves a list of payments or logs depending on the term
 * @param {String} recipientId
 * @param {function} callback
 * @param {String} term
 */
function get(recipientId, callback, term) {
    var endPoint = '/v1/recipients/' + recipientId + '/' + term;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    Client.get(endPoint, callback);
}
/**
 * Creates a recipient based on the body given to the client
 * @param {array} body
 * @param {function} callback
 */
function post(body, callback) {
    var endPoint = '/v1/recipients/';
    Configuration.prototype.setMethod('POST');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.post(endPoint, body, callback);
}
/**
 * Updates a recipient based on the body given to the client
 * and the recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {function} callback
 */
function patch(recipientId, body, callback) {
    var endPoint = '/v1/recipients/' + recipientId;
    Configuration.prototype.setMethod('PATCH');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.patch(endPoint, body, callback);
}
/**
 * Delete a recipient based on the recipient id
 * @param {String} recipientId
 * @param {function} callback
 */
function remove(recipientId, callback) {
    var endPoint = '/v1/recipients/' + recipientId;
    Configuration.prototype.setMethod('DELETE');
    Configuration.prototype.setEndPoint(endPoint);
    Client.remove(endPoint, callback);
}
/**
 * List all recipients based on the recipient id and
 *  (optional) a given wildcard, page amount and page size
 * @param {int} page
 * @param {int} pageSize
 * @param {String} search
 * @param {function} callback
 */
function query(page, pageSize, search, callback) {
    var endPoint = '/v1/recipients/?' + '&search=' + search + '&page=' + page + '&pageSize=' + pageSize;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    Client.get(endPoint, callback);


}



