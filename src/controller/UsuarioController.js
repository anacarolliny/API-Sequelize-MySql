const Usuario = require("../model/Usuario")


module.exports = {
    async index(req, res){
        const usuario = await Usuario.findAll() //listar todos os dados / select * from usuario
        return res.json(usuario)
    //função retorna todos os dados
    },
    
    async findById(req, res){
        const {id} = req.params
        const usuario = await Usuario.findAll({
            where : {
                id: id 
            }
        }) //listar todos os dados / select * from usuario
        return res.json(usuario)
    //função retorna todos os dados
    },
    
    async criarUsuario(req, res){
        const {nome, senha} = req.body
        
        const usuario = await Usuario.create({
            nome , senha
        }) //listar todos os dados / select * from usuario
        return res.json(usuario)
    //função retorna todos os dados
    },

    async delete(req, res){
        const {id} = req.params
        
        const usuario = await Usuario.destroy({
            where : {
                id : id
            }
        }) //listar todos os dados / select * from usuario
        return res.json(usuario)
    //função retorna todos os dados
    },

    async update(req, res){
        const {id, nome, senha} = req.body
        
        const usuario = await Usuario.update({
            nome,senha },{
            where : {
                id : id
            }
        }) //listar todos os dados / select * from usuario
        return res.json(usuario)
    //função retorna todos os dados
    },

}