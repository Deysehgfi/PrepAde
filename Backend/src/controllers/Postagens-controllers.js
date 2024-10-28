import { literal } from "sequelize";
import Comentarios from "../models/Comentario-Model.js";
import Postagens from "../models/Postagens-Models.js"

export const create = async (request, response) => {
    const { titulo, local, cidade, imagem, id_empresa } = request.body


    try {
        await Postagens.create({ titulo, local, cidade, imagem, id_empresa });
        response.status(201).json("criado")
    } catch (error) {
        response.status(500).json({ err: { error } })
    }
}

export const getAll = async (request, response) => {
    try {
        const postagensinfo = await Postagens.findAll({
            attributes: [
                'id',
                'titulo',
                'local',
                'cidade',
                'imagem',
                [literal(`(
                SELECT COUNT(*) FROM curtidas
                WHERE curtidas.postagem_id = postagem.id
                AND curtidas.tipo_avaliacao = 'up'
            )`), "total likes"],
                [literal(`(
                SELECT COUNT(*) FROM curtidas
                WHERE curtidas.postagem_id = postagem.id
                AND curtidas.tipo_avaliacao = 'down'
            )`), "total deslikes"]
            ]
        })
        console.log('postagem =>>>', postagensinfo)
        response.status(200).json(postagensinfo)
    } catch (error) {
        console.log(error)
        response.status(500).json({ err: 'Erro ao buscar postagem' })
    }
}


export const getPostagem = async (request, response) => {
    const { id } = request.params

    try {
        const postagem = await Postagens.findOne({
            where: { id },
            attributes: [
                'id',
                'titulo',
                'local',
                'cidade',
                'imagem',
                [literal(`(
                    SELECT COUNT(*) FROM curtidas
                    WHERE curtidas.postagem_id = postagem.id
                    AND curtidas.tipo_avaliacao = 'up'
                )`), "total likes"],
                [literal(`(
                    SELECT COUNT(*) FROM curtidas
                    WHERE curtidas.postagem_id = postagem.id
                    AND curtidas.tipo_avaliacao = 'down'
                )`), "total deslikes"]
            ]
        })
        const ComentariosPostagens = await Comentarios.findAll({
            raw: true,
            where: { postagem_id: postagem.id },
        })
        postagem.comentarios = ComentariosPostagens
        response.status(200).json({postagem, ComentariosPostagens})
    } catch (error) {
        console.log(error)
        response.status(500).json({ err: "Error ao buscar postagem" })
    }
}

