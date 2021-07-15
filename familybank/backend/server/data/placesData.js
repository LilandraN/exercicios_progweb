const database = require('../database/database');

exports.getPlaces = function() {
    return database.query('select * from places');
}

exports.getPlace = function(placeID) {
    return database.query('select * from places where idLugares = $1',[placeID]);
}

exports.deletePlace = function(placeID) {
    return database.oneOrNone('delete from places where "idLugares" = $1',[parseInt(placeID)]);
}

exports.savePlace = function(place) {
    return database.one('insert into places (cnpj, nome, endereco, "cdTipo") values ($1, $2, $3, $4) returning *',
    [place.cnpj, place.nome, place.endereco, place.cdTipo]);
}