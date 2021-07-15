const database = require('../database/database');

exports.getDependents = function() {
    return database.query('select * from dependents');
}

exports.getDependent = function(dependentID) {
    return database.query('select * from dependents where idDependente = $1',[dependentID]);
}

exports.getDependentsWithUser = function(userId) {
    return database.query('select cpf from dependents where "cdCliente" = $1',[parseInt(userId)]);
}
exports.deleteDependent = function(dependentID) {
    return database.oneOrNone('delete from dependents where cpf = $1',[parseInt(dependentID)]);
}

exports.saveDependent = function(dependent) {
    return database.one('insert into dependents ("cdCliente", cpf) values ($1, $2) returning *',
    [ dependent.cdCliente, dependent.cpf]);
}