'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Balances = require('../src/PaymentRails_Balances');

var assert = require('assert');

describe('Retrieve Balances', function () {
    it('ok field should be true yes', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Balances, 'get').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = PaymentRails_Balances.get();
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Balances.get.restore();
    });
});

describe('Retrieve paymentrails balance', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Balances, 'get').withArgs('paymentrails').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = PaymentRails_Balances.get('paymentrails');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Balances.get.restore();
    });
});

describe('Retrieve paypal balances', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Balances, 'get').withArgs('paypal').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = PaymentRails_Balances.get('paypal');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Balances.get.restore();
    });
});
