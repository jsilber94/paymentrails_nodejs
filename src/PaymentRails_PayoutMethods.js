var PaymentRails_Client = require('./PaymentRails_Client');

module.exports = {
    get: function (recipientId, callback) {
        get(recipientId, callback);
    },
    post: function (recipientId, body, callback) {
        post(recipientId, body, callback);
    },
    patch: function (recipientId, body, callback) {
        patch(recipientId, body, callback);
    }
};

/**
 * Retrieves the payout method based on the recipient id  
 * @param {String} recipientId
 * @param {function} callback
 */
function get(recipientId, callback) {

    var endPoint = '/v1/recipients/' + recipientId + '/payout-methods';
    PaymentRails_Client.get(endPoint, callback);
}
/**
 * Creates a payout method based on the body and recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {function} callback
 */
function post(recipientId, body, callback) {
    var endPoint = '/v1/recipients/' + recipientId + '/payout-methods';
    PaymentRails_Client.post(endPoint, body, callback);
}
/**
 * Updates a payout method based on the body and the recipient id
 * @param {String} recipientId
 * @param {array} body
 * @param {function} callback
 */
function patch(recipientId, body, callback) {
    var endPoint = '/v1/recipients/' + recipientId + '/payout-methods';
    PaymentRails_Client.patch(endPoint, body, callback);
}




