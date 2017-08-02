var PaymentRails_Recipient = require('./src/PaymentRails_Recipient');
var PaymentRails_RecipientAccounts = require('./src/PaymentRails_RecipientAccounts');
var PaymentRails_Balances = require('./src/PaymentRails_Balances');
var PaymentRails_Payment = require('./src/PaymentRails_Payment');
var PaymentRails_Batch = require('./src/PaymentRails_Batch');
var Configuration = require('./src/Configuration');

var callback = function (error, data, response) {

    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};


// recipient(callback);
// payoutMethods(callback);
// balances(callback);
// batch(callback);
// payment(callback);


function recipient(callback) {
    Configuration.prototype.setApiKey('ALJVaAj4EB4B2QQBENYZDNYW');
    Configuration.prototype.setApiSecret('9x40t32d6acuy1jwvkwf02n5rakczk79thbq3tnr');
    PaymentRails_Recipient.get('R-GbGnYCbmsSm6xHnYVyGW7J', callback);

    var body = {
        type: 'individual',
        referenceId: 'U6734f8912345',
        email: 'philipsace@example.com',
        name: 'Fred Flinstones',
        lastName: 'Flinstones',
        firstName: 'Fred'
    };
    // PaymentRails_Recipient.post(body, callback);

    // var body = {
    //     firstName: 'George',
    //     lastName: 'Jetson'
    // };

    // PaymentRails_Recipient.patch('R-TwquaXsEknUtEtkkyigKLg', body, callback);

    // PaymentRails_Recipient.remove('R-GbGnYCbmsSm6xHnYVyGW7J', callback);

    // PaymentRails_Recipient.query(callback);

    // PaymentRails_Recipient.get('R-GbGnYCbmsSm6xHnYVyGW7J', callback, 'logs');

    // PaymentRails_Recipient.get('R-GbGnYCbmsSm6xHnYVyGW7J', callback, 'payments');
}
function payoutMethods(callback) {

    Configuration.prototype.setApiKey('ALJVaAj4EB4B2QQBENYZDNYW');
    Configuration.prototype.setApiSecret('9x40t32d6acuy1jwvkwf02n5rakczk79thbq3tnr');
    PaymentRails_RecipientAccounts.get('R-PuzPJLVYQXBbPSMQKwmJ5G', 'A-KKHb8MpFvju6vDMBLPmtej', callback);
    var body = {
        "type": "bank-transfer",
        "primary": "true",
        "country": "CA",
        "currency": "CAD",
        "accountNum": "6022847",
        "bankId": "004",
        "branchId": "47261",
        "accountHolderName": "John Smith"
    }
    PaymentRails_RecipientAccounts.post('R-PuzPJLVYQXBbPSMQKwmJ5G', body, callback);

    var body = {
        "primary": "false",
    }
    PaymentRails_RecipientAccounts.patch('R-PuzPJLVYQXBbPSMQKwmJ5G', 'A-KKHb8MpFvju6vDMBLPmtej', body, callback);

}
function balances(callback) {
    Configuration.prototype.setApiKey('ALJVaAj4EB4B2QQBENYZDNYW');
    Configuration.prototype.setApiSecret('9x40t32d6acuy1jwvkwf02n5rakczk79thbq3tnr');

    PaymentRails_Balances.get(callback, 'paypal');
    PaymentRails_Balances.get(callback, 'paymentrails');
    PaymentRails_Balances.get(callback);
}
function batch(callback) {
    Configuration.prototype.setApiKey('ALJVaAj4EB4B2QQBENYZDNYW');
    Configuration.prototype.setApiSecret('9x40t32d6acuy1jwvkwf02n5rakczk79thbq3tnr');
    PaymentRails_Batch.get('B-3c8QoJMWZFJktmkutqMUBM', callback);

    var body = {
        "payments": [{
            "recipient": {
                "id": "R-PuzPJLVYQXBbPSMQKwmJ5G"
            },
            "sourceAmount": "65",
            "sourceCurrency": "CAD"
        }]
    };
    PaymentRails_Batch.post(callback, body);

    PaymentRails_Batch.generateQuote(callback, 'B-3c8QoJMWZFJktmkutqMUBM');

    PaymentRails_Batch.processBatch(callback, 'B-3c8QoJMWZFJktmkutqMUBM');

    var body = {
        "update_payments": [{
            "id": "P-L51umK3ieSpBty3uCsFtzK",
            "sourceAmount": 999
        }]
    };
    PaymentRails_Batch.patch('B-3c8QoJMWZFJktmkutqMUBM', body, callback);

    PaymentRails_Batch.remove('B-3c8QoJMWZFJktmkutqMUBM', callback);

    PaymentRails_Batch.query(callback);
}
function payment(callback) {

    Configuration.prototype.setApiKey('ALJVaAj4EB4B2QQBENYZDNYW');
    Configuration.prototype.setApiSecret('9x40t32d6acuy1jwvkwf02n5rakczk79thbq3tnr');
    PaymentRails_Payment.setBatchId('B-LfoeSofUYdPpZBULbezULe');
    PaymentRails_Payment.get('P-RNNZME2kkuAKqiiz6iTFrX', callback);

    var body = {
        "recipient": {
            "id": "R-PuzPJLVYQXBbPSMQKwmJ5G"
        },
        "sourceAmount": "100.10",
        "sourceCurrency": "CAD",
        "memo": "Freelance payment"
    };
    PaymentRails_Payment.post('B-LfoeSofUYdPpZBULbezULe', body, callback);

    var body = { "sourceAmount": "900.90" };
    PaymentRails_Payment.patch('P-RNNZME2kkuAKqiiz6iTFrX', body, callback);

    PaymentRails_Payment.setBatchId('B-LfoeSofUYdPpZBULbezULe');
    PaymentRails_Payment.remove('P-RNNZME2kkuAKqiiz6iTFrX', callback);

    PaymentRails_Payment.query(callback);
}