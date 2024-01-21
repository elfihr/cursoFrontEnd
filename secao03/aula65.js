function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-Br',{
        hour12: false
    })
}

// function intervalo(){
//     console.log(mostraHora()) 
// }

// setInterval(intervalo ,2000);

let timer = setInterval(function intervalo(){console.log(mostraHora())} ,2000);

setTimeout(function () {
    clearInterval(timer);
},7000)

