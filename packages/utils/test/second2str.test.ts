import { second2str } from '../src';
import { suits } from './fixtures/second2str';

describe('second2str', () => {
  suits.forEach(suit => {
    it(`should format ${suit[0]} equal to ${suit[1]}`, () => {
      expect(second2str(suit[0])).toEqual(suit[1]);
    });
  });
});
