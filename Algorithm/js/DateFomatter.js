/**
* 方法说明
* @method DateFormatter
* @for 时间戳转换成指定格式日期
* @param {timestamp, 'Y年M月D日 H时I分S秒'} 
* @return 返回值为格式化后的时间格式
*/

export function DateFormatter(timestamp, formats) {
  // formats格式包括
  // 1. Y-M-D
  // 2. Y-M-D H:I:S
  // 3. Y年M月D日
  // 4. Y年M月D日 H时I分
  formats = formats || 'Y-M-D';

  let zero = function (value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  let myDate = timestamp ? new Date(timestamp) : new Date();

  let year = myDate.getFullYear();
  let month = zero(myDate.getMonth() + 1);
  let day = zero(myDate.getDate());

  let hour = zero(myDate.getHours());
  let minite = zero(myDate.getMinutes());
  let second = zero(myDate.getSeconds());

  return formats.replace(/Y|M|D|H|I|S/ig, function (matches) {
    return ({
      Y: year,
      M: month,
      D: day,
      H: hour,
      I: minite,
      S: second
    })[matches];
  });
};
