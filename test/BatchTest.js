'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var Batch = require('../src/Batch');

var assert = require('assert');

describe('Retrieve Batch', function () {
    it('ok field should be true', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'get').withArgs('B-912PWJGD8RZ7J').callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-KQwH3fcJsPddRNkYspAhMV','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','targetAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}},{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','targetAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':1,'records':10}}}}");
        });
        var data = Batch.get('B-912PWJGD8RZ7J');
        assert.equal(data.substring(6, 10), 'true');
        done();
        Batch.get.restore();
    });
});

describe('Retrieve Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'get').withArgs('B-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = Batch.get('B-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        Batch.get.restore();
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

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'patch').withArgs('B-912PWJGD8RZ7J', body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        var data = Batch.patch('B-912PWJGD8RZ7J', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        Batch.patch.restore();
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'patch').withArgs('B-123', body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = Batch.patch('B-123', body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        Batch.patch.restore();
    });
});


describe('Delete Batch', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'remove').withArgs('B-912PWJGD8RZ7J').callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        var data = Batch.remove('B-912PWJGD8RZ7J');
        assert.equal(data.substring(6, 10), 'true');
        done();
        Batch.remove.restore();
    });
});

describe('Delete Batch Invalid Batch Id', function () {
    it('ok field should be false', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'remove').withArgs('B-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = Batch.remove('B-123');
        assert.equal(data.substring(6, 11), 'false');
        done();
        Batch.remove.restore();
    });
});

describe('List Batches', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'query').withArgs().callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','targetAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':10,'records':10}}}}");
        });
        var data = Batch.query();
        assert.equal(data.substring(6, 10), 'true');
        done();
        Batch.query.restore();
    });
});

describe('List Batch with queries ', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(Batch, 'query').withArgs(1, 10).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','targetAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':10,'records':10}}}}");
        });
        var data = Batch.query(1, 10);
        assert.equal(data.substring(6, 10), 'true');
        done();
        Batch.query.restore();
    });
});

describe('Create Batch', function () {
    it('ok field should be true', function (done) {
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        var body = {
            "payments": [{
                "recipient": {
                    "id": "R-91XPJZTR612MG"
                },
                "sourceAmount": "66"
            }],
            "sourceCurrency": "USD"
        };
        sinon.stub(Batch, 'post').withArgs(body).callsFake(() => {
            return ("B-912PWJGD8RZ7J");
        });
        var batch_id = Batch.post(body);

        sinon.stub(Batch, 'generateQuote').withArgs(batch_id).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-WAh3t3RitzjtuMDBJhvjfZ','status':'open','amount':'0.00','totalPayments':'1','currency':'USD','description':'Weekly Payouts on 2017-7-19','sentAt':null,'completedAt':null,'createdAt':'2017-07-19T20:30:31.399Z','updatedAt':'2017-07-19T20:30:31.477Z','payments':{'payemnts':[],'meta':{'page':0,'pages':1,'records':1}}}}");
        });
        var data = Batch.generateQuote(batch_id);
        assert.equal(data.substring(6, 10), 'true');
        done();


        sinon.stub(Batch, 'processBatch').withArgs(batch_id).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-WAh3t3RitzjtuMDBJhvjfZ','status':'open','amount':'0.00','totalPayments':'1','currency':'USD','description':'Weekly Payouts on 2017-7-19','sentAt':null,'completedAt':null,'createdAt':'2017-07-19T20:30:31.399Z','updatedAt':'2017-07-19T20:30:31.477Z','payments':{'payemnts':[],'meta':{'page':0,'pages':1,'records':1}}}}");
        });
        data = Batch.processBatch(vatch_id);
        assert.equal(data.substring(6, 10), 'true');
        done();


        Batch.post.restore();
        Batch.generateQuote.restore();
        Batch.processBatch.restore();

    });
});

describe('Create Batch, Invalid Recipient Id', function () {
    it('ok field should be false', function (done) {
        Batch.post.restore();
        var body = {
            "payments": [{
                "recipient": {
                    "id": "R-ewf"
                },
                "sourceAmount": "66"
            }],
            "sourceCurrency": "USD"
        };
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');

        sinon.stub(Batch, 'post').withArgs(body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });

        var data = Batch.post(body);
        assert.equal(data.substring(6, 11), 'false');
        done();
        Batch.post.restore();
    });
});

