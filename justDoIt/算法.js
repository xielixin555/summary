//编程题目总结：https://leetcode-cn.com/circle/discuss/SVKmhR/

//1 计算最优惠的价格
// 定义包含菜品详细信息
let obj = [{
  id: 'ITEM0001',
  text: '黄焖鸡',
  price: 18
}, {
  id: 'ITEM0013',
  text: '肉夹馍',
  price: 6
}, {
  id: 'ITEM0022',
  text: '凉皮',
  price: 8
}]

function bestCharge(order) {
  // 分别统计两种优惠方式
  let total1 = 0
  let total2 = 0
  console.log('=========订单明细=========')
  order.forEach(el => {
    let _el = el.split(' ')
    obj.forEach(item => {
      if (item.id === _el[0]) {
        _el[0] = item.text
        _el[3] = '='
        _el[4] = item.price * _el[2]
        el = _el.join('')
        // 计算总价
        total1 += _el[4]
        if (item.text == '黄焖鸡' || item.text == '凉皮') {
          total2 += _el[4] / 2
        } else {
          total2 += _el[4]
        }
      }
    })
    console.log(el)
  })
  console.log('------------------------')
  if (total1 != total2) {
    // 计算差价
    let _res = total1 - total2
    // 计算满30优惠后的价格
    total1 >= 30 ? total1 -= 6 : ''
    console.log('使用优惠：')
    if (total1 <= total2) {
      console.log('满30减6元，省6元')
      console.log('------------------------')
      console.log('总计:' + total1 + '元')
    } else {
      console.log(`指定菜品半价(黄焖鸡，凉皮)，省${_res}元`)
      console.log('------------------------')
      console.log('总计:' + total2 + '元')
    }
  } else {
    console.log('总计:' + total2 + '元')
  }
}


// 测试
// bestCharge(["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"])
// bestCharge(["ITEM0013 x 4", "ITEM0022 x 1"])
// bestCharge(["ITEM0013 x 4"])

//2.反转字符串
// let t = 'I am a good boy'
// let arr = t.split(' ')
// let res = []
// for (let i = arr.length - 1; i >= 0; --i) {
//   res.push(arr[i])
// }
// return res.join(' ')


//3.命中线段
//方法(1):(时间复杂度 O(n):使用了一次循环)
// function segmentsHitTest(segments, target) {
//   for (let i = 0; i < segments.length; i++) {
//     if (segments[i][0] <= target && target <= segments[i][1]) {
//       return i
//     }
//   }
//   return -1
// }

//方法(2):使用二分法(时间复杂度 O(logn))
// 在一维坐标轴上, 输入若干不重叠的线段和一个给定的坐标, 输出此坐标命中的线段索引.
// 1. 每条线段由[起始坐标, 终止坐标]组成;
// 2. 坐标大于等于0且小于等于1000000;
// 3. 输出命中线段的索引, 如果没有命中, 则输出-1;
// 4. 所有线段均不重叠, 且输入是有序的;
function segmentsHitTest(segments, target) {
  let len = segments.length,
    from = 0;
  while (len > 1) {
    let mid = from + Math.floor(len / 2);
    //如果当前中间位置的元素符合条件，直接return
    if (segments[mid][0] <= target && segments[mid][1] >= target) return mid;
    else if (segments[mid][1] < target) {
      //如果target > 当前元素的最大值，要往右边找
      len = Math.floor(len / 2) - 1;
      from = mid + 1; //中间值往右找
    } else {
      //如果target < 当前元素的最小值，只把数组length缩短
      len = Math.floor(len / 2);
    }
  }
  return segments[from][0] <= target && segments[from][1] >= target ? from : -1;
}
// segmentsHitTest([
//   [0, 5],
//   [6, 10],
//   [12, 15]
// ], 7)
//4.简单算术表达式????
// 输入一行算术表达式, 请编写函数给出算术表达式的结果, 如果算术表达式不成立, 抛出异常.
// 说明
// 1. 算术表达式中均为整数;
// 2. 表达式中只包含字符[0-9+-*/];
// 3. 禁止使用eval与new Function('');
// 加分项
// 1. 考虑表达式中包含括号的情况

// 输入示例: "32+64*2-10/5"
// 输出示例: 158
function executeExpression(expression) {
  console.log(expression.split(''))
  let ff = expression.split('')
  for (let i = 1; i < ff.length; i++) {
    //???
  }
}
// executeExpression('32+64*2-10/5')

