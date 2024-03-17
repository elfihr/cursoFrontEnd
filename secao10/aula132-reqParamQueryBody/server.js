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
//usandoidusuarios ele nao acessa a rota testes sem acrescentar /qualquerCoisa use sempre ? apos o final
//que significa que ele pode ou nao receber o informação apos rota. /paramentro funciona da mesma forma idUsuario
app.get('/teste/:idUsuarios?/:paramentro?',(req,res) =>{ 
    console.log(req.params)
    //req.query leva o parametro lançado pro query
    console.log(req.query)
    res.send(req.params) 
})

//é nescessario fazer o tratamento do post atraves do app.use(express.urlencoded({extended:true}))
//Usado para formularios
app.post('/',(req,res) => {
    console.log(req.body)
    res.send(`Captei vossa menagem!! MENSAGEM: ${req.body.nome}`) //IMPORTANTE o .nome esta vindo da variavel do form
})

app.get('/contato',(req,res) => {
    res.send('Thank you')
})
//Clique no link pelo teminal apos iniciar ou copie e cole o link abaixo
app.listen(3000, ()=>{
    console.log('Iniciando Server em http://localhost:3000')
})
