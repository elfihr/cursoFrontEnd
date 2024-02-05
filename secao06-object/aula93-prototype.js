//eficiencia usando o modelo de prototipo evitando perda de qualidade de navegacao ao usuario

function Pessoa(nome,idade){
    this.nome = nome,
    this.idade = idade,
    //this.completeName = () => this.nome + ' '+this.idade
}

Pessoa.prototype.completeName = function(){
    return this.nome+ ' ' +this.idade
}

let p1 = new Pessoa('luiz',30)
let p2 = new Pessoa('Caqui',20)
console.log(p1)