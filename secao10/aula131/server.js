const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))


//  usando '/' << Home da Pagina
app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
    NOME do Client: <input type="text" name="nome">
    <button>CliqueAqui</button>
    </form>`)
})


// app.get('/teste',(req,res) //com essa informação voce consegue acessar a rota testes
app.get('/teste/:idUsuarios?',(req,res) =>{ //usandoidusuarios ele nao acessa a rota testes sem acrescentar /qualquerCoisa use sempre ? apos o final
    //que significa que ele pode ou nao receber o informação apos rota
    console.log(req.params)
    console.log(req.query)
    res.send('oi')//mensagem apos acessar rota
})

//é nescessario fazer o tratamento do post atraves do app.use(express.urlencoded({extended:true}))
//Usado para formularios
app.post('/',(req,res) => {
    console.log(req.body)
    res.send(`Captei vossa menagem!! MENSAGEM: ${req.body.conteudo}`)
})

app.get('/contato',(req,res) => {
    res.send('Thank you')
})


app.listen(3000, ()=>{
    console.log('Iniciando Server em http://localhost:3000')
})