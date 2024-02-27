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
    nomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }

    //==============Static
    static beber(){
        console.log(`Ok vou beber agua`);
    }
    static soma(x,y){
        console.log(x+y)
    }

}

const p1 = new Pessoa('Lyn','Ferreira')
let p2 = new Pessoa('Marth','daVilla')
Pessoa.beber()
Pessoa.soma(3,5)
console.log(p1)
console.log(p2)
