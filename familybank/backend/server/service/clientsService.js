const clientsData = require('../data/clientsData');

exports.getClients = function() {
    return clientsData.getClients();
}

exports.getClientByEmail = function(clientsID) {
    return clientsData.getClientByEmail(clientsID);
}

exports.getClientByCpf = function(clientsID) {
    return clientsData.getClientByCpf(clientsID);
}

exports.getClient = function(clientsID) {
    return clientsData.getClient(clientsID);
}

exports.deleteClient = function (clientsID) {
    return clientsData.deleteClient(clientsID);
}

exports.saveClient = function(client) {
    return clientsData.saveClient(client);
}

exports.postClient = function(client) {
    return clientsData.postClient(client);
}