const express = require('express');
const router = express.Router();
const companysService = require('../service/companysService');

router.get('/companys', async function(req, res) {
    const companys = await companysService.getCompanys();
    res.json(companys);
});

router.get('/company/:id', async function(req, res) {
    const company = await companysService.getPurchase(req.params.id);
    res.json(company);
});

router.delete('/company/:id', async function(req, res){
    const company = await companysService.deleteCompany(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/company', async function(req, res){
    const company = req.body;
    const newCompany = await companysService.saveCompany(company);
    res.json(newCompany);
});
