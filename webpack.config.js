const path = require('path')

module.exports = {
    entry : './src/app.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
        
    },
    devServer:{
        contentBase: path.resolve(__dirname,"dist"),
        historyApiFallback: true

    },
    module: {
        rules: [
           {
            // check for .js extensioned files.
            test:  /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
           },
           {
            // check for .js extensioned files.
            test:  /\.css$/,
            use: ['style-loader','css-loader']
            
           } 
        ]
    },
    
}