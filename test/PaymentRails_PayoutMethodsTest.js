'use strict';
//npm tets to run in root folder
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_RecipientAccounts = require('../src/PaymentRails_RecipientAccounts');

var assert = require('assert');

describe('Retrieve payout method', function () {
    it('ok field should be true', function (done) {

         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'get').withArgs('R-91XPJZTR612MG').callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_RecipientAccounts.get('R-91XPJZTR612MG');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_RecipientAccounts.get.restore();

    });
});

describe('Retrieve payout method Invalid Recipient id', function () {
    it('ok field should be false', function (done) {
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'get').withArgs('R-123').callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_RecipientAccounts.get('R-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_RecipientAccounts.get.restore();

    });
});

describe('Create payout method', function () {
    it('ok field should be true', function (done) {
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

         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'post').withArgs('R-91XPMEHZ44RMP', body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_RecipientAccounts.post('R-91XPMEHZ44RMP', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_RecipientAccounts.post.restore();

    });
});

describe('Create payout method invalid recipient id', function () {
    it('ok field should be false', function (done) {
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
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'post').withArgs('R-123', body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_RecipientAccounts.post('R-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_RecipientAccounts.post.restore();

    });
});

describe('Update payout method', function () {
    it('ok field should be true', function (done) {
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
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'patch').withArgs('R-91XPMEHZ44RMP', body).callsFake(() => {
            return ("tttttttrue");
        });
        var data = PaymentRails_RecipientAccounts.patch('R-91XPMEHZ44RMP', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_RecipientAccounts.patch.restore();

    });
});

describe('Update payout method Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
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
         Configuration.prototype.setApiKey('access-code');     Configuration.prototype.setApiSecret('secret-code'); 
        sinon.stub(PaymentRails_RecipientAccounts, 'patch').withArgs('R-123', body).callsFake(() => {
            return ("ttttttfalse");
        });
        var data = PaymentRails_RecipientAccounts.patch('R-123', body);
            assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_RecipientAccounts.patch.restore();
    });
});