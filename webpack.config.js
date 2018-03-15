const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname,'src'),
    dist: path.resolve(__dirname,'dist'),
    docs: path.resolve(__dirname, 'docs')
};

module.exports = {
    entry: {
        app: PATHS.src + "/index.js"
    },
    output: {
        filename: 'bundle.js',
        path: PATHS.dist
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    plugins: [
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    {source: PATHS.dist, destination: PATHS.docs}
                ]
            }
        })
        ]
};