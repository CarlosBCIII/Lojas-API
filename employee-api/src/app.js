 /**
  * Responsável pela conxão com server.js
  */
 const express = require('express'); //conecta com express e cors
 const cors = require('cors');

 const app = express();
 const index = require('./routes/index');
 const empregadosRotas = require('./routes/empregados.routes');

 app.use(express.urlencoded({ extended: true }))
 app.use(express.json())
 app.use(express.json({ type: 'application/vnd.api+json' }))
 app.use(cors())


 app.use(index)
 app.use('/api/', empregadosRotas)

 module.exports = app