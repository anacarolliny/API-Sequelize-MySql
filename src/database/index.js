//esta pasta vai servir para colocar as migrations
//vamos iniciar aqui o sequelize

const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const Usuario = require("../model/Usuario")

const connection = new Sequelize(dbConfig) // aqui vamos dizer que vamos startar o banco com o sequelize
//com o dbconfig, criando um novo sequelize com o banco criado anteriormente em database.js

Usuario.init(connection)//importei o model usuario e iniciei o model na aplicacao

module.exports = connection // vamos exportar para toda a conexão