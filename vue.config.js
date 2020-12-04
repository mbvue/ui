const path = require('path'),
    fs = require('fs');
const baseUrl = '/ui/';

class mbPlugin {
    apply(compiler) {
        compiler.plugin('done', function () {
            fs.copyFileSync('./dist/index.html', './dist/404.html');
        });
    }
}

module.exports = {
    //入口
    entry: './docs/index.js',

    resolve: {
        //别名
        alias: {
            '@': path.join(__dirname, 'docs'),
            '@mbvue/ui': path.join(__dirname, 'src')
        }
    },

    //页面设置
    html: {
        title: 'MBVUE UI'
    },

    //输出设置
    output: {
        publicPath: baseUrl
    },

    //本地服务设置
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /./, to: baseUrl + 'index.html' }]
        },
        publicPath: baseUrl
    },

    //Git二级目录404处理
    plugins: [new mbPlugin()]
};
