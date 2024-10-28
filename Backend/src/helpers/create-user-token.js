import jwt from "jsonwebtoken"

export const createUserToken = (usuario, request, response) => {
    console.log('usuario ==>', usuario)
    console.log('request ==>', request)
    console.log('response ==>', response)

    const token = jwt.sign(
        {//payload-> info usuario
            id: usuario.id,
        nome:usuario.nome,
    email: usuario.email,
nickname: usuario.nickname},
        "SENHASUPERSEGURA" ,//senha,
        {
            expiresIn:'24h'
        }
    )

    response.status(200).json({
        message: "Você está logado",
        token,
    })
}