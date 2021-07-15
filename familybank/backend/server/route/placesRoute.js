const express = require('express');
const router = express.Router();
const placesService = require('../service/placesService');

router.get('/places', async function(req, res) {
    const place = await placesService.getPlaces();
    res.json(place);
});

router.get('/place/:idLugares', async function(req, res) {
    const place = await placesService.getPlace(req.params.idLugares);
    res.json(place);
});

router.delete('/place/:idLugares', async function(req, res){
    const place = await placesService.deletePlace(req.params.idLugares);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/place', async function(req, res){
    const place = req.body;
    const newPlace = await placesService.savePlace(place.place);
    return res.json([{message: 'Cadastrado com sucesso'}]);
});

module.exports = router;