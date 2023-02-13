/* eslint-disable no-unused-vars */
const router = require('express-promise-router')() // parenteses nessa biblioteca
const empregadosController = require('../controllers/empregados.controller')

//==>Rota para criar colaborador'Colaborador':(POST):localhost:3000/api/employees

router.post('/employees', empregadosController.createEmpregados)

// Rota listr todos colaboradores :(GET):localhost:3000/api/employees

router.get('/employees', empregadosController.listaEmpregados)

// Rota listr colaborador por IDs :(GET):localhost:3000/api/employees/id/

router.get('/employees/id/:codigo', empregadosController.listaEmpregadosID)

// Rota listr colaborador por Registro :(GET):localhost:3000/api/employees/registro/

router.get('/employees/registro/:registro', empregadosController.listaEmpregadosRegistro)

// Rota listr colaborador por Registro :(GET):localhost:3000/api/employees/nome/

router.get('/employees/nome/:nome', empregadosController.listaEmpregadosNome)

// Rota atualizar por ID :(PUT):localhost:3000/api/employees/id/

router.put('/employees/id/:codigo', empregadosController.atualizaEmpregadosCodigo)

// Rota atualizar por Regsitro :(PUT):localhost:3000/api/employees/registro/

router.put('/employees/registro/:registro', empregadosController.atualizaEmpregadosRegistro)

// Rota deletar por  ID :(PUT):localhost:3000/api/employees/id/

router.delete('/employees/id/:codigo', empregadosController.deletaEmpregadosCodigo)

// Rota deletar por Regsitro :(PUT):localhost:3000/api/employees/registro/

router.delete('/employees/registro/:registro', empregadosController.deletaEmpregadosRegistro)


module.exports = router