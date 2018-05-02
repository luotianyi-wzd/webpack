const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.resolve(__dirname, './src/index.js') //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
        ]
    },
    resolve: { // 指定第三方库目录，减少webpack寻找时间
        modules: [path.resolve(__dirname, './node_modules')],
    },
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js' // 打包后文件
    },
    devtool: 'source-map',
    module: {
        rules: [{
            enforce: "pre",
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }],
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader',
                options: {
                    sourceMap: true,
                },
            }],
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [{
                loader: 'file-loader'
            }],
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [　　　　
        new HtmlWebpackPlugin({　　　　　　
            template: path.resolve(__dirname, './src/index.template.html'),

            　　　　　　inject: true
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()　
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}