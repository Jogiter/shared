/**
 * @public
 */
export declare namespace PrettyBytes {
  interface Options {
    /**
     * Include plus sign for positive numbers. If the difference is exactly zero a space character will be prepended instead for better alignment.
     * @defaultValue `false`
     */
    readonly signed?: boolean;

    /**
     * Format the number as bits instead of bytes. This can be useful when, for example, referring to bit rate.
     * @defaultValue `false`
     *
     * @example
     * ```ts
     * import { prettyBytes } from '@np/helper';
     * P(1337, {bits: true});
     * //=> '1.34 kbit'
     * ```
     */
    readonly bits?: boolean;

    /**
     * Format the number using the Binary Prefix instead of the SI Prefix. This can be useful for presenting memory amounts. However, this should not be used for presenting file sizes.
     * @defaultValue `false`
     *
     * @example
     * ```ts
     * import { prettyBytes } from '@np/helper';
     * P(1000, {binary: true});
     * //=> '1000 bit'
     * P(1024, {binary: true});
     * //=> '1 kiB'
     * ```
     */
    readonly binary?: boolean;

    /**
     * **Important**: Only the number and decimal separator are localized. The unit title is not and will not be localized.
     *
     * - If true: Localize the output using the system/browser locale.
     * - If string: Expects a {@link https://en.wikipedia.org/wiki/IETF_language_tag | BCP 47 language tag} (For example: en, de, …)
     * - If string[]: Expects a list of {@link https://en.wikipedia.org/wiki/IETF_language_tag | BCP 47 language tags} (For example: en, de, …)
     *
     * **Note**: Localization should generally work in browsers. Node.js needs to be built with full-icu or system-icu. Alternatively, the full-icu module can be used to provide support at runtime. Node.js 13 and later ships with ICU by default.
     *
     * @defaultValue `false` No localization
     */
    readonly locale?: boolean | string | readonly string[];

    /**
     * The minimum number of fraction digits to display
     *
     * If neither `minimumFractionDigits` or `maximumFractionDigits` are set, the default behavior is to round to 3 significant digits.
     * @defaultValue `undefined`
     *
     * @example
     * ```ts
     * import { prettyBytes } from '@np/helper';
     *
     * // Show the number with at least 3 fractional digits
     * P(1900, {minimumFractionDigits: 3});
     * //=> '1.900 kB'
     *
     * P(1900);
     * //=> '1.9 kB'
     * ```
     */
    readonly minimumFractionDigits?: number;

    /**
     * The maximum number of fraction digits to display.
     *
     * If neither `minimumFractionDigits` or `maximumFractionDigits` are set, the default behavior is to round to 3 significant digits.
     *
     * @example
     * ```ts
     * import { prettyBytes } from '@np/helper';
     *
     * // Show the number with at most 1 fractional digit
     * P(1920, {maximumFractionDigits: 1});
     * //=> '1.9 kB'
     *
     * P(1920);
     * //=> '1.92 kB'
     * ```
     */
    readonly maximumFractionDigits?: number;
  }
}

interface LocaleOptions {
  minimumFractionDigits?: PrettyBytes.Options['minimumFractionDigits'];
  maximumFractionDigits?: PrettyBytes.Options['maximumFractionDigits'];
}

const BYTE_UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const BIBYTE_UNITS = [
  'B',
  'kiB',
  'MiB',
  'GiB',
  'TiB',
  'PiB',
  'EiB',
  'ZiB',
  'YiB',
];

const BIT_UNITS = [
  'b',
  'kbit',
  'Mbit',
  'Gbit',
  'Tbit',
  'Pbit',
  'Ebit',
  'Zbit',
  'Ybit',
];

const BIBIT_UNITS = [
  'b',
  'kibit',
  'Mibit',
  'Gibit',
  'Tibit',
  'Pibit',
  'Eibit',
  'Zibit',
  'Yibit',
];

/**
 * Formats the given number using `Number#toLocaleString`.
 *
 * - If locale is a `string`, the value is expected to be a locale-key (for example: `de`).
 * - If locale is `true`, the system default locale is used for translation.
 * - If no value for locale is specified, the number is returned unmodified.
 *
 * @hidden
 */
const toLocaleString = (
  number: number,
  locale: PrettyBytes.Options['locale'],
  options: LocaleOptions
) => {
  let result: string | number = number;
  if (typeof locale === 'string' || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== undefined) {
    result = number.toLocaleString(undefined, options);
  }

  return result;
};

/**
 * Convert bytes to a human readable string: `1337` → `1.34 kB`.
 *
 * @param number - The number to format.
 * @returns a human readable string
 *
 * @example
 * ```ts
 * import { prettyBytes } from '@np/helper';
 * P(1337);
 * //=> '1.34 kB'
 * P(100);
 * //=> '100 B'
 * // Display file size differences
 * P(42, {signed: true});
 * //=> '+42 B'
 * // Localized output using German locale
 * P(1337, {locale: 'de'});
 * //=> '1,34 kB'
 * ```
 *
 * @public
 */
export function prettyBytes(number: number, options?: PrettyBytes.Options) {
  if (!Number.isFinite(number)) {
    throw new TypeError(
      `Expected a finite number, got ${typeof number}: ${number}`
    );
  }

  options = Object.assign(
    { bits: false, binary: false, locale: false },
    options
  );

  const UNITS = options.bits
    ? options.binary
      ? BIBIT_UNITS
      : BIT_UNITS
    : options.binary
    ? BIBYTE_UNITS
    : BYTE_UNITS;

  if (options.signed && number === 0) {
    return ` 0 ${UNITS[0]}`;
  }

  const isNegative = number < 0;
  const prefix = isNegative ? '-' : options.signed ? '+' : '';

  if (isNegative) {
    number = -number;
  }

  let localeOptions!: LocaleOptions;

  if (options.minimumFractionDigits !== undefined) {
    localeOptions = {
      minimumFractionDigits: options.minimumFractionDigits,
    };
  }

  if (options.maximumFractionDigits !== undefined) {
    localeOptions = Object.assign(
      { maximumFractionDigits: options.maximumFractionDigits },
      localeOptions
    );
  }

  if (number < 1) {
    const numberString = toLocaleString(number, options.locale, localeOptions);
    return prefix + numberString + ' ' + UNITS[0];
  }

  const exponent = Math.min(
    Math.floor(
      options.binary
        ? Math.log(number) / Math.log(1024)
        : Math.log10(number) / 3
    ),
    UNITS.length - 1
  );
  // eslint-disable-next-line
  number /= Math.pow(options.binary ? 1024 : 1000, exponent);

  if (!localeOptions) {
    number = Number(number.toPrecision(3));
  }

  const numberString = toLocaleString(
    Number(number),
    options.locale,
    localeOptions
  );

  const unit = UNITS[exponent];

  return prefix + numberString + ' ' + unit;
}
