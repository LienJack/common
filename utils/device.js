/**
 * --------------------------------------------------------------
 * 检测设备
 * ---------------------------------------------------------------
 */
const userAgent = navigator.userAgent

const isWechat = userAgent.match(/MicroMessenger/)
const isAndroid = userAgent.includes('Android')
const isApple = userAgent.includes('iPhone') || userAgent.includes('iPad') 

export default {
  isWechat,
  isAndroid,
  isApple,
}