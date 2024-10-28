import { request, response } from "express";
import Usuarios from "../models/Usuarios-Model.js"
import createUserToken from "../helpers/create-user-token.js"
export const create = async (request, response) => {
    const { nome, imagem, email , nickname, senha} = request.body


    try {
        await Usuarios.create({nome, imagem, email , nickname, senha});
        response.status(201).json("criado")
    } catch (error) {
        response.status(500).json({err: {error}})
    }
}


export const logout = (request,response) => {
    response.status(200).json({message: "Você saiu da aplicação"})
}

export const login = async (request, response) => {
    const { email , senha } = request.body;

    try{
        const usuario = await Usuarios.findOne({ where: {email}});

        if(!email){
            response.status(404).json({message: "Usuário não encontrado"})
            return
        }
        if(usuario.senha !== senha){
            response.status(400).json({message: "Senha não conferem"})
            return
        }

        createUserToken(usuario, request, response)


    } catch(error) {
        console.error(error)
        response.status(500).json({err: "Erro ao fazer login"})
    }
}