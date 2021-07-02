const database = require('../database/database');

exports.getCompanys = function() {
    return database.query('select * from editora');
}

exports.getCompany = function(companyID) {
    return database.query('select * from editora where id = $1',[companyID]);
}

exports.deleteCompany = function(companyID) {
    return database.none('delete from editora where id = $1',[companyID]);
}

exports.saveCompany = function(company) {
    return database.one('insert into editora (livros, endereco, telefone, nomegerente) values ($1, $2, $3, $4) returning *',
    [company.livros, company.endereco, company.telefone, company.nomegerente]);
}