# Flex

<https://www.zhangxinxu.com/wordpress/2020/10/css-flex-0-1-none/>

`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`这3个CSS属性的缩写

|   单值语法    |     等同于     |     备注     |
| :-----------: | :------------: | :----------: |
| flex: initial | flex: 0 1 auto | 初始值，常用 |
|    flex: 0    |  flex: 0 1 0%  |  适用场景少  |
|  flex: none   | flex: 0 0 auto |     推荐     |
|    flex: 1    |  flex: 1 1 0%  |     推荐     |
|  flex: auto   | flex: 1 1 auto |  适用场景少  |

- `flex:initial`表示默认的flex状态，无需专门设置，适合小控件元素的分布布局，或者某一项内容动态变化的布局；
- `flex:0`适用场景较少，适合设置在替换元素的父元素上；
- `flex:none`适用于不换行的内容固定或者较少的小控件元素上，如按钮。
- `flex:1`适合等分布局；
- `flex:auto`适合基于内容动态适配的布局；

#### **1.flex:initial基本表现和适用场景**

![flex属性初始值分解示意](https://image.zhangxinxu.com/image/blog/202005/6-39_flex-initial.png)

`flex:initial`等同于设置`flex: 0 1 auto`，可以理解为flex属性的默认值。如果子项内容很多，由于`flex-shrink:1`，因此，会缩小，表现效果就是文字换行

> flex容器有剩余空间时尺寸不会增长（flex-grow:0），flex容器尺寸不足时尺寸会收缩变小（flex-shrink:1），尺寸自适应于内容（flex-basis:auto）（行为类似fit-content）

![flex子项内容较多时候的尺寸表现](https://image.zhangxinxu.com/image/blog/202005/6-41_flex-initial-more.png)

适用布局：

![适合flex:initial声明的两栏自适应布局轮廓图示意](https://image.zhangxinxu.com/image/blog/202010/6-45-insert_flex-initial-suitable2.png)![适合flex:initial声明的布局轮廓图示意](https://image.zhangxinxu.com/image/blog/202010/6-45-insert_flex-initial-situable2.png)

#### 2. flex:0和flex:none的区别和各自适用场景

![flex:0和flex:none分解示意](https://image.zhangxinxu.com/image/blog/202012/flex-0-none.png)

`flex:0`等同于设置`flex: 0 1 0%`，`flex:none`等同于设置`flex: 0 0 auto`

- `flex:0 1 0%`表示`flex-grow`是0，`flex-shrink`是1，因此元素尺寸会收缩但不会扩展，在加上`flex-basis:0%`表示建议支持是0，因此，设置`flex:0`的元素的最终尺寸表现为最小内容宽度；
- `flex:0 0 auto`表示元素尺寸不会收缩也不会扩展，再加上`flex-basis:auto`表示固定尺寸由内容决定，由于元素不具有弹性，因此，元素内的内容不会换行，最终尺寸通常表现为最大内容宽度。

![flex:0和flex:none的布局效果示意](https://image.zhangxinxu.com/image/blog/202010/6-45_flex-0-none.png)

适用布局：

​					flex:0

![适用于flex:0的布局轮廓示意图](https://image.zhangxinxu.com/image/blog/202010/6-49-insert_flex-0-suitable2.png)

​					flex:none

![适用于flex:none的对比效果示意图](https://image.zhangxinxu.com/image/blog/202010/6-50-insert_flex-none-suitable.png)

#### 3. flex:1和flex:auto的区别和各自适用场景

![flex:1和flex:auto分解示意](https://image.zhangxinxu.com/image/blog/202010/6-53-_flex-1-auto-replace.png)

`flex:1`等同于设置`flex: 1 1 0%`，`flex:auto`等同于设置`flex: 1 1 auto`

- 元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性

- 但是`flex:1`在尺寸不足时会优先最小化内容尺寸，

  `      flex:auto`在尺寸不足时会优先最大化内容尺寸

![flex:1和flex:auto的对比效果示意](https://image.zhangxinxu.com/image/blog/202010/6-43_flex-1-auto.png)

适用布局：

​					flex:1

![flex:1适合用在固定比例的列表中](https://image.zhangxinxu.com/image/blog/202010/6-54-insert-_flex-1-suitable.png)

​					flex:auto

![flex:auto实现的基于内容宽度自动分配的导航效果示意](https://image.zhangxinxu.com/image/blog/202010/6-57-insert-_flex-auto-suitable.png)

