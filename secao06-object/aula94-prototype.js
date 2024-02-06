function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(perc){
    this.preco = this.preco - ( this.preco *(perc/100))
}

let p1 = new Produto('Calça', 120)
const p2 = Object.create(Produto.prototype,{
    nome: {
        writable:true,
        configurable:true,
        enumerable:true,
        value:"oculos"
    },
    preço:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:50
    }
})

const p3 = {
    nome:"caneca" ,
    preco:3
}

Object.setPrototypeOf(p3,Produto.prototype)

p1.desconto(20)
p2.desconto(25)
p3.desconto(50)

console.log(p1)
console.log(p2)
console.log(p3)
