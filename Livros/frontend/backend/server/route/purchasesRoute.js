const express = require('express');
const router = express.Router();
const purchasesService = require('../service/purchasesService');

router.get('/purchases', async function(req, res) {
    const purchases = await purchasesService.getPurchases();
    res.json(purchases);
});

router.get('/purchase/:id', async function(req, res) {
    const purchase = await purchasesService.getPurchase(req.params.id);
    res.json(purchase);
});

router.delete('/purchase/:id', async function(req, res){
    const purchase = await purchasesService.deletePurchase(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/purchase', async function(req, res){
    const purchase = req.body;
    const newPurchase = await purchasesService.savePurchase(purchase);
    res.json(newPurchase);
});