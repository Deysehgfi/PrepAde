import Postagens from "../models/Postagens-Models.js"

export const create = async (request, response) => {
    const { titulo, local, cidade , imagem, id_empresa} = request.body


    try {
        await Postagens.create({titulo, local,cidade , imagem, id_empresa});
        response.status(201).json("criado")
    } catch (error) {
        response.status(500).json({err: {error}})
    }
}