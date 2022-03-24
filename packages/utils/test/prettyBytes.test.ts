import { prettyBytes } from '../src';

describe('prettyBytes', () => {
  test('throws on invalid input', () => {
    // @ts-ignore
    expect(() => prettyBytes('')).toThrow();

    // @ts-ignore
    expect(() => prettyBytes('1')).toThrow();

    // @ts-ignore
    expect(() => prettyBytes(NaN)).toThrow();

    // @ts-ignore
    expect(() => prettyBytes(true)).toThrow();

    // @ts-ignore
    expect(() => prettyBytes(Infinity)).toThrow();

    // @ts-ignore
    expect(() => prettyBytes(-Infinity)).toThrow();

    // @ts-ignore
    expect(() => prettyBytes(null)).toThrow();
  });

  test('converts bytes to human readable strings', () => {
    expect(prettyBytes(0)).toEqual('0 B');
    expect(prettyBytes(0.4)).toEqual('0.4 B');
    expect(prettyBytes(0.7)).toEqual('0.7 B');
    expect(prettyBytes(10)).toEqual('10 B');
    expect(prettyBytes(10.1)).toEqual('10.1 B');
    expect(prettyBytes(999)).toEqual('999 B');
    expect(prettyBytes(1001)).toEqual('1 kB');
    expect(prettyBytes(1001)).toEqual('1 kB');
    expect(prettyBytes(1e16)).toEqual('10 PB');
    expect(prettyBytes(1e30)).toEqual('1000000 YB');
  });

  test('supports negative number', () => {
    expect(prettyBytes(-0.4)).toEqual('-0.4 B');
    expect(prettyBytes(-0.7)).toEqual('-0.7 B');
    expect(prettyBytes(-10.1)).toEqual('-10.1 B');
    expect(prettyBytes(-999)).toEqual('-999 B');
    expect(prettyBytes(-1001)).toEqual('-1 kB');
  });

  test('locale option', () => {
    if (Number(process.version[0]) >= 14) {
      expect(prettyBytes(-0.4, { locale: 'de' })).toEqual('-0,4 B');
      expect(prettyBytes(0.4, { locale: 'de' })).toEqual('0,4 B');
      expect(prettyBytes(1001, { locale: 'de' })).toEqual('1 kB');
      expect(prettyBytes(10.1, { locale: 'de' })).toEqual('10,1 B');
      expect(prettyBytes(1e30, { locale: 'de' })).toEqual('1.000.000 YB');

      expect(prettyBytes(-0.4, { locale: 'en' })).toEqual('-0.4 B');
      expect(prettyBytes(0.4, { locale: 'en' })).toEqual('0.4 B');
      expect(prettyBytes(1001, { locale: 'en' })).toEqual('1 kB');
      expect(prettyBytes(10.1, { locale: 'en' })).toEqual('10.1 B');
      expect(prettyBytes(1e30, { locale: 'en' })).toEqual('1,000,000 YB');

      expect(prettyBytes(-0.4, { locale: ['unknown', 'de', 'en'] })).toEqual(
        '-0,4 B'
      );
      expect(prettyBytes(0.4, { locale: ['unknown', 'de', 'en'] })).toEqual(
        '0,4 B'
      );
      expect(prettyBytes(1001, { locale: ['unknown', 'de', 'en'] })).toEqual(
        '1 kB'
      );
      expect(prettyBytes(10.1, { locale: ['unknown', 'de', 'en'] })).toEqual(
        '10,1 B'
      );
      expect(prettyBytes(1e30, { locale: ['unknown', 'de', 'en'] })).toEqual(
        '1.000.000 YB'
      );

      expect(prettyBytes(-0.4, { locale: true })).toEqual('-0.4 B');
      expect(prettyBytes(0.4, { locale: true })).toEqual('0.4 B');
      expect(prettyBytes(1001, { locale: true })).toEqual('1 kB');
      expect(prettyBytes(10.1, { locale: true })).toEqual('10.1 B');
      expect(prettyBytes(1e30, { locale: true })).toEqual('1,000,000 YB');

      expect(prettyBytes(-0.4, { locale: false })).toEqual('-0.4 B');
      expect(prettyBytes(0.4, { locale: false })).toEqual('0.4 B');
      expect(prettyBytes(1001, { locale: false })).toEqual('1 kB');
      expect(prettyBytes(10.1, { locale: false })).toEqual('10.1 B');
      expect(prettyBytes(1e30, { locale: false })).toEqual('1000000 YB');

      expect(prettyBytes(-0.4, { locale: undefined })).toEqual('-0.4 B');
      expect(prettyBytes(0.4, { locale: undefined })).toEqual('0.4 B');
      expect(prettyBytes(1001, { locale: undefined })).toEqual('1 kB');
      expect(prettyBytes(10.1, { locale: undefined })).toEqual('10.1 B');
      expect(prettyBytes(1e30, { locale: undefined })).toEqual('1000000 YB');
    } else {
      expect(true).toBeTruthy();
    }
  });

  test('signed option', () => {
    expect(prettyBytes(42, { signed: true })).toEqual('+42 B');
    expect(prettyBytes(-13, { signed: true })).toEqual('-13 B');
    expect(prettyBytes(0, { signed: true })).toEqual(' 0 B');
  });

  test('bits option', () => {
    expect(prettyBytes(0, { bits: true })).toEqual('0 b');
    expect(prettyBytes(0.4, { bits: true })).toEqual('0.4 b');
    expect(prettyBytes(0.7, { bits: true })).toEqual('0.7 b');
    expect(prettyBytes(10, { bits: true })).toEqual('10 b');
    expect(prettyBytes(10.1, { bits: true })).toEqual('10.1 b');
    expect(prettyBytes(999, { bits: true })).toEqual('999 b');
    expect(prettyBytes(1001, { bits: true })).toEqual('1 kbit');
    expect(prettyBytes(1001, { bits: true })).toEqual('1 kbit');
    expect(prettyBytes(1e16, { bits: true })).toEqual('10 Pbit');
    expect(prettyBytes(1e30, { bits: true })).toEqual('1000000 Ybit');
  });

  test('binary option', () => {
    expect(prettyBytes(0, { binary: true })).toEqual('0 B');
    expect(prettyBytes(4, { binary: true })).toEqual('4 B');
    expect(prettyBytes(10, { binary: true })).toEqual('10 B');
    expect(prettyBytes(10.1, { binary: true })).toEqual('10.1 B');
    expect(prettyBytes(999, { binary: true })).toEqual('999 B');
    expect(prettyBytes(1025, { binary: true })).toEqual('1 kiB');
    expect(prettyBytes(1001, { binary: true })).toEqual('1000 B');
    expect(prettyBytes(1e16, { binary: true })).toEqual('8.88 PiB');
    expect(prettyBytes(1e30, { binary: true })).toEqual('827000 YiB');
  });

  test('bits and binary option', () => {
    expect(prettyBytes(0, { bits: true, binary: true })).toEqual('0 b');
    expect(prettyBytes(4, { bits: true, binary: true })).toEqual('4 b');
    expect(prettyBytes(10, { bits: true, binary: true })).toEqual('10 b');
    expect(prettyBytes(999, { bits: true, binary: true })).toEqual('999 b');
    expect(prettyBytes(1025, { bits: true, binary: true })).toEqual('1 kibit');
    expect(prettyBytes(1e6, { bits: true, binary: true })).toEqual('977 kibit');
  });

  test('fractional digits options', () => {
    expect(prettyBytes(1900, { maximumFractionDigits: 1 })).toEqual('1.9 kB');
    expect(prettyBytes(1900, { minimumFractionDigits: 3 })).toEqual('1.900 kB');
    expect(prettyBytes(1911, { maximumFractionDigits: 1 })).toEqual('1.9 kB');
    expect(prettyBytes(1111, { maximumFractionDigits: 2 })).toEqual('1.11 kB');
    expect(prettyBytes(1019, { maximumFractionDigits: 3 })).toEqual('1.019 kB');
    expect(prettyBytes(1001, { maximumFractionDigits: 3 })).toEqual('1.001 kB');
    expect(
      prettyBytes(1000, { minimumFractionDigits: 1, maximumFractionDigits: 3 })
    ).toEqual('1.0 kB');
    expect(
      prettyBytes(3942, { minimumFractionDigits: 1, maximumFractionDigits: 2 })
    ).toEqual('3.94 kB');
    expect(
      prettyBytes(4001, { maximumFractionDigits: 3, binary: true })
    ).toEqual('3.907 kiB');
    expect(
      prettyBytes(18717, { maximumFractionDigits: 2, binary: true })
    ).toEqual('18.28 kiB');
    expect(
      prettyBytes(18717, { maximumFractionDigits: 4, binary: true })
    ).toEqual('18.2783 kiB');
    expect(
      prettyBytes(32768, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
        binary: true,
      })
    ).toEqual('32.00 kiB');
    expect(
      prettyBytes(65536, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 3,
        binary: true,
      })
    ).toEqual('64.0 kiB');
  });
});
