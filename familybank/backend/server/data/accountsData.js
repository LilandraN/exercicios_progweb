const database = require('../database/database');

exports.getAccounts = function() {
    return database.query('select * from accounts');
}

exports.getAccountByUserId = function(userId) {
    return database.query('select * from accounts where "cdCliente" = $1',[parseInt(userId)]);
}

exports.getAccount = function(accountID) {
    return database.query('select * from accounts where idConta = $1',[accountID]);
}

exports.deleteAccount = function(accountID) {
    return database.none('delete from accounts where idConta = $1',[accountID]);
}

exports.saveAccount = function(account) {
    return database.one('insert into accounts (cartao, "codSeguranca", validade, "limiteCredito", "cdCliente") values ($1, $2, $3, $4, $5) returning *',
    [account.cartao, account.codSeguranca, account.validade, account.limiteCredito, account.cdCliente]);
}

