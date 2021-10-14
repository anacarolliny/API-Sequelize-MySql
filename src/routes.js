const express = require("express")
const UsuarioController = require("./controller/UsuarioController")
const Usuario = require("./model/Usuario")

const routes = express.Router()//recebe a biblioteca dentro do express que cria rotas

routes.get("/", (req, res) =>{
    res.send("Seja bem vindo a minha API")
})
routes.get("/usuario", UsuarioController.index) 
routes.get("/usuario/:id", UsuarioController.findById) 
routes.post("/usuario", UsuarioController.criarUsuario) 
routes.delete("/usuario/:id", UsuarioController.delete) 
routes.put("/usuario", UsuarioController.update) 

module.exports = routes // exportando o routes para ficar visivel para outras pastas