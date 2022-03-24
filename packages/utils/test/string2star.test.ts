import { slice2star } from '../src';

const string = Array(13).join('a');

describe('slice2star', () => {
  it(`should return empty-string when string is empty-string`, () => {
    expect(slice2star('')).toEqual('');
  });

  it(`should return "aaaaaaaaaaaa" when only passing string as "aaaaaaaaaaaa"`, () => {
    expect(slice2star(string)).toEqual('aaaaaaaaaaaa');
  });

  it(`should return "aaaa********" when passing string as "aaaaaaaaaaaa" and start as 4`, () => {
    expect(slice2star(string, 4)).toEqual('aaaa********');
  });

  it(`should return "aaaaaaaa****" when passing string as "aaaaaaaaaaaa" and start as -4`, () => {
    expect(slice2star(string, -4)).toEqual('aaaaaaaa****');
  });

  it(`should return "a**********a" when passing string as "aaaaaaaaaaaa", start as 1 and end as -1`, () => {
    expect(slice2star(string, 1, -1)).toEqual('a**********a');
  });

  it(`should return "aaa**aaaaaaa" when passing string as "aaaaaaaaaaaa", start as 3 and end as 5`, () => {
    expect(slice2star(string, 3, 5)).toEqual('aaa**aaaaaaa');
  });

  it(`should return "aaaaaaaa**aa"" when passing string as "aaaaaaaaaaaa", start as -4 and end as -2`, () => {
    expect(slice2star(string, -4, -2)).toEqual('aaaaaaaa**aa');
  });
});
