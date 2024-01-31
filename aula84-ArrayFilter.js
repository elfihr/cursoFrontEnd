const num = [5,4,1,8,9,3,7,1]

// function callbackFilter(valor,indice, array){
//    return valor >5
   
//     // if(valor > 5){
//     //     return true
//     // }else{
//     //     return false
//     // }
// }
// const numFilters = num.filter(callbackFilter)




 const numFilters = num.filter(function(valor,indice, array){
    return valor >5
 })

console.log(numFilters)