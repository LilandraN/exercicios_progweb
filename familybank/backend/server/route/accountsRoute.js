const express = require('express');
const router = express.Router();
const accountsService = require('../service/accountsService');

router.get('/accounts', async function(req, res) {
    const accounts = await accountsService.getAccounts();
    res.json(accounts);
});

router.get('/account/:idUser', async function(req, res) {
    const account = await accountsService.getAccountByUserId(req.params.idUser);
    res.json(account[0]);
});

router.get('/account/:idConta', async function(req, res) {
    const account = await accountsService.getAccount(req.params.idConta);
    res.json(account);
});

router.delete('/account/:idConta', async function(req, res){
    const account = await accountsService.deleteAccount(req.params.idConta);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/account', async function(req, res){
    const account = req.body;
    const newAccount = await accountsService.saveAccount(account.account);
    return res.json([{message: 'Cadastrado com sucesso'}]);
});

module.exports = router;

