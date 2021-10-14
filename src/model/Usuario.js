const {Model, DataTypes } = require("sequelize") // model e datatypes do sequelize para informar que é um model e faalar cada tipo de um dado do banco

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome:DataTypes.STRING,
            senha: DataTypes.STRING,
        },{
            sequelize // aqui ele conecta com banco atraves do parametro
        })
    }
}


module.exports = Usuario