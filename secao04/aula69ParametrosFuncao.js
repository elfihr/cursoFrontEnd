function funcao(){
    return console.log(arguments[10])
}

funcao(0,1,2,3,4,5,6,7,8,9,'ultimo')


function soma(a,b=3,c=10){
    console.log(a+b+c)
}

soma(3,undefined,10)

function numeroOf(...numero){
    for(let n in numero){
        console.log(numero)
    }
}

function numeroIn(...numero){
    for(let n in numero){
        console.log(numero)
    }
}

numeroIn(2,5,10)