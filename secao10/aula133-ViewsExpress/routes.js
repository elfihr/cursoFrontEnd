const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require(`./src/controllers/contatoController`)

//Devido a roa o mesmo busca get no controller
route.get('/',homeController.paginaIncial )

route.post('/',homeController.trataPost)

route.get('/contato',contatoController.paginaIncial)

//importante para expotar modulo a outros jS
module.exports = route