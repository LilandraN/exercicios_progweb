const database = require('../database/database');

exports.getClients = function() {
    return database.query('select * from clientes');
}

exports.getClient = function(clientID) {
    return database.query('select * from clientes where id = $1',[clientID]);
}

exports.postClient = function(client) {
    return database.query('select * from clientes where email = $1 and senha = $2',[client.email, client.senha]);
}

exports.deleteClient = function(clientID) {
    return database.none('delete from clientes where id = $1',[clientID]);
}

exports.saveClient = function(client) {
    return database.one('insert into clientes (email, senha, telefone) values ($1, $2, $3) returning *',
    [client.email, client.senha, client.telefone]);
}