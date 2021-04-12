//1。深/浅拷贝
let obj = {
  a: '1',
  b: '2',
  c: '3',
  d: {
    'xx': 'kk'
  }
}
let uu = {
  ...obj
}
uu.a = '8' //第一层数据可看作深拷贝
uu.d['xx'] = 'www' //深层数据是浅拷贝
// console.log(uu)
// console.log(obj)

frequencyMap = strs => {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    map.set(strs[i], map.has(strs[i]) ? map.get(strs[i]) + 1 : 1)
  }
  return map;
}
// frequencyMap(['aa', 'ab', 'ab', 'cc', 'cba'])

var a;
var g = function f(a, b = 0) {
  console.log(a);
  if (+a) {
    return (b) => a + b;
  }
  return f;
}
var res = g(a)([])(f)('')([, , , ].length)('')
// var res = g(a)([])(g)('')([, , , ].length)('')
console.log(res);