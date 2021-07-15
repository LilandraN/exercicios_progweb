const accountsData = require('../data/accountsData');

exports.getAccounts = function() {
    return accountsData.getAccounts();
}

exports.getAccountByUserId = function (userId) {
    return accountsData.getAccountByUserId(userId);  
}

exports.getAccount = function (accountID) {
    return accountsData.getAccount(accountID);  
}

exports.deleteAccount = function (accountID) {
    return accountsData.deleteAccount(accountID);
}

exports.saveAccount = function(account) {
    return accountsData.saveAccount(account);
}


