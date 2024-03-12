

const path = require('path');
//cria json, pode ser trocado pra txt tambem ou outros formatos validos
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

//cria arrayson
const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);

