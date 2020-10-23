# 基础标签

## 1、 基础样式

| 名称               | 变量名         | 变量值                                                                                                                                                                                |
| ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 基础字体样式       | @font-family   | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| 基础字体尺寸       | @font-size     | 14px                                                                                                                                                                                  |
| 基础字体行高       | @line-height   | 1.5                                                                                                                                                                                   |
| 基础字体颜色       | @color         | #212529                                                                                                                                                                               |
| 基础 Body 背景颜色 | @body-bg-color | #ffffff                                                                                                                                                                               |
| 基础边框宽度       | @border-width  | 1px                                                                                                                                                                                   |

## 2、 基础颜色

| 名称            | 变量名                 | 变量值  |                                                                           |
| --------------- | ---------------------- | ------- | ------------------------------------------------------------------------- |
| primary         | @color-primary         | #409eff | <div style="width: 20px; height: 20px; background-color: #409eff;"></div> |
| primary-light   | @color-primary-light   | #b3d8ff | <div style="width: 20px; height: 20px; background: #b3d8ff;"></div>       |
| primary-lighter | @color-primary-lighter | #ecf5ff | <div style="width: 20px; height: 20px; background: #ecf5ff;"></div>       |
| success         | @color-success         | #67c23a | <div style="width: 20px; height: 20px; background: #67c23a;"></div>       |
| success-light   | @color-success-light   | #c2e7b0 | <div style="width: 20px; height: 20px; background: #c2e7b0;"></div>       |
| success-lighter | @color-success-lighter | #ecf5ff | <div style="width: 20px; height: 20px; background: #ecf5ff;"></div>       |
| warning         | @color-warning         | #e6a23c | <div style="width: 20px; height: 20px; background: #e6a23c;"></div>       |
| warning-light   | @color-warning-light   | #f5dab1 | <div style="width: 20px; height: 20px; background: #f5dab1;"></div>       |
| warning-lighter | @color-warning-lighter | #fdf6ec | <div style="width: 20px; height: 20px; background: #fdf6ec;"></div>       |
| danger          | @color-danger          | #f56c6c | <div style="width: 20px; height: 20px; background: #f56c6c;"></div>       |
| danger-light    | @color-danger-light    | #fbc4c4 | <div style="width: 20px; height: 20px; background: #fbc4c4;"></div>       |
| danger-lighter  | @color-danger-lighter  | #fef0f0 | <div style="width: 20px; height: 20px; background: #fef0f0;"></div>       |
| info            | @color-info            | #909399 | <div style="width: 20px; height: 20px; background: #909399;"></div>       |
| info-light      | @color-info-light      | #d3d4d6 | <div style="width: 20px; height: 20px; background: #d3d4d6;"></div>       |
| info-lighter    | @color-info-lighter    | #f4f4f5 | <div style="width: 20px; height: 20px; background: #f4f4f5;"></div>       |
| dark            | @color-dark            | #343a40 | <div style="width: 20px; height: 20px; background: #343a40;"></div>       |
| dark-light      | @color-dark-light      | #aeb0b3 | <div style="width: 20px; height: 20px; background: #aeb0b3;"></div>       |
| dark-lighter    | @color-dark-lighter    | #ebebec | <div style="width: 20px; height: 20px; background: #ebebec;"></div>       |
| border          | @color-border          | #dee2e6 | <div style="width: 20px; height: 20px; background: #dee2e6;"></div>       |

## 3、 基础标签

### 3.1、 模块标签

view, article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary

### 3.2、 menu 标签

:::demo html

<div>
    <menu>我是 menu 标签</menu>
</div>
:::

### 3.3、 a 标签

:::demo html

<div>
    <a href="#">我是 a 标签</a> &nbsp;&nbsp;&nbsp;&nbsp; <a>我是 a 标签我没有 href</a>
</div>
:::

### 3.4、 abbr 标签

:::demo html

<div>
    <abbr>我是 abbr 标签</abbr>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <abbr title="我的title">我是 abbr 标签我有 title</abbr>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <abbr data-original-title="我的data-original-title">我是 abbr 标签我有 data-original-title</abbr>
</div>
:::

### 3.5、 b 标签

:::demo html

<div>
    <b>我是 b 标签</b>
</div>
:::

### 3.6、 strong 标签

:::demo html

<div>
    <strong>我是strong标签</strong>
</div>
:::

### 3.7、 dfn 标签

