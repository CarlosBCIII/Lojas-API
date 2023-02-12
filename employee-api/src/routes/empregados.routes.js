/* eslint-disable no-unused-vars */
const router = require('express-promise-router')() // parenteses nessa biblioteca
const empregadosController = require('../controllers/empregados.controller')

//==>Rota para criar colaborador'Colaborador':(POST):localhost:3000/api/employees

router.post('/employees', empregadosController.createEmpregado)


module.exports = router