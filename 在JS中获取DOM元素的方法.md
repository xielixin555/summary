### 在JS中获取DOM元素的方法

**getElementById**

> 通过元素的ID获取指定的元素对象，使用的时候都是'document.getElementById('')'，此处的document是限定了获取元素的范围，我们把它称之为“上下文(context)”

+ getElementById的上下文只能是document

> 因为严格意义上，一个页面中的ID是不能重复的，浏览器规定在整个文档中即可以获取这个唯一的ID

+ 如果页面中的ID重复了。我们基于这个方法只能获取到第一个元素，后面相同ID元素无法获取

+ 在IE6~7浏览器中，会把表单元素（input...）的name属性值当作ID来使用（建议：以后使用表单元素的时候，不要让name的ID值有冲突）

**getElementsByTagName**

> [context].getElementsByTagName在指定的上下文中，根据标签名获取到一组**`元素集合（HTMLCollection）`**

+ 获取的元素集合是一个类数组（不能直接使用数组中的方法）

  ![1561689227774](C:\Users\0.0\AppData\Roaming\Typora\typora-user-images\1561689227774.png)

+ 他会把当前上下文中，子子孙孙（后代）层级内的标签都获取到（获取的不仅仅是儿子级的）

+ 基于这个方法获取到的结果永远都是一个集合（不管里面是否有内容，也不管有几项，他是一个容器或者集合），如果想操作集合中具体的某一项，需要基于索引获取到才可以

**getElementsByClassName**

> [context].getElementsByClassName在指定的上下文中,基于元素的样式类名（class=‘xxx’）获取到一组元素集合

+ 真实项目中，我们经常是基于样式类来给元素设置样式，所以在JS中，我们也会经常基于样式类类获取元素，但是此方法在IE6~8下不兼容

  ​    兼容处理方案参考：

![1561690088140](C:\Users\0.0\AppData\Roaming\Typora\typora-user-images\1561690088140.png)

**getElementsByName**

> document.getElementsByName('')他的上下文也只能是document，在整个文档中，基于元素的name属性值获取一组节点集合（也是一个类数组）

+ 在IE浏览器中（IE9及以下版本)，只对表单元素的name属性起作用（正常来说：项目中只会给表单元素设name，给非表单元素设置name，其实是一个不符合规范的操作）【name属性是用于分组，比如：单选按钮name属性一样，可以选男女】

**querySelector**

> [context].querySelector()在指定的上下文中基于选择器（类似于css选择器），获取到指定的元素对象（获取的是一个元素，哪怕选择器匹配了多个，我们只获取第一个）

**querySelectorAll**

> 在querySelector的基础上，获取到选择器匹配到的所以元素，结果是一个节点集合（NodeList）

+ querySelector/querySelectorAll 都是不兼容IE6~8浏览器（不考虑兼容的情况下，能用byId或者其他方式获取的，尽量不要用这个两个方法，这两个方法性能消耗较大）

**document.head**

+ 获取head元素对象

**document.body**

+ 获取body元素对象

**document.documentElement**

+ 获取HTML元素对象

  

```
//=>需求：获取浏览器一屏幕的宽度和高度（兼容所有浏览器）
document.documentElement.clientWidth || document.body.clientWidth
document.documentElement.clientHeight || document.body.clientHeight
```

#### 面试题：获取当前页面中所以ID为HAHA的元素（兼容所有的浏览器）

```
一、
//1.首先获取当前文档中所有的HTML标签
//2.依次遍历这些元素标签对象，谁的ID=HAHA，就把它存储起来
function queryAllById(id){
	//=>基于通配符*获取到整个文档中所有的HTML标签
	var nodeList = document.getElementsByTagName('*')
	//=>遍历集合中的每一项，把元素ID和传递的ID相同，就存储
	var ary = [];
	for(var i = 0; i < nodeList.length; i++){
		var item = nodeList[i];
		item.id === id ? ary.push(item) : null;
	}
	return ary;
}
```

```
二、
console.log(HAHA);//=>在JS中，默认会把元素的ID设置为变量（不需要自己获取设置），而且ID重复，获取的结果就是一个集合，包含所有ID项，不重复就是获取一个元素对象（类似于ById获取的结果）
```

### 节点（node）

> 在一个HTML文档当中出现的所有东西都是节点
>
> > - 元素节点（HTML标签）
> > - 文本节点（文字内容）
> > - 注释节点（注释内容）
> > - 文档节点（document）
> > - ......

每一种类型的节点都会有一些属性区分自己的特性和特征

- nodeType：节点类型 -------重点（1、3、8、9）
- nodeName：节点名称
- nodeValue：节点值

- `元素节点`

nodeType：1

nodeName：大写标签名

nodeValue：null

- `文本节点`（在标准浏览器中，会把空格、换行等都当作文本节点处理）

nodeType：3

nodeName：‘#text’

nodeValue：文本内容

- `注释节点`

nodeType：8

nodeName：‘#comment’

nodeValue：注释内容

- `文档节点`

nodeType：9

nodeName：‘#document’

nodeValue：null



### 描述节点之间关系的属性

**parentNode**

> 获取当前节点位移的父亲节点

**childNodes**

> 获取当前元素的所有子节点
>
> - 子节点：只获取儿子级别的
> - 所有：包含元素节点、文本节点等

**children**

> 获取当前元素所有的元素子节点
>
> 在IE6~8中会把注释节点也当作元素节点获取到，兼容性不好

**previousSibling**

