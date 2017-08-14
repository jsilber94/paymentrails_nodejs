var Client = require('./Client');
var Configuration = require('./Configuration');

module.exports = {
    get: function (recipientId, recipientAccountId, callback) {
        get(recipientId, recipientAccountId, callback);
    },
    post: function (recipientId, body, callback) {
        post(recipientId, body, callback);
    },
    patch: function (recipientId, body, recipientAccountId, callback) {
        patch(recipientId, body, recipientAccountId, callback);
    },
    remove: function (recipientId, recipientAccountId, callback) {
        remove(recipientId, recipientAccountId, callback);
    }
};

/**
 * Retrieves the payout method based on the recipient id
 * @param {String} recipientId
 * @param {String} recipientAccountId
 * @param {function} callback
 */
function get(recipientId, recipientAccountId, callback) {

    var endPoint = '/v1/recipients/' + recipientId + '/accounts/' + recipientAccountId;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    Client.get(endPoint, callback);
}
/**
 * Creates a payout method based on the body and recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {function} callback
 */
function post(recipientId, body, callback) {
    var endPoint = '/v1/recipients/' + recipientId + '/accounts';
    Configuration.prototype.setMethod('POST');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.post(endPoint, body, callback);
}

/**
 * Updates a payout method based on the body and the recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {String} recipientAccountId
 * @param {function} callback
 */
function patch(recipientId, recipientAccountId, body, callback) {
    var endPoint = '/v1/recipients/' + recipientId + '/accounts/' + recipientAccountId;
    Configuration.prototype.setMethod('PATCH');
    Configuration.prototype.setBody(body);
    Configuration.prototype.setEndPoint(endPoint);
    Client.patch(endPoint, body, callback);
}

/**
 * Delete a payout method based on the recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {String} recipientAccountId
 * @param {function} callback
 */
function remove(recipientId, recipientAccountId, callback) {
    var endPoint = '/v1/recipients/' + recipientId + '/accounts/' + recipientAccountId;
    Configuration.prototype.setMethod('DELETE');
    Configuration.prototype.setEndPoint(endPoint);
    Client.remove(endPoint, body, callback);
}
