# Payment

## About
The Payment class contains static utily methods for interfacing with the payment API. For more information see the [API documentation](http://docs.paymentrails.com/#payments)

## **Methods**
---
### **get**
Utility method to make GET requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId, callback) | callback


---
### **post**
Utility method to make POST requests to the payment API

Parameters | Return Type
--- | ---:
(body, batchId, callback) | callback

---
### **patch**
Utility method to make PATCH requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId, body, callback) | callback

---
### **delete**
Utility method to make DELETE requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId, callback) | callback

---
### **query**
Utility method for querying payments

Parameters | Return Type
--- | ---:
(no-parameters, callback) | callback
(page, callback) | callback
(page, pageSize, callback) | callback
(page, pageSize, term, callback) | callback