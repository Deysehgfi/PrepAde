import express from "express"
import cors from "cors"
import conn from "./config/config.js"


//models 
import Empresa from "./models/Empresa-Model.js"
import Usuarios from "./models/Usuarios-Model.js"
import Postagens from "./models/Postagens-Models.js"
import Curtida from "./models/Curtida-Model.js"
import Comentarios from "./models/Comentario-Model.js"


//rotas 

import EmpresaRouter from "./routes/Empresas-Router.js"
import UsuariosRoouter from "./routes/Usuarios-Router.js"
import PostagensRouter from "./routes/Postagem-ROute.js"


const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

conn.sync().then().catch((error)=> console.error(error))
//se o banco de dados conectar,then catch se não dara error

app.use('/empresa', EmpresaRouter)
app.use('/usuarios', UsuariosRoouter)
app.use('/postagens', PostagensRouter )


app.use((request, response)=>{
    response.status(404).json({err: "Rota não encontrada"})
})

export default app;

