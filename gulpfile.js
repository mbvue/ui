const path = require('path'),
    gulp = require('gulp'),
    less = require('less'),
    merge2 = require('merge2'),
    gulpif = require('gulp-if'),
    webpack = require('webpack'),
    postcss = require('postcss'),
    babel = require('gulp-babel'),
    through2 = require('through2'),
    ts = require('gulp-typescript'),
    { readFileSync } = require('fs'),
    tsConfig = require('./tsconfig.json'),
    autoprefixer = require('autoprefixer'),
    TerserPlugin = require('terser-webpack-plugin'),
    babelConfig = require('@mbvue/babel-preset-config'),
    browserslist = require('@mbvue/browserslist-config'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const npm = path.resolve(__dirname, 'npm'),
    es = path.resolve(__dirname, 'npm/es'),
    lib = path.resolve(__dirname, 'npm/lib');

//编译less
const buildLess = file => {
    return less
        .render(readFileSync(file, 'utf-8').replace(/^\uFEFF/, ''), { paths: [path.dirname(file)], filename: file, javascriptEnabled: true })
        .then(result => postcss([autoprefixer()]).process(result.css, { from: undefined }))
        .then(r => r.css);
};

//构建npm包
const build = modules => {
    //构建Less文件
    const less = gulp
        .src(['src/**/*.less'])
        .pipe(
            through2.obj(function (file, encoding, next) {
                this.push(file.clone());

                if (file.path.match(/(\\style\\index|\\src\\index|\\src\\base)\.less$/)) {
                    buildLess(file.path)
                        .then(css => {
                            file.contents = Buffer.from(css);
                            file.path = file.path.replace(/\.less$/, '.css');
                            this.push(file);
                            next();
                        })
                        .catch(e => {
                            console.error(e);
                        });
                } else {
                    next();
                }
            })
        )
        .pipe(
            gulpif(
                file => {
                    if (file.path.match(/(\\src\\index|\\src\\base)\.less$/)) {
                        file.contents = Buffer.from(file.contents.toString().replace(/\.\//g, './lib/'));
                    }

                    return file.path.match(/(\\src\\index|\\src\\base)(\.less|\.css)$/);
                },
                gulp.dest(npm),
                gulp.dest(modules === false ? es : lib)
            )
        );

    const _babel = babelConfig({ env: { modules: modules, targets: { browsers: browserslist } }, runtime: { helpers: false } });
    _babel.babelrc = false;

    const tsData = gulp.src(['src/**/*.ts', 'src/**/*.tsx', 'typings/**/*.d.ts']).pipe(
        ts(Object.assign(tsConfig.compilerOptions, { declaration: true }), {
            error(e) {
                console.log(e);
                process.exit(1);
            }
        })
    );

    //构建JS文件
    const js = tsData.js
        .pipe(babel(_babel))
        .pipe(
            through2.obj(function (file, encoding, next) {
                this.push(file.clone());

                if (file.path.match(/\\style\\index\.(js|jsx|ts|tsx)$/)) {
                    file.contents = Buffer.from(file.contents.toString(encoding).replace(/\.less/g, '.css'));
                    file.path = file.path.replace(/index\.(js|jsx|ts|tsx)$/, 'css.js');
                    this.push(file);
                    next();
                } else {
                    next();
                }
            })
        )
        .pipe(gulp.dest(modules === false ? es : lib));

    //构建.d.ts
    const dts = tsData.dts.pipe(gulp.dest(modules === false ? es : lib));

    return merge2([less, js, dts]);
};

//构建压缩文件
const buildPack = done => {
    let baseBabel = babelConfig({ env: { modules: false, targets: { browsers: browserslist } }, runtime: { helpers: false } });
    baseBabel.plugins.push([require.resolve('babel-plugin-import'), { libraryName: 'MBVueUI', libraryDirectory: 'src', style: true }]);

    webpack(
        {
            mode: 'production',
            entry: {
                index: [path.resolve('./src/index.ts'), path.resolve('./src/index.less')]
            },
            resolve: {
                modules: [path.join(__dirname, './node_modules')],
                extensions: ['.less', '.js', '.jsx', '.ts', '.tsx', '.json'],
                alias: {
                    '@': process.cwd()
                }
            },
            externals: {
                vue: {
                    root: 'Vue',
                    commonjs2: 'vue',
                    commonjs: 'vue',
                    amd: 'vue'
                },
                axios: 'axios'
            },
            devtool: 'source-map',
            output: {
                path: npm,
                filename: '[name].min.js',
                library: 'MBVueUI',
                libraryTarget: 'umd'
            },
            optimization: {
                minimizer: [new TerserPlugin({ sourceMap: true })]
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: baseBabel
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: [{ loader: 'babel-loader', options: baseBabel }, { loader: 'ts-loader' }]
                    },
                    { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader', options: { limit: 10000 } },
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            { loader: 'css-loader', options: { sourceMap: true } },
                            { loader: 'postcss-loader', options: { postcssOptions: { sourceMap: true, plugins: ['postcss-preset-env'] } } },
                            { loader: 'less-loader', options: { lessOptions: { sourceMap: true, javascriptEnabled: true } } }
                        ]
                    }
                ]
            },
            plugins: [
                new webpack.LoaderOptionsPlugin({ minimize: true }),
                new MiniCssExtractPlugin({ filename: '[name].min.css' }),
                new OptimizeCssAssetsWebpackPlugin(),
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                new CopyWebpackPlugin({
                    patterns: [
                        { from: 'LICENSE', to: 'LICENSE', toType: 'file' },
                        {
                            from: 'package.json',
                            to: 'package.json',
                            transform(content) {
                                let data = JSON.parse(content.toString());
                                delete data.scripts;
                                delete data.devDependencies;
                                delete data.husky;
                                delete data['lint-staged'];
                                delete data.browserslist;
                                delete data.eslintConfig;
                                delete data.stylelint;
                                delete data.prettier;
                                delete data.babel;

                                return Buffer.from(JSON.stringify(data));
                            }
                        },
                        { from: 'README.md', to: 'README.md' }
                    ]
                }),
                new CleanWebpackPlugin()
            ]
        },
        (err, stats) => {
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }

            const info = stats.toJson();

            if (stats.hasErrors()) {
                console.error(info.errors);
            }

            if (stats.hasWarnings()) {
                console.warn(info.warnings);
            }

            done(0);
        }
    );
};

//构建任务
gulp.task(
    'build',
    gulp.series(
        //构建压缩文件
        done => {
            buildPack(done);
        },

        //构建ES6
        done => {
            build(false).on('finish', () => {
                done();
            });
        },

        //构建ES5
        done => {
            build().on('finish', () => {
                done();
            });
        }
    )
);
