/**
 * 秒转换成 n天n小时n分钟n秒
 *
 * @example
 * ```ts
 * second2str(1234567) // "14天6小时56分7秒"
 * second2str(123.4567) // "2分3.456秒"
 * ```
 *
 * @param seconds - 需要被格式化的时间，单位秒
 * @returns 格式化后的时间字符串
 *
 * @deprecated second2str 已过时，请使用 prettyMS 代替
 * @public
 */
export function second2str(seconds: number) {
  if (seconds < 0) {
    return '';
  }
  if (seconds === 0) {
    return '0秒';
  }
  const num = Math.floor(seconds);
  const oneMinutes = 60;
  const oneHours = 60 * oneMinutes;
  const oneDay = 24 * oneHours;
  const days = Math.floor(num / oneDay);
  const hours = Math.floor((num % oneDay) / oneHours);
  const minutes = Math.floor((num % oneHours) / oneMinutes);
  const _seconds = Math.floor((seconds % 60) * 1000) / 1000;
  return `${days ? days + '天' : ''}${days || hours ? hours + '小时' : ''}${
    days || hours || minutes ? minutes + '分' : ''
  }${days || hours || minutes || _seconds ? _seconds + '秒' : ''}`;
}
