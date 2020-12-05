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

<menu>我是 menu 标签</menu>
:::

### 3.3、 a 标签

:::demo html

<a href="#">我是 a 标签</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a class="dotted" href="#">我是 a 标签</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a class="dashed" href="#">我是 a 标签</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a>我是 a 标签我没有 href</a>
:::

### 3.4、 abbr 标签

:::demo html

<abbr>我是 abbr 标签</abbr>
<abbr title="我的title">我是 abbr 标签我有 title</abbr>
<abbr data-original-title="我的data-original-title">我是 abbr 标签我有 data-original-title</abbr>
:::

### 3.5、 b 标签

:::demo html

<b>我是 b 标签</b>
:::

### 3.6、 strong 标签

:::demo html

<strong>我是 strong 标签</strong>
:::

### 3.7、 dfn 标签

:::demo html

<dfn>我是 dfn 标签</dfn>
:::

### 3.8、 small 标签

:::demo html

<small>我是 small 标签</small>
:::

### 3.9、 H 标签

:::demo html

<h1>我是 h1 标签<small>我是 small 标签</small></h1>
<h2>我是 h2 标签<small>我是 small 标签</small></h2>
<h3>我是 h3 标签<small>我是 small 标签</small></h3>
<h4>我是 h4 标签<small>我是 small 标签</small></h4>
<h5>我是 h5 标签<small>我是 small 标签</small></h5>
<h6>我是 h6 标签<small>我是 small 标签</small></h6>
:::

### 3.10、 mark 标签

:::demo html

<mark>我是 mark 标签</mark>
:::

### 3.11、 sub 与 sup 标签

:::demo html

<sub>我是 sub</sub>我是正常的文字<sup>我是 sup</sup>
:::

### 3.12、 svg 标签

:::demo html

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
:::

### 3.13、 hr 标签

:::demo html

<hr />
:::

### 3.14、 pre 标签

:::demo html

<pre>我是 pre 标签</pre>&nbsp;

:::

### 3.15、 code 标签

:::demo html

<div>
    <code>我是 code 标签</code>&nbsp;&nbsp;
    <pre>我是 pre 标签<code>我是 code 标签</code></pre>&nbsp;&nbsp;
    <a href="#">我是 a 标签<code>我是 code 标签</code></a>
</div>
:::

### 3.16、 kbd 标签

:::demo html

<kbd>我是 kbd 标签<kbd>我是 kbd 标签</kbd></kbd>
:::

### 3.17、 button 标签

:::demo html

<button>我是 button 标签</button>&nbsp;&nbsp;
<button disabled>我是 button 标签</button>
<br /><br />
<button class="xs">我是 button 标签</button>&nbsp;&nbsp;
<button class="sm">我是 button 标签</button>&nbsp;&nbsp;
<button class="md">我是 button 标签</button>&nbsp;&nbsp;
<button class="lg">我是 button 标签</button>&nbsp;&nbsp;
<button class="xl">我是 button 标签</button>
:::

### 3.18、 input 标签

#### 3.18.1、 button

:::demo html

<input type="button" value="我是input的button标签" />&nbsp;&nbsp;
<input type="button" disabled value="我是input的button标签" />
<br /><br />
<input type="button" class="xs" value="我是input的button标签" />&nbsp;&nbsp;
<input type="button" class="sm" value="我是input的button标签" />&nbsp;&nbsp;
<input type="button" class="md" value="我是input的button标签" />&nbsp;&nbsp;
<input type="button" class="lg" value="我是input的button标签" />&nbsp;&nbsp;
<input type="button" class="xl" value="我是input的button标签" />
:::

#### 3.18.2、 reset

:::demo html

<input type="reset" value="我是input的reset标签" />&nbsp;&nbsp;
<input type="reset" disabled value="我是input的reset标签" />
<br /><br />
<input type="reset" class="xs" value="我是input的reset标签" />&nbsp;&nbsp;
<input type="reset" class="sm" value="我是input的reset标签" />&nbsp;&nbsp;
<input type="reset" class="md" value="我是input的reset标签" />&nbsp;&nbsp;
<input type="reset" class="lg" value="我是input的reset标签" />&nbsp;&nbsp;
<input type="reset" class="xl" value="我是input的reset标签" />
:::

#### 3.18.3、 submit

:::demo html

