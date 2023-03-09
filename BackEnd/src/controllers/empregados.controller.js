/* eslint-disable no-unused-vars */
// responsável pela lógica do CRUD usuarios

const db = require('../config/database')

//Metodo para criar registro colaborador
exports.createUsuarios = async(req, res) => {
        //const { nome, cargo, salario, inicio_contrato, final_contrato, registro,meta_id,tipo_usuario_id } = req.body;
        const { nome, email, inicio_contrato } = req.body;
        const { rows } = await db.query(
          //"INSERT INTO usuarios(nome,cargo,salario,inicio_contrato,final_contrato,registro,meta_id,tipo_usuario_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [nome, cargo, salario, inicio_contrato, final_contrato, registro,meta_id,tipo_usuario_id]);
          "INSERT INTO usuarios(nome,email,inicio_contrato) VALUES ($1,$2,$3)", [nome, email, inicio_contrato]);
      res.status(201).send({
          message: 'Colaborador incluido com sucesso.',
          body: {
              //usuarios: { nome, cargo, salario, inicio_contrato, final_contrato, registro,meta_id,tipo_usuario_id },
              usuarios: { nome, email, inicio_contrato},
          },

      })
    }
    //Metodo para listar todos registros colaboradores
exports.listaUsuarios = async(req, res) => {

        const response = await db.query('SELECT * FROM usuarios ORDER BY nome ASC');

        res.status(200).send(response.rows)
    }
    //Metodo para buscar registro colaborador pelo Codigo
exports.listaUsuariosID = async(req, res) => {

        const codigoUsuario = req.params.codigo

        const response = await db.query('SELECT * from usuarios WHERE codigo= $1', [codigoUsuario])

        res.status(200).send(response.rows)
    }
    //Metodo para buscar registro colaborador pelo registro
exports.listaUsuariosRegistro = async(req, res) => {

        const registroUsuario = req.params.registro

        const response = await db.query('SELECT * from usuarios WHERE registro= $1', [registroUsuario])

        res.status(200).send(response.rows)
    }
    //Metodo para buscar registro colaborador por nome
exports.listaUsuariosNome = async(req, res) => {

        const nomeUsuario = '%' + req.params.nome + '%' // % para buscar por parte do nome

        const response = await db.query('SELECT * from usuarios WHERE nome ILIKE $1 ', [nomeUsuario])

        res.status(200).send(response.rows)
    }
    //Metodo para atualizar registro colaborador por codigo
exports.atualizaUsuariosCodigo = async(req, res) => {
        const usuarioCodigo = req.params.codigo
        const { nome, cargo, salario, inicio_contrato, final_contrato, registro,meta_id,tipo_usuario_id } = req.body;
        const response = await db.query(`UPDATE usuarios SET nome = $1, cargo = $2, salario = $3, inicio_contrato = $4, final_contrato = $5, registro = $6, meta_id= $7, tipo_usuario_id = $8 WHERE codigo = $9`, [nome, cargo, salario, inicio_contrato, final_contrato, registro,meta_id,tipo_usuario_id,usuarioCodigo])

        res.status(200).send({ message: 'Atualização efetuada com sucesso' })

    }
    //Metodo para atualizar registro colaborador por registro
exports.atualizaUsuariosRegistro = async(req, res) => {
        const usuarioRegistro = req.params.registro
        const { nome, cargo, salario, inicio_contrato, final_contrato, registro } = req.body;
        const response = await db.query(`UPDATE usuarios SET nome = $1, cargo = $2, salario = $3, inicio_contrato = $4, final_contrato = $5 WHERE registro = $6`, [nome, cargo, salario, inicio_contrato, final_contrato, usuarioRegistro])

        res.status(200).send({ message: 'Atualização efetuada com sucesso' })

    }
    //Metodo para deletar registro colaborador por codigo
exports.deletaUsuariosCodigo = async(req, res) => {
        const usuarioCodigo = req.params.codigo

        await db.query('DELETE FROM usuarios WHERE codigo =$1', [usuarioCodigo])

        res.status(200).send({ message: 'Colaborador deletado com sucesso' })

    }
    //Metodo para deletar registro colaborador por registro
exports.deletaUsuariosRegistro = async(req, res) => {
    const usuarioRegistro = req.params.registro

    await db.query('DELETE FROM usuarios WHERE registro =$1', [usuarioRegistro])

    res.status(200).send({ message: 'Colaborador deletado com sucesso' })
}

