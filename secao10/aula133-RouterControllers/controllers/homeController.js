exports.paginaInicial = (req,res) => {
    res.send(`
    <form action="/" method="POST">
    Requisição: <input type="text" name="nome">
    <button>CliqueAqui</button>
    </form>`)
}

exports.trataPost = (req,res) =>{
    res.send('Post Recebido')
}