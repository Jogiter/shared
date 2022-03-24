import { prettyMS } from '../src';
import {
  suitsWithMilliseconds,
  suitsWithoutMilliseconds,
} from './fixtures/prettyMS';

describe('prettyMS', () => {
  describe('keep milliseconds while set keepMilliseconds as true by default', () => {
    for (let ms in suitsWithMilliseconds) {
      test(`should prettyMS(${ms}) equal to ${suitsWithMilliseconds[ms]}`, () => {
        // eslint-disable-next-line
        let milliseconds = eval(ms);
        expect(prettyMS(milliseconds)).toEqual(suitsWithMilliseconds[ms]);
      });
    }
  });

  describe('keep milliseconds away while set keepMilliseconds as false', () => {
    for (let ms in suitsWithoutMilliseconds) {
      test(`should prettyMS(${ms}, false) equal to ${suitsWithoutMilliseconds[ms]}`, () => {
        // eslint-disable-next-line
        let milliseconds = eval(ms);
        expect(prettyMS(milliseconds, false)).toEqual(
          suitsWithoutMilliseconds[ms]
        );
      });
    }
  });
});
