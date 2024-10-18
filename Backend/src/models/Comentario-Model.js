import { DataTypes } from "sequelize";
import conn from "../config/config.js";


import Usuarios from "./Usuarios-Model.js";
import Postagens from "./Postagens-Models.js";

const Comentarios = conn.define("comentarios",{
    comentarios:{
        type: DataTypes.STRING,
        validate: { 
            min: 3,
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: "id"
        }
    },
    postagem_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Postagens,
            key: "id"
        }
    }

},{tableName: "comentarios"})

Usuarios.belongsToMany(Postagens, {
    through: Comentarios,
    foreingKey: 'usuario_id',
    otherKey: 'postagem_id'
})

//
Postagens.belongsToMany(Usuarios, {
    through: Comentarios,
    foreingKey: 'postagem_id',
    otherKey: 'usuario_id'
})


export default Comentarios;