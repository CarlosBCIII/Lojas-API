
const db = require('../config/database')

exports.checaLogin = async(req, res) => {

  // eslint-disable-next-line no-unused-vars
  const criar = "Cadastrar"
  // eslint-disable-next-line no-unused-vars
  const {email, pass, lembrar} =  req.body

  const response = await db.query('SELECT mail_login, password_login FROM users_logins WHERE mail_login=$1 AND password_login=$2 ', [email,pass])

  if(response.rows.length>0)
    res.status(200).send({
      success: 'true',
      message: "Localizado",
      response:response.rows
  })//(response.rows)
  else
    //res.status(204).send(response)
    //
    res.status(404).send({
      success: 'false',
      message: "Deseja Criar?"
      
  })
}


exports.createLogin = async(req, res) => {
  const { email, pass, lembrar } = req.body;
  console.log('Req Body',req.body)
  const { rows } = await db.query(
      "INSERT INTO users_logins(mail_login,password_login,lembrar_login) VALUES ($1,$2,$3)", [email,pass,lembrar]);
  res.status(201).send({
      message: 'Login incluido com sucesso.',
      body: {
          login: { email,pass,lembrar },
          row:rows
      },

  })
}