const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    //Tira arquivos git e pastas modules do node
    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    //Impede a procura de achar HTML
    if (
      !/\.html$/g.test(fileFullPath)
    ) continue;
    console.log(fileFullPath);
  }
}
readdir('/Programacao');
