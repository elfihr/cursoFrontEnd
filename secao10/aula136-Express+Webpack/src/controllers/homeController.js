exports.paginaInicial = (req,res) => {
    res.render('index') //renderiza o index.js na pasta views
}

exports.trataPost = (req,res) =>{
    res.send('Post Recebido')
}