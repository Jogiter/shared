import { parseMS, TimeComponents } from '../src';
import { suits } from './fixtures/parseMS';

type TimeType = keyof TimeComponents;

describe('parseMS', () => {
  for (let ms in suits) {
    it(`should  parseMS(${ms}) equal to ${JSON.stringify(suits[ms])}`, () => {
      // eslint-disable-next-line
      const millisecond = eval(ms);
      expect(parseMS(millisecond)).toEqual(suits[ms]);
    });
  }

  it('handle negative millisecond values', () => {
    for (let ms in suits) {
      // eslint-disable-next-line
      const positive = parseMS(eval(ms));
      // eslint-disable-next-line
      const negative = parseMS(-eval(ms));
      const types: TimeType[] = [
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ];
      for (const key of types) {
        expect(negative[key]).toEqual(-positive[key]);
      }
    }
  });
});
