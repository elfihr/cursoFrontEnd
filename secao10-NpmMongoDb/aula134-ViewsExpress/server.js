const express = require('express')
const app = express()
const routes = require('./routes')//importa as rotas pro server
const path = require('path')//conf path no app.use

app.use(express.urlencoded({extended:true}))
app.set('views',path.resolve(__dirname,'src','views'))//setando a conf do path
app.set('view engine','ejs');//setando engine para ejs

app.use(routes);//Inicia as rotas

//Clique no link pelo terminal apos iniciar ou copie e cole o link abaixo
app.listen(3000, ()=>{
    console.log('Iniciando Server em http://localhost:3000')
})
