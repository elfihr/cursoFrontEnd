const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname,'public')))

//express caminho pasta views
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')// << ejs para renderizar HTML 
//fazer expresse usar o route
app.use(routes)

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