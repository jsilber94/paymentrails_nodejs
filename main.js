var PaymentRails_Recipient = require('./src/PaymentRails_Recipient');
var PaymentRails_PayoutMethods = require('./src/PaymentRails_PayoutMethods');
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



Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');

recipient(callback);

//payoutMethods(callback);
//batch(callback);
//payment(callback);
//balances(callback);



function recipient(callback) {

    PaymentRails_Recipient.get('R-91XPJZTR612MG', callback);


    var body = {
        type: 'individual',
        referenceId: 'U678912345',
        email: 'Fred@llinstones.com',
        name: 'Fred Flinstones',
        lastName: 'Flinstones',
        firstName: 'Fred'
    };
//PaymentRails_Recipient.post(body,callback);

    var body = {
        firstName: 'George',
        lastName: 'Jetson'
    };
//PaymentRails_Recipient.patch('R-91XPM8233T710', body, callback);

//PaymentRails_Recipient.remove('R-91XPM8233T710',callback);

//PaymentRails_Recipient.query(callback);

//PaymentRails_Recipient.get('R-91XPM8233T710',callback, 'logs');

//PaymentRails_Recipient.get('R-91XPM8233T710',callback, 'payments');
}

function payoutMethods(callback) {

    PaymentRails_PayoutMethods.get('R-912PW016D02P8', callback);
    var body = {
        "primary": {
            "method": "bank",
            "currency": "CAD"
        },
        "accounts": {
            "bank": {
                "country": "CA",
                "accountNum": "6022847",
                "institution": "123",
                "branchNum": "47261",
                "currency": "CAD",
                "name": "TD"
            }
        }
    };
    //   PaymentRails_PayoutMethods.post('R-91XPM78NF8QN6', body, callback);

    var body = {
        "primary": {
            "method": "paypal",
            "currency": "CAD"
        },
        "accounts": {
            "paypal": {
                "address": "testpaypal@example.com"
            }
        }
    };
    //  PaymentRails_PayoutMethods.patch('R-91XPM78NF8QN6', body, callback);

}

function batch(callback) {
    PaymentRails_Batch.get('B-912PWJGD8RZ7J', callback);
    var body = {
        "payments": [{
                "recipient": {
                    "id": "R-91XPJZTR612MG"
                },
                "sourceAmount": "65"
            }],
        "sourceCurrency": "USD"
    };
    // PaymentRails_Batch.post(callback, body);

    // PaymentRails_Batch.generateQuote(callback, 'B-91XPMBTV29B76');

    // PaymentRails_Batch.processBatch(callback, 'B-91XPMBTV29B76');







    var body = {
        "update_payments": [{
                "id": "P-91XPMB3BC9PQY",
                "sourceAmount": 999
            }]
    };
    // PaymentRails_Batch.patch('B-912PWJGD8RZ7J', body, callback);

    // PaymentRails_Batch.remove('B-91XPJKJ0F05KA', callback);

    //  PaymentRails_Batch.query(callback);
}

function payment(callback) {

    PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
    // PaymentRails_Payment.get('P-91XPJV99EWX48', callback);

    var body = {
        "recipient": {
            "id": "R-91XPET3C8WBJJ"
        },
        "sourceAmount": "100.10",
        "memo": "Freelance payment"
    };
    //   PaymentRails_Payment.post('B-912PWJGD8RZ7J', body, callback);

    var body = {"sourceAmount": "900.90"};
    //PaymentRails_Payment.patch('P-91XPMB3BC9PQY', body, callback);

    //   PaymentRails_Payment.setBatchId('B-91XPJKVGAD87R');
    //   PaymentRails_Payment.remove('P-912PWFRD2R06J', callback);

    PaymentRails_Payment.query(callback);
}

function balances(callback) {

    PaymentRails_Balances.get(callback, 'paypal');
    PaymentRails_Balances.get(callback, 'paymentrails');
    PaymentRails_Balances.get(callback);
}