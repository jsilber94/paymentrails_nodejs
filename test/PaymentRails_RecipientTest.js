'use strict';
var sinon = require('sinon');
var Configuration = require('../src/Configuration');
var PaymentRails_Recipient = require('../src/PaymentRails_Recipient');

var assert = require('assert');

describe('Retrieve recipient', function () {
    it('ok field should be true', function (done) {

        Configuration.prototype.setApiKey('access-code');
        Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-PuzPJLVYQXBbPSMQKwmJ5G').callsFake(() => {
            return ("{'ok':true,'recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T18:36:30.832Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[{'recipientAccountId':'A-Jnc8vt9H2sTXYYJKeu8UaA','primary':false,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*****47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'},{'recipientAccountId':'A-KKHb8MpFvju6vDMBLPmtej','primary':false,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*****47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'},{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}],'payout':{'autoswitch':{'limit':1000,'active':false},'holdup':{'limit':1000,'active':false},'primary':{'method':'paypal','currency':{'currency':{'code':'USD','name':'USD'}}},'method':'paypal','accounts':{'paypal':{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}}},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}}}");
        });
        var data = PaymentRails_Recipient.get('R-PuzPJLVYQXBbPSMQKwmJ5G');
        assert.equal(data.substring(6, 10), 'true');
        done();
        PaymentRails_Recipient.get.restore();

    });
});

describe('Retrieve recipient invalid Recipient Id', function () {
    it('ok field should be false', function (done) {

        Configuration.prototype.setApiKey('access-code'); Configuration.prototype.setApiSecret('secret-code');
        sinon.stub(PaymentRails_Recipient, 'get').withArgs('R-123').callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
            return ("{'ok':true,'recipient':{'id':'R-LVqW7CTFRoTCunpV9QSBRe','referenceId':'jsmith@example.com','email':'jsmith@example.com','name':'John Smith','lastName':'Smith','firstName':'John','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'pending','dob':null,'payoutMethod':null,'updatedAt':'2017-08-02T19:43:19.492Z','createdAt':'2017-08-02T19:43:19.492Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'pending','checkedAt':null},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':null,'region':null,'phone':null}}}");
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
            return ("{'ok':false,'errors':[{'code':'empty_field','field':'firstName','message':'Expected to have a non-null or non-empty value'}]}");
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
            return ("{'ok':true,'object':'updated'}");
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
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
            return ("{'ok':true,'object':'deleted'}");
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
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
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
            return ("{'ok':true,'recipients':[{'id':'R-LVqW7CTFRoTCunpV9QSBRe','referenceId':'jsmith@example.com','email':'jsmith@example.com','name':'John Smith','lastName':'Smith','firstName':'John','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'blocked','dob':null,'payoutMethod':null,'updatedAt':'2017-08-02T19:45:04.310Z','createdAt':'2017-08-02T19:43:19.492Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'blocked','checkedAt':'2017-08-02T19:45:04.294Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':null,'region':null,'phone':null}}],'meta':{'page':1,'pages':108,'records':108}}");
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
            return ("{'ok':true,'activities'");
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
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}e");
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
            return ("{'ok':true,'payments':[],'meta':{'page':1,'pages':0,'records':0}}");
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
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });

        var data = PaymentRails_Recipient.get('R-123', 'payments');
        assert.equal(data.substring(6, 11), 'false');
        done();
        PaymentRails_Recipient.get.restore();
    });
});

