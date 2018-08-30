let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let conf = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        //publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules/'
            },
            {
             test: /\.css$/,
             use: ExtractTextPlugin.extract({
                //fallback: "style-loader",
                 use: 'css-loader'
             })
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production
                             ? 'source-map'
                             : 'eval-sourcemap';
    return conf;
};






