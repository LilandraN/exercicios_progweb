const placesData = require('../data/placesData');

exports.getPlaces = function() {
    return placesData.getPlaces();
}

exports.getPlace = function(placeID) {
    return placesData.getPlace(placeID);
}

exports.deletePlace = function (placeID) {
    return placesData.deletePlace(placeID);
}

exports.savePlace = function(place) {
    return placesData.savePlace(place);
}
