export const suitsWithMilliseconds: Record<string, string> = {
  '1000 + 400': '1秒400毫秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 1,
  //   milliseconds: 400,
  // },

  '1000 * 55': '55秒0毫秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 55,
  //   milliseconds: 0,
  // },

  '1000 * 67': '1分7秒0毫秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 1,
  //   seconds: 7,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 5': '5分0秒0毫秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 5,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 67': '1小时7分0秒0毫秒',
  // {
  //   days: 0,
  //   hours: 1,
  //   minutes: 7,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 12': '12小时0分0秒0毫秒',
  // {
  //   days: 0,
  //   hours: 12,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 40': '1天16小时0分0秒0毫秒',
  // {
  //   days: 1,
  //   hours: 16,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 999': '41天15小时0分0秒0毫秒',
  // {
  //   days: 41,
  //   hours: 15,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '(1000 * 60) + 500 + 0.345678': '1分0秒500毫秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 1,
  //   seconds: 0,
  //   milliseconds: 500,
  // },
};

export const suitsWithoutMilliseconds: Record<string, string> = {
  '1000 + 400': '1秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 1,
  //   milliseconds: 400,
  // },

  '1000 * 55': '55秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 55,
  //   milliseconds: 0,
  // },

  '1000 * 67': '1分7秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 1,
  //   seconds: 7,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 5': '5分0秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 5,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 67': '1小时7分0秒',
  // {
  //   days: 0,
  //   hours: 1,
  //   minutes: 7,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 12': '12小时0分0秒',
  // {
  //   days: 0,
  //   hours: 12,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 40': '1天16小时0分0秒',
  // {
  //   days: 1,
  //   hours: 16,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '1000 * 60 * 60 * 999': '41天15小时0分0秒',
  // {
  //   days: 41,
  //   hours: 15,
  //   minutes: 0,
  //   seconds: 0,
  //   milliseconds: 0,
  // },

  '(1000 * 60) + 500 + 0.345678': '1分0秒',
  // {
  //   days: 0,
  //   hours: 0,
  //   minutes: 1,
  //   seconds: 0,
  //   milliseconds: 500,
  // },
};
