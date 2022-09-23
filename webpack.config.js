const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'main': './index.tsx',
        'App': './src/Components/App.tsx',
        'background': './background.ts'
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: '[name].js'
    },

    devtool:'source-map',

    module:{
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            
            {
                test:/\.(css|scss)$/,
                use: ['style-loader','css-loader','sass-loader']
                   
                
            }
        ],
        
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"src","index.html")
        })
        
    ]
}

