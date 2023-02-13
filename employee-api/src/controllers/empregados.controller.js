/* eslint-disable no-unused-vars */
// responsável pela lógica do CRUD empregados

const db = require('../config/database')


exports.createEmpregado = async(req, res) => {
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

exports.listaEmpregado = async(req, res) => {

    const response = await db.query('SELECT * FROM empregados ORDER BY nome ASC');

    res.status(200).send(response.rows)
}