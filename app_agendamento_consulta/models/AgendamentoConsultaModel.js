const { DataTypes } = require('sequelize');
const db = require('../db');

const AgendamentoConsultaModel = db.define('AgendamentoConsulta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: { type: DataTypes.STRING, allowNull: false },
    sobrenome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false },
    data_nascimento: { type: DataTypes.DATE, allowNull: false },
});


// const AgendamentoConsultaModel = {
//     nome: String,
//     email: String,
//     telefone: String,
//     data_nascimento: Date,
// }

module.exports = AgendamentoConsultaModel;