'use strict';
//npm test to run in root folder
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Recipient = require('../src/PaymentRails_Recipient');

var assert = require('assert');

describe('Retrieve recipient', function () {
    it('ok field should be true', function (done) {

        Configuration.prototype.setApiKey('access-code'); 
        Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-91XPJZTR612MG').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Recipient.get('R-91XPJZTR612MG');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.get.restore();

    });
});
Configuration.prototype.setApiKey('access-code');
Configuration.prototype.setApiSecret('secret-code');
describe('Retrieve recipient invalid Recipient Id', function () {
    it('ok field should be false', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Recipient.get('R-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.get.restore();

    });
});

describe('Create recipient', function () {
    it('ok field should be true', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        var body = {
            type: 'individual',
            referenceId: 'U789123456',
            email: 'wonder@woman.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        sinon.stub(PaymentRails_Recipient, 'post').withArgs(body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Recipient.post(body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.post.restore();
    });
});

describe('Create recipient, invalid field name', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        var body = {
            type: 'individual',
            referenceId: 'U789123456',
            email: 'wonder@.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        sinon.stub(PaymentRails_Recipient, 'post').withArgs(body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Recipient.post(body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.post.restore();
    });
});

describe('Update recipient', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        var body = {
            firstName: 'George',
            lastName: 'Jetson'
        };
        sinon.stub(PaymentRails_Recipient, 'patch').withArgs("R-9191XPM8233T710", body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Recipient.patch('R-9191XPM8233T710', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.patch.restore();
    });
});

describe('Update recipient Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        var body = {
            firstName: 'George',
            lastName: 'Jetson'
        };
        sinon.stub(PaymentRails_Recipient, 'patch').withArgs("R-123", body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Recipient.patch('R-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.patch.restore();
    });
});

describe('Delete recipient', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'remove').withArgs('R-91XPJZTR612MG').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Recipient.remove('R-91XPJZTR612MG');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.remove.restore();
    });
});

describe('Delete recipient invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'remove').withArgs('R-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_Recipient.remove('R-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.remove.restore();
    });
});

describe('List all recipients', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'query').withArgs('R-91XPJZTR612MG').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_Recipient.query('R-91XPJZTR612MG');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.query.restore();
    });
});

describe('Retrieve logs', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-91XPJZTR612MG', 'logs?pageSize=10').callsFake(() => {
            return ("tttttttrue");
        });

        var data = PaymentRails_Recipient.get('R-91XPJZTR612MG', 'logs?pageSize=10');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.get.restore();
    });
});

describe('Retrieve logs invalid recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-123', 'logs?pageSize=10').callsFake(() => {
            return ("ttttttfalse");
        });

        var data = PaymentRails_Recipient.get('R-123', 'logs?pageSize=10');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.get.restore();
    });
});

describe('Retrieve payments', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-91XPJZTR612MG', 'payments').callsFake(() => {
            return ("tttttttrue");
        });

        var data = PaymentRails_Recipient.get('R-91XPJZTR612MG', 'payments');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.get.restore();
    });
});

describe('Retrieve payments invalid recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-123', 'payments').callsFake(() => {
            return ("ttttttfalse");
        });

        var data = PaymentRails_Recipient.get('R-123', 'payments');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.get.restore();
    });
});

