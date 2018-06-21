var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'index' : __dirname + '/src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/www',
    },
    performance: {
        hints: false
    },
    target : 'web',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(sass|scss)?$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(jpe?g|png|gif|eot|woff|woff2|ttf|svg||otf)?$/i,
                loaders: ['file-loader?context=src/images&name=[name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                            },
                        gifsicle: {
                            interlaced: false,
                            },
                        optipng: {
                            optimizationLevel: 4,
                            },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                            },
                        }
                    }],
                include: __dirname
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
