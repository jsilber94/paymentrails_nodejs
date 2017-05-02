'use strict';
//npm tets to run in root folder

var Configuration = require('../src/Configuration');
var PaymentRails_Balances = require('../src/PaymentRails_Balances');

var assert = require('assert');

describe('Retrieve Balances', function () {
    it('ok field should be true yes', function () {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
        });
    });
});

describe('Retrieve Balances Invalid API Key', function () {
    it('ok field should be false', function () {
        Configuration.prototype.setApiKey('dfg');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
        });
    });
});



describe.skip('Retrieve paymentrails balance(DOES NOT WORK)', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 'paymentrails');
    });
});

describe.skip('Retrieve paymentrails balance Invalid API Key ', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('erfg');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'paymentrails');
    });
});


describe.skip('Retrieve paypal balances(DOES NOT WORK)', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 'paypal');
    });
});

describe.skip('Retrieve paypal balance Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('erfg');
        PaymentRails_Balances.get(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'paypal');
    });
});
