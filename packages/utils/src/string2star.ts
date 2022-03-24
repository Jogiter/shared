/**
 * 提取字符串的一部分替换成 * 号，且不会改动原字符串
 *
 * @param string - 字符串，默认为空字符串 ''
 * @param begin - 可选。从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）
 * @param end - 可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度(例如，如果 endIndex 是 -3，则是, strLength - 3)。
 * @returns 替换后的字符串
 *
 * @public
 */
export function slice2star(string = '', begin?: number, end?: number) {
  if (begin === undefined) {
    return string;
  }

  const beginOfString = string.slice(0, begin);
  let replaced = '';
  let stars = '';
  let endOfString = '';

  if (end === undefined) {
    replaced = string.slice(begin);
  } else {
    replaced = string.slice(begin, end);
    endOfString = string.slice(end);
  }
  stars = replaced.replace(/./g, '*');

  return `${beginOfString}${stars}${endOfString}`;
}
