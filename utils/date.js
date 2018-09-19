/**
 * -------------------------------------------------------
 * 日期
 * -------------------------------------------------------
 */

Date.prototype.format = function (format = "YYYY-MM-DD") {
  const values = {
    "(Y+)": this.getFullYear(),                     // Year
    "(M+)": this.getMonth() + 1,                    // Month
    "(D+)": this.getDate(),                         // Day
    "(h+)": this.getHours(),                        // Hour
    "(m+)": this.getMinutes(),                      // Minute
    "(s+)": this.getSeconds(),                      // Second
    "(q+)": Math.floor((this.getMonth() + 3) / 3),  // Quarter
    "(ms)": this.getMilliseconds()                  // Millisecond
  };
  return Object.keys(values).reduce((result, key) => {
    if (!new RegExp(key).test(format)) {
      return result;
    }
    var match  = RegExp.$1;
    var value  = values[key].toString();
    var length = value.length;
    if (1 === length) {
      value  = "0" + value;
      length = match.length;
    }
    var target = value.substr(-length, length);
    return result.replace(match, target);
  }, format);
};