//5.原生写tab切换
//1).获取标签元素  2).获取内容元素
// let tabChange = document.querySelector('#tabs')
// let contentChange = document.querySelector('#content')
// for(let i=0;i<tabChange.length;i++){
//   tabChange[i].onclick = function(){
//     for(let i=0;i<contentChange.length;i++){
//       //把所有元素的diaplay样式清空
//       contentChange[i].style.display = 'none'
//     }
//     //把当前点击的内容元素显示
//     contentChange[i].style.display = 'block'
//   }
// }

//6.原生写轮播
// let arr = ['aa', 'bb', 'cc', 'dd', 'ee']
// let i = 0
// let elem = document.getElementsByTagName('img')
// setInterval(() => {
//   elem.src = arr[i]
//   i++
//   if (i == (arr.length - 1)) {
//     i = 0
//   }
// }, 1000)

//放抖：n秒内执行一次，若在n秒内重新触发，则重新计算时间
//常用于用户进行搜索输入，节约请求资源，window触发resize事件进行放抖只触发一次
function debounce(fn, time) {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}

//节流：n秒内只触发一次，会稀释函数执行频率
function thrrow(fn, time) {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true
    }, time)
  }
}


//new操作
// 1，创建一个新对象
// 2，把新对象的原型指向为构造函数的原型对象
// 3，改变构造函数的this指向为当前创建的对象
// 4，根据返回值判断是否为一个对象，是则返回当前返回值，不是返回改变了this指向的创建出来的新对象
function newOperator(el, ...args) {
  if (typeof el !== 'function') {
    throw new TypeError('Type Error')
  }
  const obj = Object.create(el.prototype)
  const res = el.apply(obj, args)
  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}

//排序算法
//1.冒泡排序
function bubleSort(arr) {
  let len = arr.length
  for (let i = 0; index < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}

//2.快速排序:找一个基准值
function quickSort(arr) {
  let mark = arr[0] //基准值
  let leftArr = []
  let rightArr = []
  if (arr.length <= 1) return arr;
  else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= mark) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }
  }
  return quickSort(leftArr).concat([mark], quickSort(rightArr))
}

//3.归并排序：长度/2，分为左右两边
function mergeSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  else {
    let index = Math.floor(len / 2);
    let left = arr.slice(0, index);
    let right = arr.slice(index);
    return mergeSort(mergeSort(left), mergeSort(right));
  }
}

function merge() {
  let res = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return arr.concat(left, right);
}

//递归深拷贝
function deepClone(obj) {
  let res = Array.isArray(obj) ? [] : {}
  if (res && typeof res == 'object') {
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        //如果当前项还是一个对象，递归克隆
        res[key] = deepClone(obj[key]);
      } else {
        res[key] = obj[key]
      }
    }
  }
  return res;
}
//路由钩子函数
// 全局导航：beforeEach,beforeResolve,afterEach
// 组件内：beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave
// 路由独享:beforeEnter

//需要几个会议室
function meeting(time) {
  let count = 0
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if (time[j][0] < time[i][1] && time[j][0] > time[i][0]) {
        //上一次的开始时间 < 下一个会议的开始时间 < 上一次的结束时间，会议室+1
        count++
      }
    }
  }
  return count
}
// meeting([[10,20],[19,30],[25,30]])

//把URL中的参数转成对象
function getParam(url) {
  let arr = url.split('?')[1].split('&')
  let obj = {}
  arr.forEach(el => {
    let [key, value] = el.split('=')
    if (!value) {
      obj[key] = ''
    } else {
      obj[key] = value
    }
  })
  console.log(obj)
  // return obj
}
// getParam('http://sample.com/?a=1&e&b=2&c=xx&d')

//将 HTTP header 转换成 js 对象
function getHttp(str) {
  let arr = str.split('\n')
  let res = {}
  arr.forEach(el => {
    let [key, value] = el.split(':')
    res[key] = value
  });
  console.log(res)
}
// getHttp(
//   `Accept-Ranges: bytes 
// Cache-Control: max-age=6000, public
// Connection: keep-alive
// Content-Type: application/javascript`)

