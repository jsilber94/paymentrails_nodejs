var apiKey;
var apiBase = 'api.railz.io';

function Configuration(newApiKey) {
    apiKey = newApiKey;


}
Configuration.prototype.getApiKey = function () {
    return apiKey;
};


Configuration.prototype.setApiKey = function (newApiKey) {
    apiKey = newApiKey;
};

Configuration.prototype.getApiBase = function () {
    return apiBase;
};

Configuration.prototype.setApiBase = function (newApiBase) {
    apiBase = newApiBase;
    
};



module.exports = Configuration;
