<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@np/utils](./utils.md) &gt; [PrettyBytes](./utils.prettybytes.md) &gt; [Options](./utils.prettybytes.options.md) &gt; [locale](./utils.prettybytes.options.locale.md)

## PrettyBytes.Options.locale property

\*\*Important\*\*: Only the number and decimal separator are localized. The unit title is not and will not be localized.

- If true: Localize the output using the system/browser locale. - If string: Expects a [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) (For example: en, de, …) - If string\[\]: Expects a list of [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag) (For example: en, de, …)

\*\*Note\*\*: Localization should generally work in browsers. Node.js needs to be built with full-icu or system-icu. Alternatively, the full-icu module can be used to provide support at runtime. Node.js 13 and later ships with ICU by default.

<b>Signature:</b>

```typescript
readonly locale?: boolean | string | readonly string[];
```