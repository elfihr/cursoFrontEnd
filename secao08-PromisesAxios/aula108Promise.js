function timeRandom(min,max){
    min *= 1000;
    max*= 1000
    return Math.floor(Math.random() * (max - min)) + min
}

function wait(msg,tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string')reject(false)
        setTimeout(() => {
        //console.log(msg)
        resolve(msg)
    },tempo)
    });

    
}

wait('vamos',timeRandom(1,2))
    .then(resposta => {
        console.log(resposta);
        return wait('fazer',timeRandom(1,2))
    }).then(resposta => {
        console.log(resposta)
        return wait('uma',timeRandom(1,3))
    }).then(resposta => {
        console.log('festa',timeRandom(1,2))
    })
    .catch()


