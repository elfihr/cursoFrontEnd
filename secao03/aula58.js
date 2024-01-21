function r(min,max){
    
    return Math.floor(Math.random() * (max - min) - min)
}

let cont = 0

min = 1
max =50

let random = r(min,max)

while(random !== 10){
    random = r(min,max)
    console.log(random)
    cont++
}

console.log('numeros totais = '+cont)
