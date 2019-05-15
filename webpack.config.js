const path = require('path');
    module.exports = {
        entry: ['./src/component/All.jsx'],

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './'),
        },
        module: {
            rules: [
                //編譯JSX
                { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
                // css-loader
                {
                    test: /\.css$/,
                    loader: 'style-loader'
                }, 
                {
                    test: /\.css$/,
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            ]
        },
        //增加一個給devserver的設定
        devServer: {
            //指定開啟port為8080
            port: 8080
        }
    };