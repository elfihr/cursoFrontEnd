const HomeModel = require('../models/homeModel')

HomeModel.create({
    titulo:'Titulo de teste',
    decricao:'Descricao de Teste'
})  //capura os dados ou o erro
    .then(dados => console.log(dados))
    .catch(e => console.loog(e))

exports.paginaInicial = (req,res) => {
    //req.session.usuario = { Nome:'Marcos',logado:true} teste
    //console.log(req.session.usuario)  //teste
    res.render('index') //renderiza o index.js na pasta views
    return
}

exports.trataPost = (req,res) =>{
    res.send(req.body)
}