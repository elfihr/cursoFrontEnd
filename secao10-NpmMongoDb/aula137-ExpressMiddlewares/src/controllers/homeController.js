exports.paginaInicial = (req,res) => {
    res.render('index') //renderiza o index.js na pasta views
    return
}

exports.trataPost = (req,res) =>{
    res.send(req.body)
}