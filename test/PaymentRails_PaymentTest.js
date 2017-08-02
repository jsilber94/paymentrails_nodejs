'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Payment = require('../src/PaymentRails_Payment');

var assert = require('assert');

describe('Retrieve Payment', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'get').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-KQwH3fcJsPddRNkYspAhMV','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'bank-transfer','updatedAt':'2017-08-02T19:57:17.037Z','createdAt':'2017-08-02T17:39:21.504Z','merchantId':'M-JVaAj4uPcfWGUReqcGUUBY','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','targetAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T18:49:20.505Z','updatedAt':'2017-08-02T18:49:20.505Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar','batch':{'id':'B-LfoeSofUYdPpZBULbezULe','createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T18:49:54.798Z','sentAt':null,'completedAt':null}}}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'get').withArgs('P-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'post').withArgs('B-912PWJGD8RZ7J', body).callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','targetAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar'}}");
        });
        var data = PaymentRails_Payment.post('B-912PWJGD8RZ7J', body);
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Payment.post.restore();
    });
});

describe('Update Payment', function () {
    it('ok field should be true', function (done) {
        PaymentRails_Payment.setBatchId('B-912PWJGD8RZ7J');
        var body = { "sourceAmount": "900.90" };
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'patch').withArgs('P-91XPJV99EWX48', body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'patch').withArgs('P-123', body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("{'ok':true,'object':'deleted'}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'remove').withArgs('P-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','targetAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar'}}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48', 1, 10).callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','targetAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','targetCurrency':'USD','targetCurrencyName':'US Dollar'}}");
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
        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Payment, 'query').withArgs('P-91XPJV99EWX48').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        var data = PaymentRails_Payment.query('P-91XPJV99EWX48');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Payment.query.restore();
    });
});

