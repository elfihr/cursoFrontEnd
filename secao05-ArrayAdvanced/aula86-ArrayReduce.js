const num = [5,4,1,8,9,3,7,1]

const total = num.reduce(function(tot,valor){
    tot +=valor
    return tot
},0)
console.log(total) 