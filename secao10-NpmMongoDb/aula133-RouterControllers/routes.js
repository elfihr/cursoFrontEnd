const express = require('express') //carrega o express
const route = express.Router() 
const homeController = require('./controllers/homeController')
const contatoController = require(`./controllers/contatoController`)

//Devido a roa o mesmo busca get no controller
route.get('/',homeController.paginaInicial )//usara o modulo do homeController

route.post('/',homeController.trataPost)

route.get('/contato',contatoController.paginaInicial)

//importante para expotar modulo a outros jS
module.exports = route;