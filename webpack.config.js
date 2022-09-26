const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'main': './index.tsx',
        'App': './src/Components/App.tsx',
        'background': './background.ts',
        'options': './src/Components/Options.tsx',
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: '[name].js'
    },

    devtool:'source-map',

    module:{
        rules: [
            // file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: 'file-loader'

            },

            // typescript loader
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            

            // style loaders for css and scss
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
            title: 'index',
            filename: 'index.html',
            template: path.join(__dirname,"src","index.html"),

        }),
        new HtmlWebpackPlugin({
            title: 'options',
            filename: 'options.html',
            template: path.join(__dirname, "src","options.html")
        }),        
    ]
}

