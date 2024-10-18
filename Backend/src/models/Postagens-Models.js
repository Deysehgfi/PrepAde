import { DataTypes } from "sequelize";
import conn from "../config/config.js";

import Empresa from "./Empresa-Model.js";


const Postagens = conn.define("postagem", {

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "postagem" })


//relacionamento de um para muitos 


//uma empresa tem varias postagens
Empresa.hasMany(Postagens, /*chave estrangeira*/{ 
    foreignKey: 'id_empresa'
})


//uma postagen pertence a um usario 
Postagens.belongsTo(Empresa,/*chave estrangeira*/{
    foreignKey: 'id_empresa'
})

export default Postagens;