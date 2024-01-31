const pessoas = [{nome:'Lucas',idade: 43},
{nome:'Marcos',idade: 13}, {nome:'Eldoval',idade: 54}]

const nameFilter = pessoas.filter(obj => obj.idade > 30)

console.log(nameFilter)
