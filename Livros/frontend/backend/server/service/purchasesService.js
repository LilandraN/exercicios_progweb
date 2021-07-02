const purchasesData = require('../data/purchasesData');

exports.getPurchases = function() {
    return purchasesData.getPurchases();
}

exports.getPurchase = function(purchaseID) {
    return purchasesData.getPurchase(purchaseID);
}

exports.deletePurchase = function (purchaseID) {
    return purchasesData.deletePurchase(purchaseID);
}

exports.savePurchase = function(purchase) {
    return purchasesData.savePurchase(purchase);
}