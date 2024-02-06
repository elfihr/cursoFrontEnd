function Produto(nome,preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(qtda){
    this.preco += qtda
}

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco),
    this.cor = cor
}

function Chapeu(nome,preco,material){
    Produto.call(this,nome,preco),
    this.material = material
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Chapeu.prototype = Object.create(Produto.prototype)
Chapeu.prototype.constructor = Chapeu 

 

const camiseta = new Camiseta('Regata',7.5,"azul")
const generico = new Produto('generico',1)
const bone = new Chapeu('bone de aba',59,'nilon')
camiseta.aumento(5)
console.log(generico)
console.log(camiseta)
console.log(bone)