> 获取当前节点的上一个哥哥节点（获取的可能是元素，也可能是文本、注释等）
>
> previousElementSibling：获取当前节点的上一个哥哥元素节点（不兼容IE6~8）

**nextSibling**

> 获取当前节点的下一个弟弟节点
>
> nextElementSibling：下一个弟弟元素节点（不兼容IE6~8）

**firstChild**

> 获取当前元素的第一个子节点（可能是元素、文本等）
>
> firstElementChild：获取第一个元素子节点（不兼容IE6~8）

**lastChild**

> 获取当前元素的最后一个子节点
>
> lastElementChild：获取最后一个元素子节点（不兼容IE6~8）



需求一：获取当前元素的所有元素子节点

> 基于children不兼容IE低版本浏览器（会把注释当作元素节点）![img](file:///C:\Users\0.0\Documents\Tencent Files\719324178\Image\C2C\GV9$@XOT9]~76}SUMF776RJ.png)
>
> ```
> //注释如上
> 
> function children(curEle){
> 	//=>首先获取当前元素下所有的子节点，然后遍历这些节点，筛选出元素（NODE-TYPE===1）,把筛选出来的结果单独存储起来
> 	var nodeList = curEle.childNodes,
> 		result = [];
> 		for(var i = 0; i < nodeList.length; i++){
> 			var item = nodeList[i];
> 			if(item.nodeType === 1){
> 				result.push(item);
> 			}
> 		}
> 		return result;
> }
> children(xxx);
> ```
>
> 

需求二：获取当前元素的上一个哥哥元素节点

> previousElementSibling：获取当前节点的上一个哥哥元素节点（不兼容IE6~8）
>
> ```
> function prev(curEle){
> 	//=>先找到当前元素的哥哥节点，看是否为元素节点，不是的话基于哥哥，找哥哥的上一个哥哥节点...一直找到元素节点或者已经没有哥哥了，则结束查找
> 	var pre = curEle.previousSibling;
> 	/*
> 	 * pre是验证有还是没有，没有pre是null；
> 	 * pre.nodeType是验证是否为元素节点
> 	 */ 
> 	while(pre && pre.nodeType !== 1){
> 		pre = pre.previousSibling;
> 	}
> 	return pre;
> }
> ```
>
> 

 

![img](file:///C:\Users\0.0\Documents\Tencent Files\719324178\Image\C2C\IS2X74EE0K2XA%~EU[P0EYT.png)



### 关于DOM的增删改

**createElement**

> 创建一个元素标签（元素对象）
>
> document.createElement([标签名])

**createTextNode** (很少用)

**appendChild**

> 把一个元素对象插入到指定容器的末尾
>
> [container].appendChild( [newEle] )
>
> ![1562124368547](C:\Users\0.0\AppData\Roaming\Typora\typora-user-images\1562124368547.png)

**insertBefore**

> 把一个元素对象插入到指定容器中某一个元素标签之前
>
> [container].insertBefore( [newEle]，[oldEle] )
>
> ![1562124385995](C:\Users\0.0\AppData\Roaming\Typora\typora-user-images\1562124385995.png)

**cloneNode**

> 把某一个节点进行克隆
>
> [curEle].cloneNode()：浅克隆，只克隆当前标签
>
> [curEle].cloneNode(true)：深克隆，当前标签及其里面的内容，样式都一起克隆了

**removeChild**

> 在指定容器中删除某一个元素
>
> [container].removeChild( [curEle] )

**set/get/removeAttribute**

> 设置/获取/删除 当前元素的某一个自定义属性
>
> ```
> var oBox = document.getElementById('box');
> // 1.把当前元素作为一个对象，在对象对应的堆内存中新增一个自定义属性
> oBox,myIndex = 10;//=>设置
> console.log(oBox['myIndex']);//=>获取
> delete oBox.myIndex;//=>删除
> 
> // 2.基于Attribute等DOM方法完成自定义属性的设置（自定义属性都是字符串）
> oBox.setAttribute('myColor','red');//=>设置
> oBox.getAttribute('myColor');//=>获取
> oBox.removeAttribute('myColor');//=>删除
> 
> 上下两种机制属于独立的运作机制；不能互相混淆使用（如下图）
> - 第一种是基于对象键值对操作方式，修改当前元素对象的堆内存空间来完成
> - 第二种是直接修改页面中HTML标签的结构来完成（此办法设置的自定义属性可以在结构上呈现出来，一般不安全）
> ```
>
> ![1562125702535](C:\Users\0.0\AppData\Roaming\Typora\typora-user-images\1562125702535.png)



需求：解析一个URL字符串问号传参和HASH值部分

```
function queryURLParameter(str){
	//1.创建一个A标签，把需要解析的地址当作A标签的herf赋值
		var link = document.creatElement('a');
		link.href = str;//页面中不需要展示A，只是想要利用他的属性
	//2.A元素对象的HASH/SEARCH两个属性分别存储了哈希值和参数
		var search = link.search.substr(1),// substr(1).从索引为1开始，截取到末尾，因为参数以 ? 开头
		    hash = link.hash.substr(1);// 哈希值以 # 开头
	//3.分别解析出HASH和参数即可
		var obj = {};
		hash ? obj.HASH = hash :null //如果hash值存在，把该值赋给obj的HASH属性，否则为空
		if(search){
			//先按照 & 拆分
			search = search.split('&');
			for(var i = 0; i < search.length; i++){
				var itemAry = search[i].split('=');//按照 = 拆分
				obj[itemAry[0]] = itemAry[1]  //把第一项作为属性名，第一项作为属性值
			}
		}
		return obj;
}
```

