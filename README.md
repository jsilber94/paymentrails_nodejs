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
var PaymentRails = require('paymentrails');

var callback = function (error, data, response) {

    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
PaymentRails.Configuration.prototype.setApiKey('access-code');
PaymentRails.Configuration.prototype.setApiSecret('secret-code');
PaymentRails.Recipient.get('R-GbGnYCbmsSm6xHnYVyGW7J', callback);

```

## Documentation for API Endpoint Methods

All URIs are relative to *https://api.paymentrails.com/v1*

Class | Method | HTTP request
------------ | ------------- | -------------
*Recipient | [**get**](docs/Recipient.md#get) | **GET** /recipient/
*Recipient | [**post**](docs/Recipient.md#post) | **POST** /recipient/
*Recipient | [**patch**](docs/Recipient.md#patch) | **PATCH** /recipient/
*Recipient | [**delete**](docs/Recipient.md#delete) | **DELETE** /recipient/
*Recipient | [**query**](docs/Recipient.md#query) | **GET** /recipient/
*RecipientAccounts | [**get**](docs/RecipientAccounts.md#get) | **GET** /recipient/<recipient_id>/accounts/recipientAccountId
*RecipientAccounts | [**post**](docs/RecipientAccounts.md#post) | **POST** /recipient/<recipient_id>/accounts
*RecipientAccounts | [**patch**](docs/RecipientAccounts.md#patch) | **PATCH** /recipient/<recipient_id>/accounts/recipientAccountId
*RecipientAccounts | [**remove**](docs/RecipientAccounts.md#remove) | **DELETE** /recipient/<recipient_id>/accounts/recipientAccountId
*Batch | [**get**](docs/Batch.md#get) | **GET** /batch/
*Batch | [**post**](docs/Batch.md#post) | **POST** /batch/
*Batch | [**patch**](docs/Batch.md#patch) | **PATCH** /batch/
*Batch | [**delete**](docs/Batch.md#delete) | **DELETE** /batch/
*Batch | [**query**](docs/Batch.md#query) | **GET** /batch/
*Batch | [**generateQuote**](docs/Batch.md#generateQuote) | **POST** /batch/
*Batch | [**processBatch**](docs/Batch.md#processBatch) | **POST** /batch/
*Batch | [**summary**](docs/Batch.md#summary) | **GET** /batch/
*Payment | [**get**](docs/Payment.md#get) | **GET** /payments/
*Payment | [**post**](docs/Payment.md#post) | **POST** /batch/<batch_id>/payments
*Payment | [**patch**](docs/Payment.md#patch) | **PATCH** /batch/<batch_id>/payments
*Payment | [**delete**](docs/Payment.md#delete) | **DELETE** /batch/<batch_id>/payments
*Payment | [**query**](docs/Payment.md#query) | **GET** /payments/
*Balances | [**get**](docs/Balances.md#get) | **GET** /balances/


## Documentation for Authorization


### merchantKey

- **Type**: Authorization
- **Authorization parts**: Access code, Secret code
- **Location**: HTTP header
