module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: require('@mbvue/babel-preset-config/browsers')
        })
    ]
};
