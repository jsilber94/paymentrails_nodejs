/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');

gulp.task('default', function () {
    var PaymentRails_Recipient = require('./PaymentRails_Recipient');
    var PaymentRails_PayoutMethods = require('./PaymentRails_PayoutMethods');
    var PaymentRails_Balances = require('./PaymentRails_Balances');
    var PaymentRails_Payment = require('./PaymentRails_Payment');
    var PaymentRails_Batch = require('./PaymentRails_Batch');
});
