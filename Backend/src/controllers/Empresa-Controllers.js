import Empresa from "../models/Empresa-Model.js"

export const create = async (request, response) => {
    const { nome, imagem } = request.body


    try {
        await Empresa.create({nome, imagem});
        response.status(201).json("criado")
    } catch (error) {
        response.status(500).json({err: {error}})
    }
}