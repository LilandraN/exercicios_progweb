const companysData = require('../data/companysData');

exports.getCompanys = function() {
    return companysData.getCompanys();
}

exports.getCompany = function(companyID) {
    return companysData.getCompany(companyID);
}

exports.deleteCompany = function (companyID) {
    return companysData.deleteCompany(companyID);
}

exports.saveCompany = function(company) {
    return companysData.saveCompany(company);
}
