const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
    NOME do Client: <input type="text" name="nome">
    <button>CliqueAqui</button>
    </form>`)
})

app.get('/teste',(req,res) =>{
    console.log(req.params)
    res.send('oi')//apos acessar a rota /teste

})

app.post('/',(req,res) => {
    res.send('Captei Vossa mensagem')
})

app.get('/contato',(req,res) => {
    res.send('Thank you')
})


app.listen(3000, ()=>{
    console.log('Iniciando Server em http://localhost:3000')
})