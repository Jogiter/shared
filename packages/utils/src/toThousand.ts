/**
 * @hidden
 */
function formatInteger(n: number) {
  const regexp = /(\d)(?=(?:\d{3})+$)/g;
  return n.toString().replace(regexp, '$1,');
}

/**
 * format a number to thousand points
 *
 * @example
 * ```
 * // digits default 0
 * toThousand(1234.5678) // 1,234.5678
 * // set digits to 2
 * toThousand(1234.5678, 2) // 1,234.57
 * ```
 *
 * @param n - number
 * @param digits - The number of digits to appear after the decimal point
 * @returns formatted string
 *
 * @public
 */
export function toThousand(n: number, digits = -1) {
  const [int, float] =
    digits >= 0 ? n.toFixed(digits).split('.') : n.toString().split('.');
  return formatInteger(Number(int)) + (float ? '.' + float : '');
}

export default toThousand;
