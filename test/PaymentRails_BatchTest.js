'use strict';
//npm test to run in root folder
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Batch = require('../src/PaymentRails_Batch');

var assert = require('assert');

describe('Retrieve Batch', function () {
    it('ok field should be true', function (done) {

         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'get').withArgs('B-912PWJGD8RZ7J').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.get('B-912PWJGD8RZ7J');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Batch.get.restore();
    });
});

describe('Retrieve Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'get').withArgs('B-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Batch.get('B-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Batch.get.restore();
    });
});

describe('Update Batch', function () {
    it('ok field should be true yes', function (done) {
        var body = {
            "update_payments": [{
                "id": "P-91XPMB3BC9PQY",
                "sourceAmount": 99
            }]
        };

         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'patch').withArgs('B-912PWJGD8RZ7J', body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.patch('B-912PWJGD8RZ7J', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Batch.patch.restore();
    });
});


describe('Update Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        var body = {
            "update_payments": [{
                "id": "P-91XPMB3BC9PQY",
                "sourceAmount": 99
            }]
        };
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'patch').withArgs('B-123', body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Batch.patch('B-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Batch.patch.restore();
    });
});


describe('Delete Batch', function () {
    it('ok field should be true', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'remove').withArgs('B-912PWJGD8RZ7J').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.remove('B-912PWJGD8RZ7J');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Batch.remove.restore();
    });
});

describe('Delete Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'remove').withArgs('B-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Batch.remove('B-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Batch.remove.restore();
    });
});

describe('List Batches', function () {
    it('ok field should be true', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'query').withArgs().callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.query();
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Batch.query.restore();
    });
});

describe('List Batch with queries ', function () {
    it('ok field should be true', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Batch, 'query').withArgs(1, 10).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.query(1, 10);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Batch.query.restore();
    });
});

describe('Create Batch', function () {
    it('ok field should be true', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        var body = {
            "payments": [{
                "recipient": {
                    "id": "R-91XPJZTR612MG"
                },
                "sourceAmount": "66"
            }],
            "sourceCurrency": "USD"
        };
        sinon.stub(PaymentRails_Batch, 'post').withArgs(body).callsFake(() => {
            return ("B-912PWJGD8RZ7J");
        });
        var batch_id = PaymentRails_Batch.post(body);

        sinon.stub(PaymentRails_Batch, 'generateQuote').withArgs(batch_id).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Batch.generateQuote(batch_id);
        assert.equal(data.substring(6, 10), 'true');
        done();


        sinon.stub(PaymentRails_Batch, 'processBatch').withArgs(batch_id).callsFake(() => {
            return ("tttttttrue");
        });
        data = PaymentRails_Batch.processBatch(vatch_id);
        assert.equal(data.substring(6, 10), 'true');
        done();


        PaymentRails_Batch.post.restore();
        PaymentRails_Batch.generateQuote.restore();
        PaymentRails_Batch.processBatch.restore();

    });
});

describe('Create Batch, Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Batch.post.restore();
        var body = {
            "payments": [{
                "recipient": {
                    "id": "R-ewf"
                },
                "sourceAmount": "66"
            }],
            "sourceCurrency": "USD"
        };
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 

        sinon.stub(PaymentRails_Batch, 'post').withArgs(body).callsFake(() => {
            return ("ttttttfalse");
        });

        var data = PaymentRails_Batch.post(body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Batch.post.restore();
    });
});

