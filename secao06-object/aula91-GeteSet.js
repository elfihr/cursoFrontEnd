function Produto(nome, preco , estoque){
    this.nome = nome
    this.prece = preco

    //let estoquePrivado = estoque
    Object.defineProperty(this,'estoque',{
        enumerable: true, //mostra chave mostra o estoque
        configurable:true,// nao usar o value se nao quebra
        get:function(){
            return estoque
        },
        set:function(valor){
            //estoquePrivado = valor
            estoque = valor
            
        }
    })
}

const p1 = new Produto('Camiseta' , 20,3)
p1.estoque = 5
console.log('Estoque:' + p1.estoque)
