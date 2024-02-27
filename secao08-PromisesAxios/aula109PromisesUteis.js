function timeRandom(min,max){
    min *= 1000;
    max*= 1000
    return Math.floor(Math.random() * (max - min)) + min
}

function wait(msg,tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string'){
            reject(false)
            return;
            //return pra sair função com erro sem deixar executar com erro
        }
        setTimeout(() => {
        //console.log(msg)
        resolve(msg)
    },tempo)
    });

    
}

const promises = ['primeiro valor', wait('Promise01',timeRandom(1,3)),'outro valor']
//Promise all faz tudo
Promise.all(promises)
.then(function(valor){
console.log(valor)
}).catch(function(erro){
console.log(erro)
})
const promiseRace = [wait('PromiseRace01',timeRandom(1,5)), wait('PromiseRace02',timeRandom(1,5)),wait(5,timeRandom(1,5))]
//Race Faz apenas uma
Promise.race(promiseRace)
.then(function(valor){
console.log(valor)
}).catch(function(erro){
console.log(erro)
})
