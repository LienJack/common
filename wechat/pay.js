/**
 * ---------------------------------------------
 * 微信支付
 * ---------------------------------------------
 */
export default function (config) {
  return new Promise((resolve, reject) => {

    WeixinJSBridge.invoke("getBrandWCPayRequest", {
      appId:       config.appId,     //公众号名称，由商户传入
      timeStamp:   config.timeStamp + "",         //时间戳，自1970年以来的秒数
      nonceStr:    config.nonceStr, //随机串
      package:     config.packageValue,
      signType:    "MD5",         //微信签名方式：
      paySign:     config.sign //微信签名
    }, res => {
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        resolve(config.tradeNo);
      } else if(res.err_msg == "get_brand_wcpay_request:cancel") {
        reject(config.tradeNo);
      } else if (res.err_msg == "get_brand_wcpay_request:fail") {
        window.alert(res.err_msg);
        reject(res.err_msg);
      }
    });

  });
}