<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@np/utils](./utils.md) &gt; [PrettyBytes](./utils.prettybytes.md) &gt; [Options](./utils.prettybytes.options.md) &gt; [maximumFractionDigits](./utils.prettybytes.options.maximumfractiondigits.md)

## PrettyBytes.Options.maximumFractionDigits property

The maximum number of fraction digits to display.

If neither `minimumFractionDigits` or `maximumFractionDigits` are set, the default behavior is to round to 3 significant digits.

<b>Signature:</b>

```typescript
readonly maximumFractionDigits?: number;
```

## Example


```ts
import { prettyBytes } from '@np/helper';

// Show the number with at most 1 fractional digit
P(1920, {maximumFractionDigits: 1});
//=> '1.9 kB'

P(1920);
//=> '1.92 kB'

```
