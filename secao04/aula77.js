//Construtora -> Pessoa(new) << é ocmo um molde


function Pessoa(nome,sobrenome){
    const ID = 57341;

    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Marco', 'Lucio')
const p2 = new Pessoa('Maria', 'Joaquina')
console.log(p1 +' '+p2.nome)