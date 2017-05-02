'use strict';
//npm test to run in root folder

var Configuration = require('../src/Configuration');
var PaymentRails_Payment = require('../src/PaymentRails_Payment');

var assert = require('assert');

describe('Retrieve Payment', function () {
    it('ok field should be true', function () {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        PaymentRails_Payment.get('P-91XPJV99EWX48', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');

        });
    });
});

describe('Retrieve Payment Invalid API Key', function () {
    it('ok field should be false', function () {
        Configuration.prototype.setApiKey('dfg');
        PaymentRails_Payment.get('P-91XPJV99EWX48', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');

        });
    });
});


describe('Retrieve Payment Invalid Payment Id (TIMES OUT)', function () {
    it('ok field should be false', function () {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.get('P-dwefr', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            
        });
    });
});

describe.skip('Create Payment, Skip in order to not continuously create payments', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "recipient": {
                "id": "R-91XPET3C8WBJJ"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
        PaymentRails_Payment.post('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Create Payment Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wddw');
        var body = {
            "recipient": {
                "id": "R-91XPET3C8WBJJ"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
        PaymentRails_Payment.post('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create Payment Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "recipient": {
                "id": "R-effe"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
        PaymentRails_Payment.post('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create Payment Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "recipient": {
                "id": "R-91XPET3C8WBJJ"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
        PaymentRails_Payment.post('B-wdefrg', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create Payment invalid field name', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "reciwdpient": {
                "id": "R-91XPET3C8WBJJ"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
        PaymentRails_Payment.post('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Payment', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = {"sourceAmount": "900.90"};
        PaymentRails_Payment.patch('P-91XPMB3BC9PQY', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Update Payment Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wdefrg');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = {"sourceAmount": "900.90"};
        PaymentRails_Payment.patch('P-91XPMB3BC9PQY', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Payment Invalid Payment Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = {"sourceAmount": "900.90"};
        PaymentRails_Payment.patch('P-wdfe', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Payment Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-dfe');
        var body = {"sourceAmount": "900.90"};
        PaymentRails_Payment.patch('P-91XPMB3BC9PQY', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Payment Invalid source amount', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = {"sourceAmount": "900.9"};
        PaymentRails_Payment.patch('P-91XPMB3BC9PQY', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Payment Invalid source amount', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-91XPJPHF4T3P8');
        var body = {"sourceAmount": "900.90"};
        PaymentRails_Payment.patch('P-91XPJPHF5CK3Y', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe.skip('Delete Payment, skips as not to continuously delete the same payment', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');

        PaymentRails_Payment.remove('P-91XPP1TJE8R7U', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Delete Payment Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wdef');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');

        PaymentRails_Payment.remove('P-91XPP1TJE8R7U', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Delete Payment Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-erg');

        PaymentRails_Payment.remove('P-91XPP1TJE8R7U', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Delete Payment Invalid Payment Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');

        PaymentRails_Payment.remove('P-rgt', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('List all Payments', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        PaymentRails_Payment.query(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('List all Payments with queries', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        PaymentRails_Payment.query(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 1, 10);
    });
});

describe('List all Payments Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('dadw');
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        PaymentRails_Payment.query(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('List all Payments Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Payment.setBatchId('B-dwwqd');
        PaymentRails_Payment.query(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

