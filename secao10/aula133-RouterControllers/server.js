const express = require('express')
const app = express()
const routes = require('./routes')//importa as rotas pro server

app.use(express.urlencoded({extended:true}))
app.use(routes);//Inicia as rotas

//Clique no link pelo teminal apos iniciar ou copie e cole o link abaixo
app.listen(3000, ()=>{
    console.log('Iniciando Server em http://localhost:3000')
})
