'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var Balances = require('../src/Balances');

var assert = require('assert');

describe('Retrieve Balances', function () {
    it('ok field should be true yes', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Balances, 'get').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = Balances.get();
        assert.equal(data.substring(6, 10), 'true');
        done();
        Balances.get.restore();
    });
});

describe('Retrieve paymentrails balance', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Balances, 'get').withArgs('paymentrails').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = Balances.get('paymentrails');
        assert.equal(data.substring(6, 10), 'true');
        done();
        Balances.get.restore();
    });
});

describe('Retrieve paypal balances', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Balances, 'get').withArgs('paypal').callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        var data = Balances.get('paypal');
        assert.equal(data.substring(6, 10), 'true');
        done();
        Balances.get.restore();
    });
});
