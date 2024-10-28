import Curtida from "../models/Curtida-Model.js";
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

export const getEmpresa = async (request, response ) => {
    try {
        const infoEmpresa = await Empresa.findAll({raw: true})
       

        const like = await Curtida.count({
            where: {tipo_avaliacao: 'up'}
        })
        console.log('like ==>',like)

        
        const deslike = await Curtida.count({
            where: {tipo_avaliacao: 'down'}
        })
        console.log('deslike ==>',deslike)

        const empres = {
            id: infoEmpresa[0].id,
            nome: infoEmpresa[0].nome,
            imagem: infoEmpresa[0].imagem,
            likes: like,
            deslikes: deslike
        }
        console.log(empres)
        response.status(200).json(empres)
    } catch (error) {
        console.log(error)
        response.status(500).json({err: "Erro ao buscar dados da empresa"})
    }
}