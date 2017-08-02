var PaymentRails_Client = require('./PaymentRails_Client');
var Configuration = require('./Configuration');

module.exports = {
    get: function (callback, term) {
        get(callback, term);
    }
};

/**
 * Retrieves the balance based on the api key  
 * @param {function} callback
 * @param {String} term
 */
function get(callback, term = '') {
    var endPoint = '/v1/profile/balances/' + term;
    Configuration.prototype.setMethod('GET');
    Configuration.prototype.setEndPoint(endPoint);
    PaymentRails_Client.get(endPoint, callback);
}