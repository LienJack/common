
/**
 * 初始化
 */
checkWechatVersion("6.0.2").then(initJSSDK).catch(error => window.alert(error.message));

/**
 * 检查微信版本号
 * @param  {String} minVersion - 最低版本号
 * @return {Promise}
 */
function checkWechatVersion (minVersion) {
  return new Promise((resolve, reject) => {
    const version = getWechatVersion();
    if (!version) {
      reject({ message: "请您在微信中打开！" });
    }
    const isCheck = checkVersion(version, minVersion);
    if (!isCheck) {
      reject({ message: `很抱歉，暂时无法为您提供服务！`
                      + `请将微信升级到 ${minVersion} 或以上`
                      + `（您的版本是 ${version}）` });
    }
    resolve();
  });
}

/**
 * 获取微信版本号
 * @return {Promise}
 */
function getWechatVersion () {
  const regex = /MicroMessenger\/(\d+\.\d+(?:\.\d+)?)/i;
  const match = window.navigator.userAgent.match(regex);
  return match && match[1];
}

/**
 * 启用的接口
 * @type {Array}
 */
const jsApiList = [
  "ready", "error", "config",
  "chooseImage", "previewImage", "uploadImage",
  "chooseWXPay", "scanQRCode",
  // "getNetworkType", "getLocation", "openLocation",
  // "onMenuShareTimeline", "onMenuShareAppMessage",
  // "startSearchBeacons", "stopSearchBeacons", "onSearchBeacons",
  // "hideMenuItems", "showMenuItems", "closeWindow"
];

/**
 * 初始化微信 JSSDK
 */
function initJSSDK () {
  if (!window.wx) {
    window.wx = jsApiList.reduce((acc, cur) => {
      acc[cur] = param => {};
      return acc;
    }, {});
    return;
  }
  window.wx.ready(() => {
    // hideMenuItems();
  });
  window.wx.error(res => {
    window.alert("Weichat JSSDK Error: " + res.errMsg);
  });
  window.wx.config(Object.assign({ debug: false, jsApiList }, getWxConfig()));
  
}

/**
 * 隐藏微信菜单
 */
// function hideMenuItems () {
//   window.wx.hideMenuItems({
//     menuList: [
//       "menuItem:share:appMessage",   // 发送给朋友
//       "menuItem:share:timeline",     // 分享到朋友圈
//       "menuItem:share:qq",           // 分享到QQ
//       "menuItem:share:weiboApp",     // 分享到微博
//       "menuItem:share:facebook",     // 分享到FackBook
//       "menuItem:share:QZone",        // 分享到QQ空间
//       "menuItem:openWithQQBrowser",  // 在QQ浏览器中打开
//       "menuItem:openWithSafari",     // 在Safari中打开
//       "menuItem:share:email",        // 邮件
//       "menuItem:copyUrl",            // 复制链接
//       "menuItem:setFont",            // 调整字体
//       "menuItem:readMode",           // 阅读模式
//       "menuItem:exposeArticle"       // 举报
//     ],
//   });
// }

/**
 * 从 Cookie 中获取 JSSDK 配置
 *
 * @return {Object} {
 *   appId:     String,
 *   timestamp: String,
 *   nonceStr:  String,
 *   signature: String,
 * }
 */
import cookie from "@/utils/cookie.js";

function getWxConfig () {
  const cookieInfo = cookie.get("signature");
  try {
    return JSON.parse(cookieInfo);
  } catch (exception) {
    console.error("Wechat JSSDK Signature Error.", cookieInfo);
  }
}





/**
 * 检查版本号（大于等于）
 * @param {String} curVersion - 当前版本号
 * @param {String} minVersion - 最低版本号
 * @return {Promise}
 */
export function checkVersion (curVersion, minVersion) {
  if (!curVersion) { return false; }
  if (!minVersion) { return true; }
  const curArr = curVersion.split(".");
  const minArr = minVersion.split(".");
  const length = Math.max(curArr.length, minArr.length);
  for (let i = 0; i < length; i++) {
    if (~~minArr[i] < ~~curArr[i]) { break; }
    if (~~minArr[i] > ~~curArr[i]) {
      return false;
    }
  }
  return true;
}
