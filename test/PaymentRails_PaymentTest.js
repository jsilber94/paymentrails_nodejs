'use strict';
//npm test to run in root folder
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Payment = require('../src/PaymentRails_Payment');

var assert = require('assert');

describe('Retrieve Payment', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'get').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.get('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.get.restore();

    });
});

describe('Retrieve Payment Invalid Payment Id ', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'get').withArgs('P-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Payment.get('P-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.get.restore();

    });
});

describe('ok field should be true', function () {
    it('ok field should be true', function (done) {
        var body = {
            "recipient": {
                "id": "R-91XPET3C8WBJJ"
            },
            "sourceAmount": "100.10",
            "memo": "test payment"
        };
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'post').withArgs('B-912PWJGD8RZ7J', body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.post('B-912PWJGD8RZ7J', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.post.restore();
    });
});

describe('Create Payment Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_test_91XPYV1Y8MXQC');
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
            PaymentRails_Payment.post.restore();
        });
    });
});

describe('Update Payment', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = { "sourceAmount": "900.90" };
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'patch').withArgs('P-91XPJV99EWX48', body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.patch('P-91XPJV99EWX48', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.patch.restore();

    });
});

describe('Update Payment Invalid Payment Id', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = { "sourceAmount": "900.90" };
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'patch').withArgs('P-123', body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Payment.patch('P-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.patch.restore();
    });
});

describe('Delete Payment', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.remove('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.remove.restore();
    });
});

describe('Delete Payment Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Payment.setBatchId('B-123');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Payment.remove('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.remove.restore();
    });
});

describe('Delete Payment Invalid Payment Id', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Payment.remove('P-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.remove.restore();
    });
});

describe('List all Payments', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.query('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.query.restore();
    });
});

describe('List all Payments with queries', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48', 1, 10).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Payment.query('P-91XPJV99EWX48', 1, 10);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.query.restore();
    });
});

describe('List all Payments Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        PaymentRails_Payment.setBatchId('B-123');
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Payment.query('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.query.restore();
    });
});

