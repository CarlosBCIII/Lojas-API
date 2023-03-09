
const loginrouter = require('express-promise-router')() // parenteses nessa biblioteca
const loginController = require('../controllers/login.controller')

loginrouter.post('/create', loginController.createLogin)

loginrouter.post('/', loginController.checaLogin)

module.exports = loginrouter