const path = require('path')
const uglify = require('uglifyjs-webpack-plugin') // 压缩js文件
const htmlPlugin = require('html-webpack-plugin') // 打包html文件
// const extractTextPlugin = require('extract-text-webpack-plugin') // css分离
const glob = require('glob')
const PurifyCSSPlugin = require("purifycss-webpack") // 消除未使用的CSS
const WEBSITE = {
    publicPath: 'http://localhost:8888/' // 配置绝对路径
}

module.exports = {
    mode: 'development',
    entry: { // 入口文件配置项
        main: './src/main.js'
        // main2: './src/main2.js',
    },
    output: { // 出口文件配置项
        path: path.resolve(__dirname, '../dist'), // 打包路劲
        filename: '[name].bundle.js', // 打包的文件名
        publicPath: WEBSITE.publicPath // 处理静态文件路径
    },
    // 模块 css image等
    module: {
        rules: [
            {
                test: /\.(html|htm)$/i,
                use: ['html-withimg-loader'] // img标签的问题
            },
            {
                test: /\.css$/,
                // use: extractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         {loader: 'css-loader'},
                //         {loader: 'postcss-loader'}
                //     ]
                // }),
                use: ['css-loader', 'postcss-loader']
            },
            {
                test: /\.s(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {loader: 'url-loader', // 处理图片路径的,里面包含了file-loader
                     options: {
                        limit: 5000,
                        outputPath: 'images/'
                     }},
                ]
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    // 插件,用户生产模板和各项功能
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        // new extractTextPlugin('css/test.css'),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ],
    // 配置webpack开发服务功能
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        port: 8888
    }
}