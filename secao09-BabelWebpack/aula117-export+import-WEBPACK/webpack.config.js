const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    //dirname = caminho absoluto + junto com nome das pastas e vai criar o filename nesse cainho do output
    output: 
        {path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module:{
        //Rules = pra cada elemento e nescessario ir adicionando
        rules:[{
            //exclude = impede que  o node fique analisandando a pasta
            exclude: /node_modules/,
            //testa o tipo de arquivo no caso os arquivos js usando /.js pegamos arquivos com final .js
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options:{
                  presets:['@babel/env']  
                }
            }
        }]
    },
    //source-map = mapea erro mostrando a linha/arquivo
    devtool: 'source-map'
}