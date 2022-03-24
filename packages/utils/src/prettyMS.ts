import { parseMilliseconds } from './parseMS';

/**
 * 将毫秒格式化成 n天n小时n分钟n秒[n毫秒]
 *
 * @param milliseconds - 需要被格式化的时间，单位毫秒
 * @param keepMilliseconds - 是否保留毫秒，默认保留
 * @returns 格式化后的时间字符串
 *
 * @example
 * ```ts
 * // 默认保留毫秒
 * prettyMilliseconds(1337000001) // 15天11小时23分钟20秒1毫秒
 *
 * // 不保留毫秒
 * prettyMilliseconds(1337000001, false) // 15天11小时23分钟20秒
 * ```
 *
 * @public
 */
export function prettyMilliseconds(
  milliseconds: number,
  keepMilliseconds = true
) {
  const { days, hours, minutes, seconds, milliseconds: ms } = parseMilliseconds(
    milliseconds
  );

  const times = [
    days ? days + '天' : '',
    days || hours ? hours + '小时' : '',
    days || hours || minutes ? minutes + '分' : '',
    days || hours || minutes || seconds ? seconds + '秒' : '',
  ];

  if (keepMilliseconds) {
    times.push(days || hours || minutes || seconds || ms ? ms + '毫秒' : '');
  }

  return times.join('');
}

/**
 * prettyMilliseconds 的别名
 * @public
 */
export const prettyMS = prettyMilliseconds;
