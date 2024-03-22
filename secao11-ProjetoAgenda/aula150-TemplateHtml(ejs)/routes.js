const express = require('express') //carrega o express
const route = express.Router() 
const loginController = require('./src/controllers/loginController')
const homeController = require('./src/controllers/homeController')


//Devido a rota o mesmo busca get no controller
route.get('/',homeController.index)//acrescentado o middleware de teste

//Rotas de Login
route.get('/login/index', loginController.index)

//importante para expotar modulo a outros jS
module.exports = route;