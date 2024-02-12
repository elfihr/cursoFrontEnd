class Dispositivo {
    constructor(nome){
        this.nome= nome
    }

    ligar(){
        if(this.ligado){
            console.log(`Dispositivo ${this.nome} Ligado`);
            return
        }
        this.ligado = true
    }
    desligar(){
        if(this.desligado){
            console.log(`Dispositivo ${this.nome} desligado`);
            return
        }
        this.desligado = false

    }
}

let d1 = new Dispositivo('TV')
d1.ligar()
console.log(d1)

class Carro extends Dispositivo{
    constructor(nome,cor,valocidade){
        super(nome);
        this.cor = cor;
        this.valocidade = valocidade
    }
    testaMotor() {
        console.log(`O automovel ${this.nome} esta com motor funcionando`)
    }
}

const c1= new Carro('Fusca', 'Branco',100)
c1.desligar()
console.log(c1)
c1.testaMotor()