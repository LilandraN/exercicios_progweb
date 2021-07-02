const clientsData = require('../data/clientsData');

exports.getClients = function() {
    return clientsData.getClients();
}

exports.getClient = function(clientID) {
    return clientsData.getClient(clientID);
}

exports.deleteClient = function (clientID) {
    return clientsData.deleteClient(clientID);
}

exports.saveClient = function(client) {
    return clientsData.saveClient(client);
}

exports.postClient = function(client) {
    return clientsData.postClient(client);
}