'use strict';
//npm test to run in root folder

var Configuration = require('../src/Configuration');
var PaymentRails_Batch = require('../src/PaymentRails_Batch');

var assert = require('assert');

describe('Retrieve Batch', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Batch.get("B-912PWJGD8RZ7J", function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Retrieve Batch Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('adads');
        PaymentRails_Batch.get("B-912PWJGD8RZ7J", function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});


describe('Retrieve Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Batch.get("B-er", function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Batch', function () {
    it('ok field should be true yes', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "update_payments": [{
                    "id": "P-91XPMB3BC9PQY",
                    "sourceAmount": 99
                }]
        };
        PaymentRails_Batch.patch('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Update Batch Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('dwef');
        var body = {
            "update_payments": [{
                    "id": "P-91XPMB3BC9PQY",
                    "sourceAmount": 99
                }]
        };
        PaymentRails_Batch.patch('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "update_payments": [{
                    "id": "P-91XPMB3BC9PQY",
                    "sourceAmount": 99
                }]
        };
        PaymentRails_Batch.patch('B-ef', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update Batch Invalid Payment Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "update_payments": [{
                    "id": "P-efrg",
                    "sourceAmount": 99
                }]
        };
        PaymentRails_Batch.patch('B-912PWJGD8RZ7J', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe.skip('Delete Batch', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');

        PaymentRails_Batch.remove('B-91XPJQ9AF904P', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Delete Batch Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('efrgt');

        PaymentRails_Batch.remove('B-91XPJQ9AF904P', function (error, data, response) {

            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Delete Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Batch.remove('B-wdef', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});


describe('List Batches', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Batch.query(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('List Batch with queries ', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Batch.query(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 1, 10);
    });
});

describe('List Batches Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('swde');
        PaymentRails_Batch.query(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe.skip('Create Batch', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "payments": [{
                    "recipient": {
                        "id": "R-91XPJZTR612MG"
                    },
                    "sourceAmount": "66"
                }],
            "sourceCurrency": "USD"
        };
        PaymentRails_Batch.post(function (error, data, response) {

            var batch_Id = data.substring(26, 41);
            // assert.equal(data.substring(6, 10), 'true');

            PaymentRails_Batch.generateQuote(function (error, data, response) {

                // assert.equal(data.substring(9, 13), 'true');
                // done();

            }, batch_Id);

            PaymentRails_Batch.processBatch(function (error, data, response) {
                assert.equal(data.substring(9, 13), 'true');
                done();
            }, batch_Id);

        }, body);
    });
});


describe('Create Batch, Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('sfdsdffd');
        var body = {
            "payments": [{
                    "recipient": {
                        "id": "R-91XPJZTR612MG"
                    },
                    "sourceAmount": "66"
                }],
            "sourceCurrency": "USD"
        };
        PaymentRails_Batch.post(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, body);
    });
});

describe('Create Batch, Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            "payments": [{
                    "recipient": {
                        "id": "R-ewf"
                    },
                    "sourceAmount": "66"
                }],
            "sourceCurrency": "USD"
        };
        PaymentRails_Batch.post(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, body);
    });
});

