# Batch

## About
The Batch class contains static utily methods for interfacing with the batch API. For more information see the [API documentation](http://docs.paymentrails.com/#payments)

## **Methods**
---
### **get**
Utility method to make GET requests to the batch API

Parameters | Return Type
--- | ---:
(batchId, callback) | callback


---
### **post**
Utility method to make POST requests to the batch API

Parameters | Return Type
--- | ---:
(body, callback) | callback
(body, batchId, callback) | callback

---
### **patch**
Utility method to make PATCH requests to the batch API

Parameters | Return Type
--- | ---:
(batchId, body, callback) | callback

---
### **delete**
Utility method to make DELETE requests to the batch API

Parameters | Return Type
--- | ---:
(batchId, callback) | callback

---
### **query**
Utility method for querying batches

Parameters | Return Type
--- | ---:
(page, pageSize, term, callback) | callback

---
### **generateQuote**
Utility method to generating a quote for a bacth

Parameters | Return Type
--- | ---:
(batchId, callback) | callback


---
### **processBatch**
Utility method to send a batch out for processing

Parameters | Return Type
--- | ---:
(batchId, callback) | callback


---
### **summary**
Utility method to get a batch summary

Parameters | Return Type
--- | ---:
(batchId, callback) | callback
