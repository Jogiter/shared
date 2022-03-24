import { toThousand } from '../src';
import {
  numbers,
  toThousandWhenDigist0,
  toThousandWhenDigist2,
} from './fixtures/toThousand';

describe('toThousand', () => {
  let digits!: number;

  describe('set digits to -1 as default', () => {
    beforeAll(() => {
      digits = -1;
    });

    numbers.forEach((number, index) => {
      it(`should format ${number} equal to ${toThousandWhenDigist0[index]}`, () => {
        expect(toThousand(number, digits)).toEqual(
          toThousandWhenDigist0[index]
        );
      });
    });
  });

  describe('set digits to 2', () => {
    beforeAll(() => {
      digits = 2;
    });

    numbers.forEach((number, index) => {
      it(`should format ${number} equal to ${toThousandWhenDigist2[index]}`, () => {
        expect(toThousand(number, digits)).toEqual(
          toThousandWhenDigist2[index]
        );
      });
    });
  });
});
