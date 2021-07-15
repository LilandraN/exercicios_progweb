const database = require('../database/database');

exports.getClients = function() {
    return database.query('select * from clients');
}

exports.getClientByCpf = function(cpf) {
    return database.query('select * from clients where cpf = $1',[cpf]);
}

exports.getClientByEmail = function(email) {
    return database.query('select * from clients where email = $1',[email]);
}
exports.getClient = function(clientID) {
    return database.query('select * from clients where "idCliente" = $1',[clientID]);
}

exports.postClient = function(client) {
    return database.query('select * from clients where email = $1 and senha = crypt($2, senha)',[client.email, client.senha]);
}

exports.deleteClient = function(clientID) {
    return database.none('delete from clients where idCliente = $1',[clientID]);
}

exports.saveClient = function(client) {
    return database.one('insert into clients (nome, email, senha, "dataNasc", cpf, "ehClientePrincipal", "ganhosMensais") values ($1, $2, crypt($3, gen_salt('+"'md5'"+')), $4, $5, $6, $7) returning *',
    [client.nome, client.email, client.senha, client.dataNasc, client.cpf, client.ehClientePrincipal, client.ganhosMensais]);
}