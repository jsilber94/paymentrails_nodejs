# Recipient

## About
The Recipient class contains static utily methods for interfacing with the recipient API. For more information see the [API documentation](http://docs.paymentrails.com/#recipients)

## **Methods**
---
### **get**
Utility method to make GET requests to the recipient API

Parameters | Return Type
---| ---:
(recipientId, callback) | callback
(recipientId, term, callback) | callback


---
### **post**
Utility method to make POST requests to the recipient API

Parameters | Return Type
--- | ---:
(body, callback) | callback

---
### **patch**
Utility method to make PATCH requests to the recipient API

Parameters | Return Type
--- | ---:
(recipientId, body, callback) | callback

---
### **delete**
Utility method to make DELETE requests to the recipient API

Parameters | Return Type
--- | ---:
(recipientId, callback) | callback

---
### **query**
Utility method for querying recipients

Parameters | Return Type
--- | ---:
(no-parameters, callback) | callback
(page, callback) | callback
(page, pageSize, callback) | callback
(page, pageSize, term, callback) | callback