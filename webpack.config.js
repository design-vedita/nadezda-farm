'use strict';

// Подключаем плагины
let HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// Параметры плагина svgo
let svgoConfig = JSON.stringify({
    plugins: [
        {removeTitle: true},
        {convertColors: {shorthex: false}},
        {convertPathData: false}
    ]
});

// Получаем параметры scripts
const ENV = process.env.npm_lifecycle_event;

// Точки входа js
var entry  = {
    app: './frontend/pages/app'
};

var config = {
    entry: entry,
    module: {
        loaders: [
            {
                test: /\.pug$/,
                loader: "pug",
                query: {
                    pretty: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.svg$/,
                loaders: ['url?name=img/svg/[name].[ext]', 'svgo?' + svgoConfig]
            },
            {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract("style", "css!stylus?resolve url")
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?publicPath=../&name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url?&limit=4096&name=image/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery/dist/jquery.slim.js'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/pages/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: './frontend/pages/catalog.pug'
        }),
        new ExtractTextPlugin("css/main.css")
    ],
    output: {
        publicPath: '',
        path: './production',
        filename: 'js/[name].js'
    }
};

if (ENV == 'start') {

    var dev_entry = {};

    for (let key in entry) {
        dev_entry[key] = ["webpack-dev-server/client?http://localhost:8080/" , "webpack/hot/dev-server", entry[key]]
    }

    config.entry = dev_entry;
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
        contentBase: "./production/",
        hot: true,
        inline: true
    };
    config.watch = true;
}

if (ENV == 'build') {
    config = config;
}

module.exports = config;