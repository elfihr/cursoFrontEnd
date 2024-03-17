const express = require('express') //carrega o express
const route = express.Router() 
const homeController = require('./src/controllers/homeController')
const contatoController = require(`./src/controllers/contatoController`)

//middleware sao os "req" e "res" de requisição e resposta.
//criado um novo middleware para usar como "next"
function meuMiddleware(req,res,next) {//nao esqueça next
    req.session = {nome: 'Serena'}
    console.log()
    console.log('Teste MiddleWare');//msg sai no terminal
    console.log()
    next()//sempre coleque o next() para o navegador terminar a rquisição
    //caso contrario ficara carregando e nao iniciara a seguinte
}

//Devido a roa o mesmo busca get no controller
route.get('/',homeController.paginaInicial)//acrescentado o middleware de teste
route.post('/',homeController.trataPost)

route.get('/contato',contatoController.paginaInicial)

//importante para expotar modulo a outros jS
module.exports = route;