class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto(){
        return this.nome + ' '+this.sobrenome
    }

    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Mak','III')
p1.nomeCompleto = 'Mak III August'
console.log(p1.nomeCompleto)


// class Carro{
//     constructor(nome){
//         this.nome = nome
//         this.velocidade = 0
//     }
//     set velocidade(valor){
//         if(typeof valor !== 'number') return
//         if(valor >= 100 || valor < 0) return
//         return this.velocidade = valor
//     }
//     get velocidade(){
//         return this.velocidade
//     }

//     acelera(){
//         if(this.velocidade > 99) return
//         this.velocidade++
//     }
//     freia(){
//         if(this.velocidade < 0) return
//         this.velocidade--
//     }
// }

// const c1 = new Carro('Fusca')

// for(let v = 0; v <= 150; v++){
//     c1.acelera()
// }
// c1.velocidade = 50
// console.log(c1.velocidade)