const path = require('path'),
    { VueLoaderPlugin } = require('vue-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './docs/index.js',

    resolve: {
        alias: {
            vue: '@vue/runtime-dom',
            '@': path.join(__dirname, 'docs'),
            '@mbvue/ui': path.join(__dirname, 'src')
        },
        extensions: ['.css', '.less', '.js', '.jsx', '.ts', '.tsx', '.vue', '.md']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    target: ['web', 'es5'],

    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.md$/, use: [{ loader: 'vue-loader' }, { loader: '@mbvue/markdown-loader' }] },
            { test: /\.(js|jsx|ts|tsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'less-loader', 'postcss-loader'] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: './docs/index.html' }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/index.html' }]
        },
        hot: true,
        open: true
    }
};
