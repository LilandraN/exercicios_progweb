const express = require('express');
const router = express.Router();
const typesService = require('../service/typesService');

router.get('/types', async function(req, res) {
    const type = await typesService.getTypes();
    res.json(type);
});

router.get('/type/:idTipo', async function(req, res) {
    const type = await typesService.getType(req.params.idTipo);
    res.json(type);
});

router.delete('/type/:idTipo', async function(req, res){
    const type = await typesService.deleteType(req.params.idTipo);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/type', async function(req, res){
    const type = req.body;
    const newType = await typesService.saveType(type.type);
    return res.json([{message: 'Cadastrado com sucesso'}]);
});

module.exports = router;