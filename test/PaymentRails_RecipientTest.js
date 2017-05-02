'use strict';
//npm tets to run in root folder

var Configuration = require('../src/Configuration');
var PaymentRails_Recipient = require('../src/PaymentRails_Recipient');

var assert = require('assert');

describe('Retrieve recipient', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('R-91XPJZTR612MG', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Retrieve recipient invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('R-efr', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Retrieve recipient invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('gh');
        PaymentRails_Recipient.get('R-91XPJZTR612MG', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe.skip('Create recipient', function () {
    it('Shouldnt run as not to continuously create recipients', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            type: 'individual',
            referenceId: 'U789123456',
            email: 'wonder@woman.com.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        PaymentRails_Recipient.post(body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Create recipient, invalid API key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('swdf');
        var body = {
            type: 'individual',
            referenceId: 'U789123456',
            email: 'wonder@woman.com.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        PaymentRails_Recipient.post(body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create recipient, invalid field name', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            referenceId: 'U789123456',
            email: 'wonder@woman.com.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        PaymentRails_Recipient.post(body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Create recipient, invalid field validation', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        var body = {
            type: 'individual',
            referenceId: 'U789123456',
            email: 'wonderwoman.com.com',
            name: 'Wonder Woman',
            lastName: 'Woman',
            firstName: 'Wonder'
        };
        PaymentRails_Recipient.post(body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update recipient', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');

        var body = {
            firstName: 'George',
            lastName: 'Jetson'
        };

        PaymentRails_Recipient.patch('R-91XPM8233T710', body, function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Update recipient Invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('hsdf');

        var body = {
            firstName: 'George',
            lastName: 'Jetson'
        };

        PaymentRails_Recipient.patch('R-91XPM8233T710', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update recipient Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');

        var body = {
            firstName: 'George',
            lastName: 'Jetson'
        };

        PaymentRails_Recipient.patch('R-we', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Update recipient Invalid field validation', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');

        var body = {
            email: 'George',
        };
        PaymentRails_Recipient.patch('R-91XPM8233T710', body, function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe.skip('Delete recipient', function () {
    it('Shouldnt run as not to attempt to continuously delete recipients', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.remove('R-91XPJZTR612MG', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('Delete recipient invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('qwe');
        PaymentRails_Recipient.remove('R-91XPJZTR612MG', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Delete recipient invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.remove('wesd', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('List all recipients', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.query(function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        });
    });
});

describe('List all recipients Invalid Api Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wefg');
        PaymentRails_Recipient.query(function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        });
    });
});

describe('Retrieve logs', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('R-91XPMEHZ44RMP', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 'logs?pageSize=10');
    });
});

describe('Retrieve logs invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wfw');
        PaymentRails_Recipient.get('R-91XPMEHZ44RMP', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'logs');
    });
});

describe('Retrieve logs invalid recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('R-fergt', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'logs');
    });
});



describe('Retrieve payments', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('R-91XPMEHZ44RMP', function (error, data, response) {
            assert.equal(data.substring(6, 10), 'true');
            done();
        }, 'payments');
    });
});

describe('Retrieve payments invalid API Key', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('wfw');
        PaymentRails_Recipient.get('R-91XPMEHZ44RMP', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'payments');
    });
});

describe('Retrieve payments invalid recipient id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('pk_live_91XNJFBD19ZQ6');
        PaymentRails_Recipient.get('erer', function (error, data, response) {
            assert.equal(data.substring(6, 11), 'false');
            done();
        }, 'payments');
    });
});