<input type="submit" value="我是input的submit标签" />&nbsp;&nbsp;
<input type="submit" disabled value="我是input的submit标签" />
<br /><br />
<input type="submit" class="xs" value="我是input的submit标签" />&nbsp;&nbsp;
<input type="submit" class="sm" value="我是input的submit标签" />&nbsp;&nbsp;
<input type="submit" class="md" value="我是input的submit标签" />&nbsp;&nbsp;
<input type="submit" class="lg" value="我是input的submit标签" />&nbsp;&nbsp;
<input type="submit" class="xl" value="我是input的submit标签" />
:::

#### 3.18.4、 checkbox

:::demo html

<input type="checkbox" />&nbsp;&nbsp;
<input type="checkbox" disabled />
<br /><br />
<input class="xs" type="checkbox" />&nbsp;&nbsp;
<input class="sm" type="checkbox" />&nbsp;&nbsp;
<input class="md" type="checkbox" />&nbsp;&nbsp;
<input class="lg" type="checkbox" />&nbsp;&nbsp;
<input class="xl" type="checkbox" />
:::

#### 3.18.5、 radio

:::demo html

<input type="radio" />&nbsp;&nbsp;
<input type="radio" disabled />
<br /><br />
<input type="radio" disabled />&nbsp;&nbsp;
<input class="xs" type="radio" />&nbsp;&nbsp;
<input class="sm" type="radio" />&nbsp;&nbsp;
<input class="md" type="radio" />&nbsp;&nbsp;
<input class="lg" type="radio" />&nbsp;&nbsp;
<input class="xl" type="radio" />
:::

#### 3.18.6、 text

:::demo html

<input type="text" />&nbsp;&nbsp;
<input type="text" disabled />
<br /><br />
<input class="xs" type="text" />&nbsp;&nbsp;
<input class="sm" type="text" />&nbsp;&nbsp;
<input class="md" type="text" />&nbsp;&nbsp;
<input class="lg" type="text" />&nbsp;&nbsp;
<input class="xl" type="text" />
:::

#### 3.18.7、 password

:::demo html

<input type="password" />&nbsp;&nbsp;
<input type="password" disabled />
<br /><br />
<input class="xs" type="password" />&nbsp;&nbsp;
<input class="sm" type="password" />&nbsp;&nbsp;
<input class="md" type="password" />&nbsp;&nbsp;
<input class="lg" type="password" />&nbsp;&nbsp;
<input class="xl" type="password" />
:::

#### 3.18.8、 number

:::demo html

<input type="number" />&nbsp;&nbsp;
<input type="number" disabled />
<br /><br />
<input class="xs" type="number" />&nbsp;&nbsp;
<input class="sm" type="number" />&nbsp;&nbsp;
<input class="md" type="number" />&nbsp;&nbsp;
<input class="lg" type="number" />&nbsp;&nbsp;
<input class="xl" type="number" />
:::

#### 3.18.9、 search

:::demo html

<input type="search" />&nbsp;&nbsp;
<input type="search" disabled />
<br /><br />
<input class="xs" type="search" />&nbsp;&nbsp;
<input class="sm" type="search" />&nbsp;&nbsp;
<input class="md" type="search" />&nbsp;&nbsp;
<input class="lg" type="search" />&nbsp;&nbsp;
<input class="xl" type="search" />
:::

#### 3.18.10、 date

:::demo html

<input type="date" />&nbsp;&nbsp;
<input type="date" disabled />
<br /><br />
<input class="xs" type="date" />&nbsp;&nbsp;
<input class="sm" type="date" />&nbsp;&nbsp;
<input class="md" type="date" />&nbsp;&nbsp;
<input class="lg" type="date" />&nbsp;&nbsp;
<input class="xl" type="date" />
:::

#### 3.18.11、 datetime

:::demo html

<input type="datetime" />&nbsp;&nbsp;
<input type="datetime" disabled />
<br /><br />
<input class="xs" type="datetime" />&nbsp;&nbsp;
<input class="sm" type="datetime" />&nbsp;&nbsp;
<input class="md" type="datetime" />&nbsp;&nbsp;
<input class="lg" type="datetime" />&nbsp;&nbsp;
<input class="xl" type="datetime" />
:::

#### 3.18.12、 datetime-local

:::demo html

<input type="datetime-local" />&nbsp;&nbsp;
<input type="datetime-local" disabled />
<br /><br />
<input class="xs" type="datetime-local" />&nbsp;&nbsp;
<input class="sm" type="datetime-local" />&nbsp;&nbsp;
<input class="md" type="datetime-local" />&nbsp;&nbsp;
<input class="lg" type="datetime-local" />&nbsp;&nbsp;
<input class="xl" type="datetime-local" />
:::

