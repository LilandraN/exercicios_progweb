const database = require('../database/database');

exports.getTypes = function() {
    return database.query('select * from types');
}

exports.getType = function(typeID) {
    return database.query('select * from types where idTipo = $1',[typeID]);
}

exports.deleteType = function(typeID) {
    return database.none('delete from types where idTipo = $1',[typeID]);
}

exports.saveType = function(type) {
    return database.one('insert into types ("idTipo", nome) values ($1, $2) returning *',
    [type.idTipo, type.nome]);
}