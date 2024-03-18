const mongoose = require('mongoose')

//Essa validação pra tratamento de dados visto que sem eles será salvo de qualquer 
//forma sem a configuracao
const HomeSchema = new mongoose.Schema({
    titulo: {type:String,require:true},
    decricao:String
})

const HomeModel = mongoose.model('Home',HomeSchema)

module.exports = HomeModel