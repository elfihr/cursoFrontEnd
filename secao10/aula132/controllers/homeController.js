exports.paginaIncial = (req,res) => {
    res.send(`
    <form action="/" method="POST">
    NOME do Client: <input type="text" name="nome">
    <button>CliqueAqui</button>
    </form>`)
}

exports.trataPost = (req,res) =>{
    res.send('nova rota')
}