const path = require('path'); // CommonJS
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);


module.exports = {
  mode: 'production',
  entry: './src/main.js',
  //dirname = caminho absoluto + junto com nome das pastas e vai criar o filename nesse cainho do output
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    //Rules = pra cada elemento e nescessario ir adicionando
    rules: [{
      //exclude = impede que  o node fique analisandando a pasta
      exclude: /node_modules/,
      //testa o tipo de arquivo no caso os arquivos js usando /.js pegamos arquivos com final .js
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  //source-map = mapea erro mostrando a linha/arquivo
  devtool: 'source-map'
};