//将数组转化为树形结构
function buildTree(arr) {
  tmp = {};
  res = {};
  for (let i in arr) {
    tmp[arr[i].id] = arr[i];
  }
  for (let i in tmp) {
    if (tmp[i].parent_id) { // 如果节点没有父节点，即该节点为根节点
      if (!tmp[tmp[i].parent_id].children) { // 该节点的父节点和该节点没有形成关系
        tmp[tmp[i].parent_id].children = new Object();
      }
      tmp[tmp[i].parent_id].children[tmp[i].id] = tmp[i];
    } else {
      res[tmp[i].id] = tmp[i];
    }
  }
  console.log(res)
}
var menu_list = [{
  id: '1',
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
}, {
  id: '1-1',
  menu_name: '权限设置',
  menu_url: 'setting.permission',
  parent_id: '1'
}, {
  id: '1-1-1',
  menu_name: '用户管理列表',
  menu_url: 'setting.permission.user_list',
  parent_id: '1-1'
}, {
  id: '1-1-2',
  menu_name: '用户管理新增',
  menu_url: 'setting.permission.user_add',
  parent_id: '1-1'
}, {
  id: '1-1-3',
  menu_name: '角色管理列表',
  menu_url: 'setting.permission.role_list',
  parent_id: '1-1'
}, {
  id: '1-2',
  menu_name: '菜单设置',
  menu_url: 'setting.menu',
  parent_id: '1'
}, {
  id: '1-2-1',
  menu_name: '菜单列表',
  menu_url: 'setting.menu.menu_list',
  parent_id: '1-2'
}, {
  id: '1-2-2',
  menu_name: '菜单添加',
  menu_url: 'setting.menu.menu_add',
  parent_id: '1-2'
}, {
  id: '2',
  menu_name: '订单',
  menu_url: 'order',
  parent_id: 0
}, {
  id: '2-1',
  menu_name: '报单审核',
  menu_url: 'order.orderreview',
  parent_id: '2'
}, {
  id: '2-2',
  menu_name: '退款管理',
  menu_url: 'order.refundmanagement',
  parent_id: '2'
}]
// buildTree(menu_list)

//数组扁平化
function flatten(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result;
}
// console.log(flatten([1, 2, 3, [4, 5, [6]]]))

// 实现 Promise.all()
function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    //all()方法是多个promise对象并行执行，所以参数必须是个数组
    if (!isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(function (value) {
          resolvedCounter++
          //并且是按顺序返回结果
          resolvedValues[i] = value
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedValues)
          }
        }, function (reason) {
          return reject(reason)
        })
      })(i)
    }
  })
}

//每隔一秒输出一个数字（三种方法）
// -1.使用let(没有变量提升，生成块级作用域)
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i)
// }

// -2.使用闭包
// 通过闭包，将i的变量驻留在内存中，当输出j时，引用的是外部函数A的变量值i，
// i的值是根据循环来的，执行setTimeout时已经确定了里面的的输出了。
// for (var i = 0; i < 10; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000 * j)
//   })(i) 
// }

// -3.第三个参数
//setTimeout第三个参数是给函数表达式传参
// for (var i = 0; i <= 5; i++) {
//   setTimeout((j) => {
//     console.log(j);
//   }, i * 1000, i)
// }
eg:
  // function fn2(){
  //      for(var i=0;i<4;i++){
  //        var timer=setInterval(function(i,timer){
  //          console.log(i);
  //          clearInterval(timer)
  //        },10,i,timer);
  //      }
  //    }
  //    fn2();
  //输出： 0 1 2 3 3 3 （3 重复） 因为第三个参数是给函数传参，i加到3就不变了

  //实现一个函数，random，入参是一个数组 arr，每次执行random，输出一个随机arr数组
  function random(arr) {
    let len = arr.length
    let newArray = []
    let selectItem = null
    while (newArray.length < len) {
      //随机生成一个0~9之间的数字并从arr中取值
      selectItem = arr[Math.floor(Math.random() * 10)]
      //判断新数组中是否存在此次取出的值，若存在说明不可用进入下次循环，若不存在则存入新数组
      if (typeof selectItem !== 'undefined' && newArray.indexOf(selectItem) < 0) {
        newArray.push(selectItem)
      }
    }
    console.log(newArray)
  }
random([1, 2, 3, 4])

//原生Ajax
//1.创建xhr对象
var xhr = new XMLHttpRequest()
//2.配置请求地址
xhr.open('get', 'index.html', true)
//3.发送请求
xhr.send(null)
//4.监听请求，接收响应
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
    console.log(xhr.responseXML);
  }
}