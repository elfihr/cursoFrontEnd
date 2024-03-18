require('dotenv').config()//fara com que a senha nao sea enviado ao git

const express = require('express')
const app = express()

//Configuração Mongoose
const mongoose = require('mongoose')

//connectionString é pego no mongoDB
mongoose.connect(process.env.CONNECTIONSTRING)//conexao com .env
    .then(() =>{app.emit('pronto')})//promise para mongoose conectar na ordem correta
    .catch(e => console.log(e))//captura de erro pelo mongoose

const session = require('express-session')//salva seção na memoria
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')//mensagens instantaneas

const routes = require('./routes')//importa as rotas pro server
const path = require('path')//conf path no app.use
const {middlewareGlobal,outroMidleware} = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname, 'public')))//ajustando path no public

const sessionsOptions = session({
    secret: 'coderandom123456789',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), //cliente de conexao usado (mongoose)
    resave:false, //resave = salva pra qualquer request do user
    saveUninitialized:false, //saveUninitialized = estado da seção se esta iniciado ou nao
    cookie:{
        maxAge: 1000 * 60 *60 * 24, //1000 = milesegunos * 60 = segundos * 60 = minutos * 24 = horas * 7 = dias
        httpOnly:true
    }
})

app.use(sessionsOptions)//Iniciar sessionsOptions
app.use(flash())//Inicia o flash

app.set('views',path.resolve(__dirname,'src','views'))//setando conf do path
app.set('view engine','ejs');//setando engine para ejs
//TesteMiddleWare
app.use(middlewareGlobal)
app.use(outroMidleware)

app.use(routes);//Inicia as rotas

//pega o sinal mongoose app.emit para fazer o banco conectar na ordem correta
app.on('pronto', () => {
    //Clique no link pelo terminal apos iniciar ou copie e cole o link abaixo
    app.listen(3000, ()=>{
    console.log()
    console.log('Iniciando Server em http://localhost:3000')
    })
})