:::demo html

<div>
    <dfn>我是 dfn 标签</dfn>
</div>
:::

### 3.8、 small 标签

:::demo html

<div>
    <small>我是small标签</small>
</div>
:::

### 3.9、 H 标签

:::demo html

<div>
    <h1>我是 h1 标签<small>我是 small 标签</small></h1>
    <h2>我是 h2 标签<small>我是 small 标签</small></h2>
    <h3>我是 h3 标签<small>我是 small 标签</small></h3>
    <h4>我是 h4 标签<small>我是 small 标签</small></h4>
    <h5>我是 h5 标签<small>我是 small 标签</small></h5>
    <h6>我是 h6 标签<small>我是 small 标签</small></h6>
</div>
:::

### 3.10、 mark 标签

:::demo html

<div>
    <mark>我是 mark 标签</mark>
</div>
:::

### 3.11、 sub 与 sup 标签

:::demo html

<div>
    <sub>我是 sub</sub>我是正常的文字<sup>我是 sup</sup>
</div>
:::

### 3.12、 svg 标签

:::demo html

<div>
    <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
        <g transform="translate(24 31.67)">
            <ellipse fillOpacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse>
            <path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2"></path>
            <path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)"></path>
            <path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7"></path>
            <path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6"></path>
            </g>
            <path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6"></path>
            <g transform="translate(149.65 15.383)" fill="#FFF">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
            </g>
        </g>
    </svg>
</div>
:::

### 3.13、 hr 标签

:::demo html

<div>
    <hr />
</div>
:::

### 3.14、 pre 标签

:::demo html

<div>
    <pre>我是 pre 标签</pre>
</div>
:::

### 3.15、 code 标签

:::demo html

<div>
    <code>我是 code 标签</code>
    <pre>我是 pre 标签<code>我是 code 标签</code></pre>
    <a href="#">我是 a 标签<code>我是 code 标签</code></a>
</div>
:::

### 3.16、 kbd 标签

:::demo html

<div>
    <kbd>我是 kbd 标签<kbd>我是 kbd 标签</kbd></kbd>
</div>
:::

### 3.17、 button 标签

:::demo html

<div>
    <button>我是 button 标签</button>
    &nbsp;&nbsp;
    <button disabled>我是 button 标签</button>
    <br /><br />
    <button class="xs">我是button标签</button>
    &nbsp;&nbsp;
    <button class="sm">我是button标签</button>
    &nbsp;&nbsp;
    <button class="md">我是button标签</button>
    &nbsp;&nbsp;
    <button class="lg">我是button标签</button>
    &nbsp;&nbsp;
    <button class="xl">我是button标签</button>
</div>
:::

### 3.18、 input 标签

:::demo html

<div>
    <input type="button" value="我是input的button标签" />
    &nbsp;&nbsp;
    <input type="reset" value="我是input的reset标签" />
    &nbsp;&nbsp;
    <input type="submit" value="我是input的submit标签" />
    <br /><br />
    <input type="button" disabled value="我是input的button标签" />
    &nbsp;&nbsp;
    <input type="reset" disabled value="我是input的reset标签" />
    &nbsp;&nbsp;
    <input type="submit" disabled value="我是input的submit标签" />
    <br /><br />
    <input type="submit" class="xs" value="我是input的submit标签" />
    &nbsp;&nbsp;
    <input type="submit" class="sm" value="我是input的submit标签" />
    &nbsp;&nbsp;
    <input type="submit" class="md" value="我是input的submit标签" />
    &nbsp;&nbsp;
    <input type="submit" class="lg" value="我是input的submit标签" />
    &nbsp;&nbsp;
    <input type="submit" class="xl" value="我是input的submit标签" />
</div>
:::

:::demo html

