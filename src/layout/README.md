# Layout 布局

## 1、 案例

<h4>用于布局的容器组件，方便快速搭建页面的基本结构:</h4><br/>
Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。<br/>
Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br/>
Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。<br/>
Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br/>
Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

### 1.1、基本布局

#### 1.1.1、上-中-下 布局

:::demo html

<div>
    <mb-layout>
        <mb-header style="background: #7dbcea; color: #fff;">Header</mb-header>
        <mb-content style="height: 50px; background: #108ee9; color: #fff;">Content</mb-content>
        <mb-footer style="background: #7dbcea; color: #fff;">Footer</mb-footer>
    </mb-layout>
</div>
:::

#### 1.1.2、上-中（左-右）-下 布局

:::demo html

<div>
    <mb-layout>
        <mb-header style="background: #7dbcea; color: #fff;">Header</mb-header>
        <mb-layout>
            <mb-sider style="height: 50px; background: #3ba0e9; color: #fff;">Sider</mb-sider>
            <mb-content style="background: #108ee9; color: #fff;">Content</mb-content>
        </mb-layout>
        <mb-footer style="background: #7dbcea; color: #fff;">Footer</mb-footer>
    </mb-layout>
</div>
:::

#### 1.1.3、左-右（上-中-下） 布局

:::demo html

<div>
    <mb-layout>
        <mb-sider style="background: #3ba0e9; color: #fff;">Sider</mb-sider>
        <mb-layout>
            <mb-header style="background: #7dbcea; color: #fff;">Header</mb-header>
            <mb-content style="height: 50px; background: #108ee9; color: #fff;">Content</mb-content>
            <mb-footer style="background: #7dbcea; color: #fff;">Footer</mb-footer>
        </mb-layout>
    </mb-layout>
</div>
:::

### 1.2、 侧边栏收缩

:::demo html

<div>
    <mb-layout>
        <mb-header style="background: #7dbcea; color: #fff;">Header</mb-header>
        <mb-layout>
            <mb-sider trigger style="background: #3ba0e9; color: #fff;">
                <ul>
                    <li class="mb-menu-item-span" style="height: 40px; line-height: 40px; overflow: hidden; padding: 0 10px; display: flex; align-items: center;"><mb-icon type="heart" :size="24"/><span>测试菜单一</span></li>
                    <li class="mb-menu-item-span" style="height: 40px; line-height: 40px; overflow: hidden; padding: 0 10px; display: flex; align-items: center;"><mb-icon type="hdd" :size="24"/><span>测试菜单二</span></li>
                    </ul>
            </mb-sider>
            <mb-content style="background: #108ee9; color: #fff;">Content</mb-content>
        </mb-layout>
        <mb-footer style="background: #7dbcea; color: #fff;">Footer</mb-footer>
    </mb-layout>
</div>
:::

## 2、 API 配置

### 2.1、 Layout

| 参数   | 说明 | 类型           | 默认值 | 可选值 |
| ------ | ---- | -------------- | ------ | ------ |
| height | 高度 | String, Number | -      | -      |

### 2.2、 Header

| 参数   | 说明 | 类型           | 默认值 | 可选值 |
| ------ | ---- | -------------- | ------ | ------ |
| height | 高度 | String, Number | -      | -      |

### 2.3、 Sider

| 参数                 | 说明                                | 类型           | 默认值             | 可选值             |
| -------------------- | ----------------------------------- | -------------- | ------------------ | ------------------ |
| width                | 展开宽度                            | String, Number | 200                | -                  |
| collapsedWidth       | 收起宽度                            | String, Number | 60                 | -                  |
| collapsed            | 当前收起状态                        | Boolean        | false              | true               |
| trigger              | 开启收缩栏状态                      | Boolean        | false              | true               |
| triggerIcon          | 收缩栏状态展开图标                  | String         | angle-double-left  | -                  |
| triggerCollapsedIcon | 收缩栏状态收缩图标                  | String         | angle-double-right | -                  |
| triggerIconSize      | 收缩栏状态图标尺寸                  | String, Number | 16                 | -                  |
| breakpoint           | 触发响应式布局的断点,不支持 uni-app | String         | -                  | xs sm md lg xl xxl |

<br/>
<br/>
断点宽度说明:

```json
{
    "xs": "480px",
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "xl": "1200px",
    "xxl": "1600px"
}
```

### 2.4、 事件

| 事件名     | 说明                       | 回调参数  |
| ---------- | -------------------------- | --------- |
| collapse   | 展开-收起时的回调函数      | collapsed |
| breakpoint | 触发响应式布局断点时的回调 | broken    |
