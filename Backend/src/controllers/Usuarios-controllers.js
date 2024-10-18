import Usuarios from "../models/Usuarios-Model.js"

export const create = async (request, response) => {
    const { nome, imagem, email , nickname, senha} = request.body


    try {
        await Usuarios.create({nome, imagem, email , nickname, senha});
        response.status(201).json("criado")
    } catch (error) {
        response.status(500).json({err: {error}})
    }
}