<div>
    checkbox：<input type="checkbox" />
    &nbsp;&nbsp;
    <input type="checkbox" disabled />
    &nbsp;&nbsp;
    <input class="xs" type="checkbox" />
    &nbsp;&nbsp;
    <input class="sm" type="checkbox" />
    &nbsp;&nbsp;
    <input class="md" type="checkbox" />
    &nbsp;&nbsp;
    <input class="lg" type="checkbox" />
    &nbsp;&nbsp;
    <input class="xl" type="checkbox" />
    <br /><br />
    radio：<input type="radio" />
    &nbsp;&nbsp;
    <input type="radio" disabled />
    &nbsp;&nbsp;
    <input class="xs" type="radio" />
    &nbsp;&nbsp;
    <input class="sm" type="radio" />
    &nbsp;&nbsp;
    <input class="md" type="radio" />
    &nbsp;&nbsp;
    <input class="lg" type="radio" />
    &nbsp;&nbsp;
    <input class="xl" type="radio" />
    <br /><br />
    text：<input type="text" />
    &nbsp;&nbsp;
    <input class="xs" type="text" />
    &nbsp;&nbsp;
    <input class="sm" type="text" />
    &nbsp;&nbsp;
    <input class="md" type="text" />
    &nbsp;&nbsp;
    <input class="lg" type="text" />
    &nbsp;&nbsp;
    <input class="xl" type="text" />
    <br /><br />
    password：<input type="password" />
    &nbsp;&nbsp;
    <input class="xs" type="password" />
    &nbsp;&nbsp;
    <input class="sm" type="password" />
    &nbsp;&nbsp;
    <input class="md" type="password" />
    &nbsp;&nbsp;
    <input class="lg" type="password" />
    &nbsp;&nbsp;
    <input class="xl" type="password" />
    <br /><br />
    number：<input type="number" />
    &nbsp;&nbsp;
    <input class="xs" type="number" />
    &nbsp;&nbsp;
    <input class="sm" type="number" />
    &nbsp;&nbsp;
    <input class="md" type="number" />
    &nbsp;&nbsp;
    <input class="lg" type="number" />
    &nbsp;&nbsp;
    <input class="xl" type="number" />
    <br /><br />
    search：<input type="search" />
    &nbsp;&nbsp;
    <input class="xs" type="search" />
    &nbsp;&nbsp;
    <input class="sm" type="search" />
    &nbsp;&nbsp;
    <input class="md" type="search" />
    &nbsp;&nbsp;
    <input class="lg" type="search" />
    &nbsp;&nbsp;
    <input class="xl" type="search" />
    <br /><br />
    date：<input type="date" />
    &nbsp;&nbsp;
    <input class="xs" type="date" />
    &nbsp;&nbsp;
    <input class="sm" type="date" />
    &nbsp;&nbsp;
    <input class="md" type="date" />
    &nbsp;&nbsp;
    <input class="lg" type="date" />
    &nbsp;&nbsp;
    <input class="xl" type="date" />
    <br /><br />
    datetime：<input type="datetime" />
    &nbsp;&nbsp;
    <input class="xs" type="datetime" />
    &nbsp;&nbsp;
    <input class="sm" type="datetime" />
    &nbsp;&nbsp;
    <input class="md" type="datetime" />
    &nbsp;&nbsp;
    <input class="lg" type="datetime" />
    &nbsp;&nbsp;
    <input class="xl" type="datetime" />
    <br /><br />
    datetime-local：<input type="datetime-local" />
    &nbsp;&nbsp;
    <input class="xs" type="datetime-local" />
    &nbsp;&nbsp;
    <input class="sm" type="datetime-local" />
    &nbsp;&nbsp;
    <input class="md" type="datetime-local" />
    &nbsp;&nbsp;
    <input class="lg" type="datetime-local" />
    &nbsp;&nbsp;
    <input class="xl" type="datetime-local" />
    <br /><br />
    email：<input type="email" />
    &nbsp;&nbsp;
    <input class="xs" type="email" />
    &nbsp;&nbsp;
    <input class="sm" type="email" />
    &nbsp;&nbsp;
    <input class="md" type="email" />
    &nbsp;&nbsp;
    <input class="lg" type="email" />
    &nbsp;&nbsp;
    <input class="xl" type="email" />
    <br /><br />
    month：<input type="month" />
    &nbsp;&nbsp;
    <input class="xs" type="month" />
    &nbsp;&nbsp;
    <input class="sm" type="month" />
    &nbsp;&nbsp;
    <input class="md" type="month" />
    &nbsp;&nbsp;
    <input class="lg" type="month" />
    &nbsp;&nbsp;
    <input class="xl" type="month" />
    <br /><br />
    tel：<input type="tel" />
    &nbsp;&nbsp;
    <input class="xs" type="tel" />
    &nbsp;&nbsp;
    <input class="sm" type="tel" />
    &nbsp;&nbsp;
    <input class="md" type="tel" />
    &nbsp;&nbsp;
    <input class="lg" type="tel" />
    &nbsp;&nbsp;
    <input class="xl" type="tel" />
    <br /><br />
    time：<input type="time" />
    &nbsp;&nbsp;
    <input class="xs" type="time" />
    &nbsp;&nbsp;
    <input class="sm" type="time" />
    &nbsp;&nbsp;
    <input class="md" type="time" />
    &nbsp;&nbsp;
    <input class="lg" type="time" />
    &nbsp;&nbsp;
    <input class="xl" type="time" />
    <br /><br />
    url：<input type="url" />
    &nbsp;&nbsp;
    <input class="xs" type="url" />
    &nbsp;&nbsp;
    <input class="sm" type="url" />
    &nbsp;&nbsp;
    <input class="md" type="url" />
    &nbsp;&nbsp;
    <input class="lg" type="url" />
    &nbsp;&nbsp;
    <input class="xl" type="url" />
    <br /><br />
    week：<input type="week" />
    &nbsp;&nbsp;
    <input class="xs" type="week" />
    &nbsp;&nbsp;
    <input class="sm" type="week" />
    &nbsp;&nbsp;
    <input class="md" type="week" />
    &nbsp;&nbsp;
    <input class="lg" type="week" />
    &nbsp;&nbsp;
    <input class="xl" type="week" />
    <br /><br />
    color：<input type="color" />
    &nbsp;&nbsp;
    <input class="xs" type="color" />
    &nbsp;&nbsp;
    <input class="sm" type="color" />
    &nbsp;&nbsp;
    <input class="md" type="color" />
    &nbsp;&nbsp;
    <input class="lg" type="color" />
    &nbsp;&nbsp;
    <input class="xl" type="color" />
    <br /><br />
    file：<input type="file" />
    <br /><br />
    range：<input type="range" />
    <br /><br />
