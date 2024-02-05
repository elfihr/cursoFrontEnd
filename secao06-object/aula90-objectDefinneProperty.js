function Produto(nome, preco , estoque){
    this.nome = nome
    this.prece = preco

    Object.defineProperty(this,'estoque',{
        enumerable: true, //mostra chave mostra o estoque
        value:estoque,
        writable: true, //impede que seja alterado valor
        configurable: false , //reconfigura a chave? apaga?
    })
}

const p1 = new Produto('Camiseta' , 20,3)
p1.estoque = 376783
delete p1.estoque
console.log(p1)
