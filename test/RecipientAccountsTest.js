'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var RecipientAccounts = require('../src/RecipientAccounts');

var assert = require('assert');

describe('Retrieve payout method', function () {
    it('ok field should be true', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'get').withArgs('R-91XPJZTR612MG').callsFake(() => {
            return ("{'ok':true,'account':{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}}");
        });
        var data = RecipientAccounts.get('R-91XPJZTR612MG');
        assert.equal(data.substring(6, 10), 'true');
        done();
        RecipientAccounts.get.restore();

    });
});

describe('Retrieve payout method Invalid Recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'get').withArgs('R-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = RecipientAccounts.get('R-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        RecipientAccounts.get.restore();

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

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'post').withArgs('R-91XPMEHZ44RMP', body).callsFake(() => {
            return ("{'ok':true,'account':{'recipientAccountId':'A-SKQnB1eyJ1imqBftXq9Dqg','primary':true,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*******47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'}}");
        });
        var data = RecipientAccounts.post('R-91XPMEHZ44RMP', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        RecipientAccounts.post.restore();

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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'post').withArgs('R-123', body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = RecipientAccounts.post('R-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        RecipientAccounts.post.restore();

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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'patch').withArgs('R-91XPMEHZ44RMP', body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        var data = RecipientAccounts.patch('R-91XPMEHZ44RMP', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        RecipientAccounts.patch.restore();

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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(RecipientAccounts, 'patch').withArgs('R-123', body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = RecipientAccounts.patch('R-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        RecipientAccounts.patch.restore();
    });
});