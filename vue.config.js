const path = require('path');
const baseUrl = '/ui/';

module.exports = {
    entry: './docs/index.js',

    resolve: {
        alias: {
            '@': path.join(__dirname, 'docs'),
            '@mbvue/ui': path.join(__dirname, 'src')
        }
    },

    html: {
        title: 'MBVUE UI'
    },

    output: {
        publicPath: baseUrl
    },

    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /./, to: baseUrl + 'index.html' }]
        },
        publicPath: baseUrl
    }
};
