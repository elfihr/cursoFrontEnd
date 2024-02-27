class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`);
    }

    comer(){
        console.log(`${this.nome} esta comendo`);
    }

    beber(){
        console.log(`${this.nome} esta bebendo`);
    }

    nomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }

    static soma(x,y){
        console.log(x+y)
    }
}

const p1 = new Pessoa('Lyn','Ferreira')
let p2 = new Pessoa('Marth','daVilla')
console.log(p1)

//Use p1.falar() para sair o nome da Pessoa, caso nao usar saira como this.nome


//Diferença classe pro construtor
function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando`)
}

const p3 = new Pessoa2('Ike','Kid')

Pessoa.soma(5,10)