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
console.log(uu)
console.log(obj)