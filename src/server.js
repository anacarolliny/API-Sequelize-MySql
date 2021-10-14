const express = require("express")
const routes = require("./routes")

const cookieParser = require("cookie-parser")//para nosso servidor trabalhar com cookie, transladar dados
const cors = require("cors") // para conseguir trabalhar com outros dominios

require("./database") // vai querer o banco, apenas apontando

const app = express() // atribuindo a essa const essa biblioteca em formato de funçãp
//conseguimos chamar funções do express atraves do app agora

app.use(cors())//use é do express
app.use(cookieParser())
app.use(express.json())//vamos enviar e receber dados em formato json
app.use(routes)//vamos usar as rotas que estao sendo importadas

app.listen(3333)//executar o projeto em qual porta

