var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        'index' : __dirname + '/src/index.js',
        'index.react' : __dirname + '/src/index.react.js'
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          'react'
                        ]
                    }
                }
            },
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
                test: /\.(css|sass|scss)?$/,
                use: [
                  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                      loader: "css-loader",
                      options: {
                          minimize: {
                              safe: true
                          }
                      }
                  },
                  {
                      loader: "sass-loader",
                      options: {}
                  }
                ]
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
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })//,
        //new UglifyJSPlugin(),
        // new BundleAnalyzerPlugin()
    ]
};
