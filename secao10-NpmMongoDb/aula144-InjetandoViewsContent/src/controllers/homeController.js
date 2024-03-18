exports.paginaInicial = (req,res) => {
    res.render('index',{
        titulo: 'Titulo da Pagina',
        numeros:[0,2,4,5,6,7]
    }) //renderiza o index.js na pasta views
    return
}

exports.trataPost = (req,res) =>{
    res.send(req.body)
}