# 定制主题

## 1、 样式变量

```less
//基础样式
@font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
@font-size: 14;
@icon-size: 16;
@line-height: 1.5;
@color: #212529;
@body-bg-color: #ffffff;
@border-width: 1px;
@font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Microsoft YaHei', 'Liberation Mono', 'Courier New', monospace;

//颜色样式
@color-default: #ffffff;
@color-primary: #409eff;
@color-success: #67c23a;
@color-warning: #e6a23c;
@color-danger: #f56c6c;
@color-info: #909399;
@color-dark: #343a40;
@color-border: #dee2e6;

@color-primary-light: mix(#ffffff, @color-primary, 60%);
@color-success-light: mix(#ffffff, @color-success, 60%);
@color-warning-light: mix(#ffffff, @color-warning, 60%);
@color-danger-light: mix(#ffffff, @color-danger, 60%);
@color-info-light: mix(#ffffff, @color-info, 60%);
@color-dark-light: mix(#ffffff, @color-dark, 60%);

@color-primary-lighter: mix(#ffffff, @color-primary, 90%);
@color-success-lighter: mix(#ffffff, @color-success, 90%);
@color-warning-lighter: mix(#ffffff, @color-warning, 90%);
@color-danger-lighter: mix(#ffffff, @color-danger, 90%);
@color-info-lighter: mix(#ffffff, @color-info, 90%);
@color-dark-lighter: mix(#ffffff, @color-dark, 90%);
```

## 2、 定制方式

### 2.1、 全局配置

在 [vue.config.js](https://cli.vuejs.org/zh/config/) 增加以下配置：

```js
module.exports = {
    css: {
        loaderOptions: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#1DA57A'
                    //...
                },
                javascriptEnabled: true
            }
        }
    }
};
```

### 2.2、 覆盖样式

建立一个单独的 less 变量文件，引入 index.less 文件覆盖样式变量。

```less
@import '~mbvue/ui/index.less'; // 引入官方提供的 less 样式入口文件
@import 'your-theme-file.less'; // 用于覆盖上面定义的变量
```