#### 3.18.13、 email

:::demo html

<input type="email" />&nbsp;&nbsp;
<input type="email" disabled />
<br /><br />
<input class="xs" type="email" />&nbsp;&nbsp;
<input class="sm" type="email" />&nbsp;&nbsp;
<input class="md" type="email" />&nbsp;&nbsp;
<input class="lg" type="email" />&nbsp;&nbsp;
<input class="xl" type="email" />
:::

#### 3.18.14、 month

:::demo html

<input type="month" />&nbsp;&nbsp;
<input type="month" disabled />
<br /><br />
<input class="xs" type="month" />&nbsp;&nbsp;
<input class="sm" type="month" />&nbsp;&nbsp;
<input class="md" type="month" />&nbsp;&nbsp;
<input class="lg" type="month" />&nbsp;&nbsp;
<input class="xl" type="month" />
:::

#### 3.18.15、 tel

:::demo html

<input type="tel" />&nbsp;&nbsp;
<input type="tel" disabled />
<br /><br />
<input class="xs" type="tel" />&nbsp;&nbsp;
<input class="sm" type="tel" />&nbsp;&nbsp;
<input class="md" type="tel" />&nbsp;&nbsp;
<input class="lg" type="tel" />&nbsp;&nbsp;
<input class="xl" type="tel" />
:::

#### 3.18.16、 time

:::demo html

<input type="time" />&nbsp;&nbsp;
<input type="time" disabled />
<br /><br />
<input class="xs" type="time" />&nbsp;&nbsp;
<input class="sm" type="time" />&nbsp;&nbsp;
<input class="md" type="time" />&nbsp;&nbsp;
<input class="lg" type="time" />&nbsp;&nbsp;
<input class="xl" type="time" />
:::

#### 3.18.17、 url

:::demo html

<input type="url" />&nbsp;&nbsp;
<input type="url" disabled />
<br /><br />
<input class="xs" type="url" />&nbsp;&nbsp;
<input class="sm" type="url" />&nbsp;&nbsp;
<input class="md" type="url" />&nbsp;&nbsp;
<input class="lg" type="url" />&nbsp;&nbsp;
<input class="xl" type="url" />
:::

#### 3.18.18、 week

:::demo html

<input type="week" />&nbsp;&nbsp;
<input type="week" disabled />
<br /><br />
<input class="xs" type="week" />&nbsp;&nbsp;
<input class="sm" type="week" />&nbsp;&nbsp;
<input class="md" type="week" />&nbsp;&nbsp;
<input class="lg" type="week" />&nbsp;&nbsp;
<input class="xl" type="week" />
:::

#### 3.18.19、 color

:::demo html

<input type="color" />&nbsp;&nbsp;
<input type="color" disabled />
<br /><br />
<input class="xs" type="color" />&nbsp;&nbsp;
<input class="sm" type="color" />&nbsp;&nbsp;
<input class="md" type="color" />&nbsp;&nbsp;
<input class="lg" type="color" />&nbsp;&nbsp;
<input class="xl" type="color" />
:::

#### 3.18.20、 file

:::demo html

<input type="file" />
:::

#### 3.18.21、 range

:::demo html

<input type="range" />
:::

### 3.19、 select 标签

:::demo html

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
:::

### 3.20、 textarea 标签

:::demo html

<textarea />
<textarea class="xs" />
<textarea class="sm" />
<textarea class="md" />
<textarea class="lg" />
<textarea class="xl" />
:::

### 3.21、 legend 标签

:::demo html

<legend>我是 legend 标签</legend>
:::

### 3.22、 label 标签

:::demo html

<label>我是 label 标签</label>
:::

### 3.23、 output 标签

:::demo html

<output>我是 output 标签</output>
:::

### 3.24、 blockquote 标签

:::demo html

<blockquote>
    我是 blockquote 标签
    <footer>我是 footer 标签</footer>
    <small>我是 small 标签</small>
    <p>我是 p 标签</p>
</blockquote>
:::

### 3.25、 p 标签

:::demo html

<p>我是 p 标签</p>
:::

### 3.26、 address 标签

:::demo html

<address>我是 address 标签</address>
:::

### 3.27、 ol、ul、dl 标签

:::demo html

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
:::

### 3.28、 table 标签

<h6>默认表格：</h6>

:::demo html

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
:::

<h6>带边框表格：</h6>

:::demo html

<table border>
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
:::
