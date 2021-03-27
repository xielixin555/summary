// 本试卷唯一 ID: ACF59AD70E3FF1BA292F3E6818A57FBC, 请勿修改本行内容
/**
 * 回答方式: 直接保存或者复制本js文件, 然后在原处作答. 注意不要改动函数结构
 * 在原本的函数体里返回正确答案
 * 本卷直接用代码判卷, 没有人工干预. 格式改动会导致试卷无效
 */
module.exports = {
  // 选择题, 单项选择, 每题4分
  // 直接返回正确答案字符串, 如 `return 'A';`
  // 实现题, 每题10分

  qn0: () => {
    // 只是样例! 不用改动
    //
    // A. 别选我
    //
    // B. 别选我
    //
    // C. 别选我
    //
    // D. 选我, 选我就得分

    return 'D';
  },



  qn1: () => {
    // CSS中, flex是哪三个flex关键字的简写 (可以查文档):
    //
    // A. flex-grow, flex-shrink, flex-basis
    //
    // B. flex-direction, flex-grow, flex-shrink
    //
    // C. flex-direction, flex-basis, flex-flow
    //
    // D. flex-direction, flex-wrap, flex-flow

    return 'A';
  },



  qn2: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    console.log(0.25 + 0.25 === 0.5);
    //    console.log(0.1 + 0.2 === 0.3);
    //    ```
    //
    // A. false true
    //
    // B. false false
    //
    // C. true true
    //
    // D. true false

    return 'C';
  },



  qn3: () => {
    // 关于HTTPS / SSL / TLS, 以下错误的是:
    //
    // A. 当客户端收到服务器端发送的证书, 证书充当公钥. 为了验证证书有效性, 用客户端已经安装的CA证书检查
    //
    // B. 最常用的非对称加密算法RSA, 是基于大素数分解质因数实现的
    //
    // C. 后续的HTTPS通讯, 客户端和服务器端的通讯会使用非对称加密
    //
    // D. 公司内网需要监控解密HTTPS时, 可以在客户端安装公司自己的CA证书

    return 'B';
  },



  qn4: () => {
    // 以下哪个不是服务器端渲染SSR的问题:
    //
    // A. 框架支持不完善
    //
    // B. 搜索引擎不执行JS
    //
    // C. 性能开销大
    //
    // D. 缓存机制复杂

    return 'A';
  },



  qn5: () => {
    // 前端在 foobar.com, 向 api.foobar.com 发送请求, 以下哪个请求不需要OPTIONS preflight (以Chrome为准):
    //
    // A. 一个PUT请求, 没有头
    //
    // B. 一个POST请求, 有User-Agent和Connection头
    //
    // C. 一个GET请求, 有Content-Type头, 值为application/json
    //
    // D. 一个HEAD请求, 有Authorization头

    return 'D';
  },



  qn6: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    const a = [];
    //    for (var i=0; i<10; i++) {
    //      a.push(function() {
    //        return console.log(i);
    //      });
    //    }
    //    a[0]();
    //    a[1]();
    //    ```
    //
    // A. undefined undefined
    //
    // B. 10 10
    //
    // C. 不打印
    //
    // D. 0 1

    return 'B';
  },



  qn7: () => {
    // 关于git, 以下命令中只涉及本地仓库的为:
    //
    // A. git fetch --all
    //
    // B. git reset --hard ORIG_HEAD
    //
    // C. git branch -l -a
    //
    // D. git push

    return 'B';
  },



  qn8: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    function fn2(){
    //      for(var i=0;i<4;i++){
    //        var timer=setInterval(function(i,timer){
    //          console.log(i);
    //          clearInterval(timer)
    //        },10,i,timer);
    //      }
    //    }
    //    fn2();
    //    ```
    //
    // A. 0 1 2 3 0 1 2 3 四个数重复
    //
    // B. 0 1 2 3 3 3 3 重复
    //
    // C. 打印为空
    //
    // D. 0 1 2 3 随机顺序出现, 总个数一致

    return 'B';
  },



  qn9: () => {
    // 以下关于Redux, 错误的是:
    //
    // A. Redux store可以从js文件export并在任意位置使用
    //
    // B. 使用Redux时需要先引入React依赖
    //
    // C. Redux用于应用的状态管理
    //
    // D. Reducer中不能做异步操作

    return 'A';
  },



  qn10: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    var m = true;
    //    setTimeout(
    //      function() {
    //        m = false;
    //      }, 3000);
    //    );
    //    while(m) {}
    //    console.log('DONE');
    //    ```
    //
    // A. DONE (约3秒后打印, 不精确)
    //
    // B. DONE (立即打印)
    //
    // C. 不打印
    //
    // D. 代码抛错

    return 'C';
  },



  qn11: () => {
    // 以下哪个场景*不适合*使用WebSocket:
    //
    // A. 身份审核, 提交文件后1-2个工作日审核完毕, WebSocket通知用户审核完毕
    //
    // B. 去中心化游戏应用, 两人对战用WebSocket通知对手位置, 对战结束后胜负结果上链
    //
    // C. 交易页面, 用户用RESTful API下单, WebSocket告知用户订单成交
    //
    // D. 用户在线聊天, 发送聊天内容和接收聊天内容都用WebSocket传输

    return 'A';
  },



  qn12: () => {
    // 关于Linux命令, 错误的是:
    //
    // A. grep -C 3 "关键词" 命令可以找到包含"关键词"的行, 以及展示上面3行和下面3行
    //
    // B. man <some_command> 可以查看命令的手册, man代表manual
    //
    // C. ls -l命令可以列出文件, 但不包含隐藏文件
    //
    // D. cat out.txt | vim 这个命令用管道可以把out.txt中的文本导到vim中编辑

    return 'D';
  },



  qn13: () => {
    // 关于HTML自定义标签, 错误的是:
    //
    // A. 已知的HTML自定义标签才能应用CSS, 以及用JS操作. 未知的HTML标签会成为HTMLUnknownElement的实例
    //
    // B. HTML自定义标签可以应用CSS
    //
    // C. <greeting></greeting> 这段HTML代码是合法的, 可以被正常展示
    //
    // D. HTML自定义标签可以用JS操作

    return 'D';
  },



  qn14: () => {
    // 关于let和var, 以下正确的是:
    //
    // A. let是块级作用域, var是函数级作用域, var变量定义会提升 (hoist), let不会
    //
    // B. let是块级作用域, var是函数级作用域, let和var变量定义都会提升 (hoist)
    //
    // C. let是函数级作用域, var是块级作用域, let变量定义会提升 (hoist), var不会
    //
    // D. let是函数级作用域, var是块级作用域, let和var变量定义都会提升 (hoist)

    return 'A';
  },



  qn15: () => {
    // 以下哪个HTTP状态码非错误状态:
    //
    // A. 500
    //
    // B. 303
    //
    // C. 400
    //
    // D. 404

    return 'B';
  },



  qn16: () => {
    // 以下方法中, 返回值类型和其他最不同的:
    //
    // A. Array.reduce
    //
    // B. Array.splice
    //
    // C. Array.map
    //
    // D. Array.forEach

    return 'D';
  },



  qn17: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    function fn1(){
    //      for(var i=0;i<4;i++){
    //        var timer=setTimeout(function(i){
    //          console.log(i);
    //          clearTimeout(timer)
    //        },10,i);
    //      }
    //    }
    //    fn1();
    //    ```
    //
    // A. 0 1 2 3
    //
    // B. 打印为空
    //
    // C. 3 2 1 0
    //
    // D. 0 1 2

    return 'A';
  },



  qn18: () => {
    // 以下哪个元素, 不符合在默认情况下, 设置margin上下距离和宽高无效, 但是其他样式有效:
    //
    // A. p
    //
    // B. button
    //
    // C. input
    //
    // D. code
    //
    // E. a
    //
    // F. span
    //
    // G. strong
    //
    // H. label
    //
    // I. sub

    return 'A';
  },



  qn19: () => {
    // 以下表达式中能去除所有空格的是:
    //
    // A. str = str.replace(/\s*/g,"");
    //
    // B. str = str.replace(/(\s*$)/g, "");
    //
    // C. str = str.replace( /^\s*/, “”);
    //
    // D. str = str.replace(/^\s*|\s*$/g,"");

    return 'A';
  },



  qn20: () => {
    // 以下哪个权重最大:
    //
    // A. 内联样式
    //
    // B. 标签选择器（如 div、p）
    //
    // C. ID选择器（如 #content ）
    //
    // D. 类选择器（如 .content）

    return 'A';
  },




  /**
   * 统计数组中每个字符串出现次数
   * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
   * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
   */
  frequencyMap: strs => {
    let map = new Map()
    for (let i = 0; i < strs.length; i++) {
      map.set(strs[i], map.has(strs[i]) ? map.get(strs[i]) + 1 : 1)
    }
    return map;
  },
  /**
   * 请处理给定字符串:
   *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
   *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
   * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
   * @return str: 例 "I'm driving to Beijing after breakfast "
   */
  decode: str => {
    //TODO your code goes here...
    return null;
  },
  /**
   * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
   * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
   * @return int: 需要的会议室的个数, 例 1
   * 另一个测试用例: [[10,20], [19,30]] => 2
   */
  minRequiredMeetingsRooms: meetings => {
    let count = 0
    for (let i = 0; i < meetings.length; i++) {
      for (let j = i + 1; j < meetings.length; j++) {
        if (meetings[j][0] < meetings[i][1] && meetings[j][0] > meetings[i][0]) {
          count++
        }
      }
    }
    return count;
  },
  /**
   * 部门安排所有组合
   * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
   *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
   * @param required_department: dict, 该任务需要参与的部门和需要的人数
   *   例 {'frontend': 2, 'backend': 1}
   * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
   */
  staffCombinations: (department_staff_dict, required_staff) => {
    //TODO your code goes here...
    return null;
  },
  /**
   * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
   * @param num1 加数, 字符串, 例 '123456789123456789'
   * @param num2 加数, 字符串, 例 '987654321987654321'
   * @return 和, 例             '1111111111111111110'
   */
  addStrings: (num1, num2) => {
    //TODO your code goes here...
    return null;
  },
}