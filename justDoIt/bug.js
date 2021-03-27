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

decode = str => {
  for (let index = 0; index < str.length; index++) {
    str = str.replace(/!([a-zA-Z]|\'\'|\s*)$/, ' ')
  }
  // return null;
}
// decode("I'm我我我driving是to乱乱Beijing码after breakfast88")

staffCombinations = (department_staff_dict, required_staff) => {
  let arr = []
  for (let i in required_staff) {
    if (Object.keys(department_staff_dict).includes(i)) {
      //如果需要人的部门在备选部门里有
      arr.push(department_staff_dict[i])
    }
  }
  if (arr.length > 1) {

  }
  console.log(arr, '----')
  // return null;
}
staffCombinations({
  'frontend': [1, 2],
  'backend': [3, 4],
  'devops': [5]
}, {
  'frontend': 2,
  'backend': 1
})