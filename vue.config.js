const path = require('path');

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
    }
};
