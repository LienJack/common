/**
 * 去除字符串空格
 * @param {String} str
 * @param {String} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {String} str
 * @example 
 * trim('   1234abc ',1 )
 * return 1234abc
 */
function trim(str, type) {
  switch(type) {
    case 1: 
      return str.replace(/\s+/g, "")
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "")
    case 3:
      return str.replace(/(^\s*)/g, "")
    case 4: 
      return str.replace(/(\s*$)/g, "")
    default:
      return str
  }
}

/**
 * 大小写切换
 * @param {String} str
 * @param {String} type 1:首字母大写,2：首页母小写,3：大小写转换,4：全部大写,5：全部小写
 * @returns {String} str
 * @example
 * changCase('abcd', 1) 
 * result: 'Abcd'
 */
function changCase(str, type) {
  function ToggleCase(str) {
    var itemText = ""
    str.split(""),forEach(item => {
      if(/^[a-z]+/.test(item)) {
        itemText += item.toUpperCase()
      } else if (/^[A-Z]+/.test(item)) {
        itemText += item.toLowerCase()
      } else {
        itemText += item
      }
    })
  }
  switch(type) {
    case 1:
      return str.replace(/\b\w+\b/g, function(word){
        return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2: 
      return str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0,1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3: 
      return  ToggleCase(str)
    case 4: 
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

/**
 * 字符串循环复制
 * @param {String} str
 * @param {Int} count
 * @returns {String} str
 * @example 
 * repeatStr('123',3)
 * "result：123123123"
 */
function repeatStr(str, count) {
  let text = ''
  for (var i = 0; i< count; i++) {
    text += str
  }
  return text
}

/**
 * 替换 *
 * @param {String} str
 * @param {Array} [lef,middle,right] or [left] 
 * @param {Int} type 看例子
 * @example
 * //replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
 * replaceStr('18819322663',[3,5,3],0)
 * result：188*****663
 * replaceStr('asdasdasdaa',[3,5,3],1)
 * result：***asdas***
 * replaceStr('1asd88465asdwqe3',[5],0)
 * result：*****8465asdwqe3
 * replaceStr('1asd88465asdwqe3',[5],1,'+')
 * result："1asd88465as+++++"
 * 
 */

function replaceStr(str, regArr, type, ArepText) {
  let regtext = ''
  let Reg = null
  let repalceText = ArepText || '*'
  function repeatStr(str, count) {
    let text = ''
    for (var i = 0; i< count; i++) {
      text += str
    }
    return text
  }
  if(regArr.length === 3 && type === 0) {
    let regtext = `(\\w{${regArr[0]}})(\\w{${regArr[1]}})(\\w{${regArr[2]}})`
    let reg = new RegExp(regtext)
    let replaceCount = repeatStr(repalceText, 3)
    return str.replace(reg,`$1${replaceCount}$3`)
  }
  else if (regArr.length === 3 && type ===1) {
    let regtext = `(\\w{${regArr[0]}})(\\w{${regArr[1]}})(\\w{${regArr[2]}})`
    let reg = new RegExp(regtext)
    let replaceCount1 = repeatStr(repalceText, regArr[0])
    let replaceCount2 = repeatStr(repalceText, regArr[2])
    return str.replace(reg, `${replaceCount1}$1${replaceCount2}`)
  } else if(regArr.length === 1 && type === 0) {
    let regtext = `(^\\w${regArr[0]})`
    let reg = new RegExp(regtext)
    let replaceCount = repeatStr(regtext, regArr[0])
    return str.replace(reg, replaceCount)
  } else if(regArr.length === 1 && type === 1) {
    let regtext = `\\w{regArr[0]}$`
    let reg = new RegExp(regtext)
    let replaceCount = repeatStr(regtext, regArr[0])
    return str.replace(reg, replaceCount)
  }
 }

 /***
  * 检测字符
  */
 function checkType(str) {
  switch (type) {
    case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    case 'tel':
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'number':
        return /^[0-9]$/.test(str);
    case 'english':
        return /^[a-zA-Z]+$/.test(str);
    case 'text':
        return /^\w+$/.test(str);
    case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower':
        return /^[a-z]+$/.test(str);
    case 'upper':
        return /^[A-Z]+$/.test(str);
    default:
        return true;
  }
}
/**
 * 检测密码强度
 * 
 */
function checkPwd(str) {
  let nowLv = 0
  if(str.length < 6) {
    return nowLv
  }
  if(/[0-9]/.test(str)) {
    nowLv++
  }
  if (/[a-z]/.test(str)) {
    nowLv++
  }
  if (/[A-Z]/.test(str)) {
    nowLv++
  }
  return nowLv
}
/**
 * 字符分组
 * 
 */
function formatText(str, size, delimiter) {
  let _size = size ||3
  let _delimiter = delimiter || ','
  let regText = `\\B(?=(\\w{${_size}})+(?!\\w))`
  let reg = new RegExp(regText, 'g')
  return str.replace(reg, _delimiter)
}
 
/***
 * 找出最长单词
 */
function longestWord (str, splitType) {
  let _slitType = splitType || /\s+/g
  let _max = 0
  let _item = ''
  let strArr = str.split(_splitType)
  strArr.forEach(item => {
    if(_max < item.length) {
      _max = item.length
      _item = item
    }
  })
  return {_max}
}
