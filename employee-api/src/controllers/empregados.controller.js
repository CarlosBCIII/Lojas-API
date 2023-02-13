/* eslint-disable no-unused-vars */
// responsável pela lógica do CRUD empregados

const db = require('../config/database')

//Metodo para criar registro colaborador
exports.createEmpregados = async(req, res) => {
    const { nome, cargo, salario, inicio_contrato, final_contrato, registro } = req.body;
    const { rows } = await db.query(
        "INSERT INTO empregados(nome,cargo,salario,inicio_contrato,final_contrato,registro) VALUES ($1,$2,$3,$4,$5,$6)", [nome, cargo, salario, inicio_contrato, final_contrato, registro]);
    res.status(201).send({
        message: 'Colaborador incluido com sucesso.',
        body: {
            empregados: { nome, cargo, salario, inicio_contrato, final_contrato, registro },
        },

    })
}

//Metodo para listar todos registros colaboradores
exports.listaEmpregados = async(req, res) => {

    const response = await db.query('SELECT * FROM empregados ORDER BY nome ASC');

    res.status(200).send(response.rows)
}

//Metodo para buscar registro colaborador pelo Codigo

exports.listaEmpregadosID = async(req, res) => {

    const codigoColaborador = req.params.codigo

    const response = await db.query('SELECT * from empregados WHERE codigo= $1', [codigoColaborador])

    res.status(200).send(response.rows)
}

//Metodo para buscar registro colaborador pelo registro

exports.listaEmpregadosRegistro = async(req, res) => {

    const registroColaborador = req.params.registro

    const response = await db.query('SELECT * from empregados WHERE registro= $1', [registroColaborador])

    res.status(200).send(response.rows)
}

//Metodo para buscar registro colaborador por nome

exports.listaEmpregadosNome = async(req, res) => {

    const nomeColaborador = '%' + req.params.nome + '%' // % para buscar por parte do nome

    const response = await db.query('SELECT * from empregados WHERE nome ILIKE $1 ', [nomeColaborador])

    res.status(200).send(response.rows)
}

exports.atualizaEmpregadosCodigo = async(req, res) => {
    const empregadoCodigo = req.params.codigo
    const { nome, cargo, salario, inicio_contrato, final_contrato, registro } = req.body;
    const response = await db.query(`UPDATE empregados SET nome = $1, cargo = $2, salario = $3, inicio_contrato = $4, final_contrato = $5, registro = $6 WHERE codigo = $7`, [nome, cargo, salario, inicio_contrato, final_contrato, registro, empregadoCodigo])

    res.status(200).send({ message: 'Atualização efetuada com sucesso' })

}
exports.atualizaEmpregadosRegistro = async(req, res) => {
    const empregadoRegistro = req.params.registro
    const { nome, cargo, salario, inicio_contrato, final_contrato, registro } = req.body;
    const response = await db.query(`UPDATE empregados SET nome = $1, cargo = $2, salario = $3, inicio_contrato = $4, final_contrato = $5 WHERE registro = $6`, [nome, cargo, salario, inicio_contrato, final_contrato, empregadoRegistro])

    res.status(200).send({ message: 'Atualização efetuada com sucesso' })

}

exports.deletaEmpregadosCodigo = async(req, res) => {
    const empregadoCodigo = req.params.codigo

    await db.query('DELETE FROM empregados WHERE codigo =$1', [empregadoCodigo])

    res.status(200).send({ message: 'Colaborador deletado com sucesso' })

}

exports.deletaEmpregadosRegistro = async(req, res) => {
    const empregadoRegistro = req.params.registro

    await db.query('DELETE FROM empregados WHERE registro =$1', [empregadoRegistro])

    res.status(200).send({ message: 'Colaborador deletado com sucesso' })
}