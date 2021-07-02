const database = require('../database/database');

exports.getPurchases = function() {
    return database.query('select * from compras');
}

exports.getPurchase = function(purchaseID) {
    return database.query('select * from compras where id = $1',[purchaseID]);
}

exports.deletePurchase = function(purchaseID) {
    return database.none('delete from compras where id = $1',[purchaseID]);
}

exports.savePurchase = function(purchase) {
    return database.one('insert into compras (livros) values ($1) returning *',
    [purchase.livros]);
}