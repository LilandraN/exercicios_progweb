const dependentsData = require('../data/dependentsData');

exports.getDependents = function() {
    return dependentsData.getDependents();
}

exports.getDependent = function(dependentID) {
    return dependentsData.getDependent(dependentID);
}

exports.getDependentsWithUser = function(userid) {
    return dependentsData.getDependentsWithUser(userid);
}

exports.deleteDependent = function (dependentID) {
    return dependentsData.deleteDependent(dependentID);
}

exports.saveDependent = function(dependent) {
    return dependentsData.saveDependent(dependent);
}