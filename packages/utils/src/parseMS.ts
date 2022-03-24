/**
 * @public
 */
export type TimeComponents = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

/**
 * 将毫秒转换成对象
 *
 * @example
 * ```ts
 * parseMilliseconds(1337000001);
 * // {
 * // 	days: 15,
 * // 	hours: 11,
 * // 	minutes: 23,
 * // 	seconds: 20,
 * // 	milliseconds: 1,
 * // }
 * ```
 *
 * @public
 */
export function parseMilliseconds(milliseconds: number): TimeComponents {
  if (typeof milliseconds !== 'number') {
    throw new TypeError('Expected a number');
  }

  // replace Math.trunc for supportting ie
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
  };
}

/**
 * parseMilliseconds 的别名
 * @public
 */
export const parseMS = parseMilliseconds;
