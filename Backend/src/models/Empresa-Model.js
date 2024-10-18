import { DataTypes } from "sequelize";
import conn from "../config/config.js";


// const Empresa =  conn.define("nomeTabela", {

// }, {})

const Empresa = conn.define("empresas", {
    // id: {
    //     type: DataTypes.STRING,
    //     primaryKey: true
    // },
    nome: {
        type: DataTypes.STRING,
        allowNull: false //permitir nulo. false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "empresas" })

export default Empresa;