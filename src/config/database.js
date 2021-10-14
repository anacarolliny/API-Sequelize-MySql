//aqui eu digo que tudo que tiver nesse bloco ficara visivel para todos as demais pastas

module.exports = {
    dialect : "mysql",
    host:"localhost",
    username:"root2",
    port: "3306",
    password:"123456",
    database:"backendMysql",
    define:{
        timestamps:false, //data de criação e de modificação,
        underscored:true // pra ter o underline nessa configuracao
    }
}