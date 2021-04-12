# float与absolute脱离文档流的区别

#### **float**

使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，==环绕在周围==。

```html
<style>
   .firstdiv{
    background-color:rgba(125,125,235,0.4);
    height:200px;
    width: 200px;
    float: left;
  }
  .seconddiv{
    background-color: #faf;
    height:300px;
    width: 300px;
    border:1px solid red;
  }
  
</style>

<body>
  <div class="firstdiv"> 这是第一个DIV</div>
  <div class="seconddiv">这是第二个DIV</div>
</body>
```

![图片描述](https://segmentfault.com/img/bVE2fR?w=324&h=323)

#### absolute

使用absolute position脱离文档流的元素，==其他盒子与其他盒子内的文本==都会无视它。
例如：将上例中float：left改为position: absolute。可以看到，第二个div的文字亦被第一个div的文字给覆盖了

![图片描述](https://segmentfault.com/img/bVE2gQ?w=392&h=357)

# box-sizing有哪些属性

- box-sizing 是用于告诉浏览器如何计算一个元素是总宽度和总高度
  盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。

- 标准盒模型 box-sizing: content-box

  width = content-width;
  height = content-height

  

- IE盒模型 box-sizing: border-box

  width = border + padding + content-width
  heigth = border + padding + content-heigth

```html
<style>
div {
  width: 160px;
  height: 80px;
  padding: 20px;
 border: 8px solid orange;
  background: pink;
}

 /**元素的总宽度 = 160 + 20*2 + 8*2; 总高度 = 80 + 20*2 + 8*2 ; */ 
.content-box { 
  box-sizing: content-box; 
}

 /** 元素的总宽度 = 160; 总高度 = 80px; */  
.border-box { 
  box-sizing: border-box;
}
</style>

<body>
    <div class="content-box">Content box</div>
	<div class="border-box">Border box</div>
</body>

```

![img](https://upload-images.jianshu.io/upload_images/7967724-80dc9f2fd9f256bc.png?imageMogr2/auto-orient/strip|imageView2/2/w/253/format/webp)

总结一下：
 1.对于给定width和height的元素，设置box-sizing属性会影响盒子content-width和 content-height。
 2.浏览器默认使用标准盒子模型，即box-sizing: content-box, 就是我们所写的宽度和高度就是对content 进行设置的。
 3.在一些响应式布局中，我们修改了浏览器计算元素宽度、高度的方式，认为元素的宽度和高度是包括内边距padding和边框border