</div>
:::

### 3.19、 select 标签

:::demo html

<div>
    <select>
        <optgroup label="我是optgroup"></optgroup>
        <option>我是 option</option>
        <option>我是 option</option>
    </select>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <select multiple>
        <optgroup label="我是optgroup"></optgroup>
        <option>我是 option</option>
        <option>我是 option</option>
        <option>我是 option</option>
        <option>我是 option</option>
        <option>我是 option</option>
        <option>我是 option</option>
    </select>
</div>
:::

### 3.20、 textarea 标签

:::demo html

<div>
    <textarea />
    <textarea class="xs" />
    <textarea class="sm" />
    <textarea class="md" />
    <textarea class="lg" />
    <textarea class="xl" />
</div>
:::

### 3.21、 legend 标签

:::demo html

<div>
    <legend>我是 legend 标签</legend>
</div>
:::

### 3.22、 label 标签

:::demo html

<div>
    <label>我是 label 标签</label>
</div>
:::

### 3.23、 output 标签

:::demo html

<div>
    <output>我是 output 标签</output>
</div>
:::

### 3.24、 blockquote 标签

:::demo html

<div>
    <blockquote>
        我是 blockquote 标签
        <footer>我是 footer 标签</footer>
        <small>我是 small 标签</small>
        <p>我是 p 标签</p>
    </blockquote>
</div>
:::

### 3.25、 p 标签

:::demo html

<div>
    <p>我是 p 标签</p>
</div>
:::

### 3.26、 address 标签

:::demo html

<div>
    <address>我是 address 标签</address>
</div>
:::

### 3.27、 ol、ul、dl 标签

:::demo html

<div>
    <ul>
        <li>我是 ul-li</li>
        <li>我是 ul-li</li>
    </ul>
    <br />
    <ol>
        <dt>我是 ol-dt</dt>
        <dd>我是 ol-dd</dd>
        <dd>我是 ol-dd</dd>
    </ol>
    <br />
    <dl>
        <dt>我是 dl-dt</dt>
        <dd>我是 dl-dd</dd>
        <dd>我是 dl-dd</dd>
    </dl>
</div>
:::

### 3.28、 table 标签

:::demo html

<div>
    <table>
        <caption>我是 caption</caption>
        <tr>
            <th>我是 th</th>
            <th>我是 th</th>
            <th>我是 th</th>
        </tr>
        <tr>
            <td>我是 td</td>
            <td>我是 td</td>
            <td>我是 td</td>
        </tr>
        <tr>
            <td>我是 td</td>
            <td>我是 td</td>
            <td>我是 td</td>
        </tr>
    </table>
</div>
:::
