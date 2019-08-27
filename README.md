## 初始化项目
```
npm init
```
## 安装webpack
```
npm install webpack webpack-cli webpack-dev-server -g
npm install webpack -D
```
## 创建目录
```
mkdir config
mkdir src
mkdir dist
```
## 创建文件
```
touch dist/index.html
touch src/index.js
```

## 测试
```
webpack
webpack --mode=development
webpack --mode=production
```
## 创建配置文件
```
touch config/webpack.config.js
```
## 移除文件，通过配置来生成
```
rm dist/main.js src/index.js
```
## 编写weppack配置文件
```
const path = require('path')
module.exports = {
    mode: 'development',
    entry: { // 入口文件配置项
        main: './src/main.js'
    },
    output: { // 出口文件配置项
        path: path.resolve(__dirname, '../dist'), // 打包路劲
        filename: 'bundle.js' // 打包的文件名
    },
    // 模块 css image等
    module: {},
    // 插件,用户生产模板和各项功能
    plugins: [],
    // 配置webpack开发服务功能
    devServer: {
    }
}
```

## 对css进行处理
```
npm install style-loader css-loader --save-dev
```

## 压缩js
```
npm install uglifyjs-webpack-plugin -D
```

## 处理html
```
npm install --save-dev html-webpack-plugin
```

## 处理图片
```
npm install --save-dev file-loader url-loader
```
## css分离和图片路径
```
npm install --save-dev extract-text-webpack-plugin@next
```

## 处理img标签
```
npm install html-withimg-loader --save-dev
```

## 使用sass
```
npm install  node-sass sass-loader --save-dev 
```
## 处理css3前缀
```
npm install --save-dev postcss-loader autoprefixer
```

## 消除不需要的css
```
npm install purifycss-webpack purify-css --save-dev
```
## 配置bable
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install @babel/core -D
```
## 参考地址[https://www.jianshu.com/p/6712e4e4b8fe]