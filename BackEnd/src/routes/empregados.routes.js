/* eslint-disable no-unused-vars */
const router = require('express-promise-router')() // parenteses nessa biblioteca
const usuariosController = require('../controllers/empregados.controller')

//==>Rota para criar colaborador'Colaborador':(POST):localhost:3000/api/employees

router.post('/employees', usuariosController.createUsuarios)

// Rota listr todos colaboradores :(GET):localhost:3000/api/employees

router.get('/employees', usuariosController.listaUsuarios)

// Rota listr colaborador por IDs :(GET):localhost:3000/api/employees/id/

router.get('/employees/id/:codigo', usuariosController.listaUsuariosID)

// Rota listr colaborador por Registro :(GET):localhost:3000/api/employees/registro/

router.get('/employees/registro/:registro', usuariosController.listaUsuariosRegistro)

// Rota listr colaborador por Registro :(GET):localhost:3000/api/employees/nome/

router.get('/employees/nome/:nome', usuariosController.listaUsuariosNome)

// Rota atualizar por ID :(PUT):localhost:3000/api/employees/id/

router.put('/employees/id/:codigo', usuariosController.atualizaUsuariosCodigo)

// Rota atualizar por Regsitro :(PUT):localhost:3000/api/employees/registro/

router.put('/employees/registro/:registro', usuariosController.atualizaUsuariosRegistro)

// Rota deletar por  ID :(PUT):localhost:3000/api/employees/id/

router.delete('/employees/id/:codigo', usuariosController.deletaUsuariosCodigo)

// Rota deletar por Regsitro :(PUT):localhost:3000/api/employees/registro/

router.delete('/employees/registro/:registro', usuariosController.deletaUsuariosRegistro)


module.exports = router