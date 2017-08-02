# Payment Rails NodeJS SDK

A native NodeJS SDK for the Payment Rails API

For more information about the API as well as NodeJS code samples check out the [full API documentation](http://docs.paymentrails.com)


## Installation

#

#### For [NodeJS](https://nodejs.org/en/)

#

## Getting Started

```js
// A simple NodeJS application using the Payment Rails SDK
var PaymentRails_Recipient = require('/paymentrails/src/PaymentRails_Recipient');
var Configuration = require('/paymentrails/src/Configuration');


var callback = function (error, data, response) {

    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
Configuration.prototype.setApiKey('access-code');
Configuration.prototype.setApiSecret('secret-code');
PaymentRails_Recipient.get('R-GbGnYCbmsSm6xHnYVyGW7J', callback);

```

## Documentation for API Endpoint Methods

All URIs are relative to *https://api.paymentrails.com/v1*

Class | Method | HTTP request
------------ | ------------- | ------------- 
*PaymentRails_Recipient | [**get**](docs/PaymentRails_Recipient.md#get) | **GET** /recipient/ 
*PaymentRails_Recipient | [**post**](docs/PaymentRails_Recipient.md#post) | **POST** /recipient/ 
*PaymentRails_Recipient | [**patch**](docs/PaymentRails_Recipient.md#patch) | **PATCH** /recipient/ 
*PaymentRails_Recipient | [**delete**](docs/PaymentRails_Recipient.md#delete) | **DELETE** /recipient/ 
*PaymentRails_Recipient | [**query**](docs/PaymentRails_Recipient.md#query) | **GET** /recipient/ 
*PaymentRails_RecipientAccounts | [**get**](docs/PaymentRails_RecipientAccounts.md#get) | **GET** /recipient/<recipient_id>/accounts/recipientAccountId
*PaymentRails_RecipientAccounts | [**post**](docs/PaymentRails_RecipientAccounts.md#post) | **POST** /recipient/<recipient_id>/accounts
*PaymentRails_RecipientAccounts | [**patch**](docs/PaymentRails_RecipientAccounts.md#patch) | **PATCH** /recipient/<recipient_id>/accounts/recipientAccountId 
*PaymentRails_Batch | [**get**](docs/PaymentRails_Batch.md#get) | **GET** /batch/ 
*PaymentRails_Batch | [**post**](docs/PaymentRails_Batch.md#post) | **POST** /batch/ 
*PaymentRails_Batch | [**patch**](docs/PaymentRails_Batch.md#patch) | **PATCH** /batch/ 
*PaymentRails_Batch | [**delete**](docs/PaymentRails_Batch.md#delete) | **DELETE** /batch/ 
*PaymentRails_Batch | [**query**](docs/PaymentRails_Batch.md#query) | **GET** /batch/ 
*PaymentRails_Batch | [**generateQuote**](docs/PaymentRails_Batch.md#generateQuote) | **POST** /batch/ 
*PaymentRails_Batch | [**processBatch**](docs/PaymentRails_Batch.md#processBatch) | **POST** /batch/ 
*PaymentRails_Batch | [**summary**](docs/PaymentRails_Batch.md#summary) | **GET** /batch/ 
*PaymentRails_Payment | [**get**](docs/PaymentRails_Payment.md#get) | **GET** /payments/ 
*PaymentRails_Payment | [**post**](docs/PaymentRails_Payment.md#post) | **POST** /batch/<batch_id>/payments 
*PaymentRails_Payment | [**patch**](docs/PaymentRails_Payment.md#patch) | **PATCH** /batch/<batch_id>/payments 
*PaymentRails_Payment | [**delete**](docs/PaymentRails_Payment.md#delete) | **DELETE** /batch/<batch_id>/payments 
*PaymentRails_Payment | [**query**](docs/PaymentRails_Payment.md#query) | **GET** /payments/ 
*PaymentRails_Balances | [**get**](docs/PaymentRails_Balances.md#get) | **GET** /balances/ 

 
## Documentation for Authorization


### merchantKey

- **Type**: Authorization
- **Authorization parts**: Access code, Secret code
- **Location**: HTTP header