import { DataTypes } from "sequelize";
import conn from "../config/config.js";


import Usuarios from "./Usuarios-Model.js";
import Postagens from "./Postagens-Models.js";

const Curtida = conn.define("curtida", {
    tipo_avaliacao: {
        type: DataTypes.ENUM(["up", "down"]),
        allowNull: false
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
}, { tableName: 'curtidas' })
//
Usuarios.belongsToMany(Postagens, {
    through: Curtida,
    foreingKey: 'usuario_id',
    otherKey: 'postagem_id'
})

//
Postagens.belongsToMany(Usuarios, {
    through: Curtida,
    foreingKey: 'postagem_id',
    otherKey: 'usuario_id'
})

export default Curtida;