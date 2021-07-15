const typesData = require('../data/typesData');

exports.getTypes = function() {
    return typesData.getTypes();
}

exports.getType = function(typeID) {
    return typesData.getType(typeID);
}

exports.deleteType = function (typeID) {
    return typesData.deleteType(typeID);
}

exports.saveType = function(type) {
    return typesData.saveType(type);
}