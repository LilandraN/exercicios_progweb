const express = require('express');
const router = express.Router();
const dependentsService = require('../service/dependentsService');
const clientsService = require('../service/clientsService');

router.get('/dependents', async function(req, res) {
    const dependent = await dependentsService.getDependents();
    res.json(dependent);
});

router.get('/dependent/:idDependente', async function(req, res) {
    const dependent = await dependentsService.getDependent(req.params.idDependente);
    res.json(dependent);
});

router.get('/dependent/user/:idCliente', async function (req, res) {
    const dependent = await dependentsService.getDependentsWithUser(req.params.idCliente);
    let fullDependents= [];
    let aux = [];
    let j = 0;
    for (let i = 0; i <= dependent.length - 1; i++) {
        aux[0] = await clientsService.getClientByCpf(dependent[i].cpf);
        if(aux[0].length === 0){ 
            j = i - 1;
        }
        if (aux[0].length > 0) {
            fullDependents[j] = aux[0].pop();
        }
        j++;
    }
    res.json(fullDependents);
});

router.delete('/dependent/:idDependente', async function(req, res){
    const dependent = await dependentsService.deleteDependent(req.params.idDependente);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/dependent', async function(req, res){
    const dependent = req.body;
    const newDependent = await dependentsService.saveDependent(dependent.dependent);
    return res.json([{message: 'Cadastrado com sucesso'}]);
});

module.exports = router;