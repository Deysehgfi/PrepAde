import { DataTypes } from "sequelize";
import conn from "../config/config.js";

const Usuarios = conn.define("usuarios", {
    // id: {
    //     type: DataTypes.STRING,
    //     primaryKey: true
    // },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "usuarios" })

export default Usuarios;