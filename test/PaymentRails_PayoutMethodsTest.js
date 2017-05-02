'use strict';
//npm tets to run in root folder

var Configuration = require('../src/Configuration');
var PaymentRails_PayoutMethods = require('../src/PaymentRails_PayoutMethods');

var assert = require('assert');

describe('Retrieve payout method', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_PayoutMethods.get('R-912PW016D02P8', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Retrieve payout method Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wwd');
        PaymentRails_PayoutMethods.get('R-912PW016D02P8', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Retrieve payout method Invalid Recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_PayoutMethods.get('wefrg', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create payout method', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
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
        PaymentRails_PayoutMethods.post('R-91XPMEHZ44RMP', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Create payout method invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('ljbd');
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
        PaymentRails_PayoutMethods.post('R-91XPMEHZ44RMP', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create payout method invalid recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
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
        PaymentRails_PayoutMethods.post('wddef', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update payout method', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
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
        PaymentRails_PayoutMethods.patch('R-91XPMEHZ44RMP', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Update payout method Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wefff');
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
        PaymentRails_PayoutMethods.patch('R-91XPMEHZ44RMP', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update payout method Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
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
        PaymentRails_PayoutMethods.patch('R-dfegrth', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});