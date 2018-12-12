/**
 * 数组去重
 * @param {Array} arr
 * @returns {Array} arr
 */
function removeRepeatArray(arr) {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index
  })
} 

/**
 * 数组顺序打乱
 * @param {Array} arr
 * @returns {Array} arr
 * 
 */
function upsetArr (arr) {
  return arr.sort(() => Math.random() - 0.5)
}

/**
 * 数组最大最小值
 * @param {Array} arr
 * @return {Array} arr
 */
function maxArr() {
  return Math.max.apply(null, arr)
}
function minArr() {
  return Math.min.apply(null, arr)
}

/**
 * 数组求和
 * @param {Array} arr
 * @return {Array} arr
 */
function sumArr(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur
  })
}

/**
 * 平均值
 * @param {Array} arr
 * @return {Array} arr
 */
function covArr(arr) {
  return this.sumArr(arr) /arr.length
}

/**
 * 数组中随机获取元素
 * @param {Array} arr
 * @return {Array} arr
 */
function randomOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


/**
 * 返回数组中一个元素出现的次数
 * 
 * 
 */
function getElecount() {
  let num = 0
  for(let i = 0, len = obj.length; i< len; i++) {
    if(ele === obj[i]) {
      num++
    }
  }
  return num
}

/**
 * 筛选数组
 * removeArrayForValue(['test','test1','test2','test','aaa'],'test', 1)
 * result：["aaa"]   带有'test'的都删除
 * removeArrayForValue(['test','test1','test2','test','aaa'],'test')
 * result：["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
 * 
 */
function removeArrayForValue(arr, val, type) {
  return arr.filter(item => type ? item.indexOf(val) === -1 : item !== val)
}

/**
 * 数组扁平化
 * @param arr
 * @returns arr
 */
function steamroller(arr) {
  let newArr = []
  let _this = this
  for(let i=0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr.push.apply(newArr, steamroller(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}