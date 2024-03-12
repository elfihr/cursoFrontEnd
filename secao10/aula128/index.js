const fs  = require('fs').promises //primises para deixar o mesmo fazer a consulta e so mostrar apos terminar
const path = require('path')

//leitura das pastas
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files)
}

function walk(files){
    for(let file of files){
        console.log(file)
    }
}

readdir()