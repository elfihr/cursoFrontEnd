export const nome = 'marcos'
export const sobrenome = 'Joka'


function soma(x,y){
    return x+y
}

function subtrair(x,y){
    return x-y
}

export {soma,subtrair}

export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}