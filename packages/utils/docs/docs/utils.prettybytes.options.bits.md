<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@np/utils](./utils.md) &gt; [PrettyBytes](./utils.prettybytes.md) &gt; [Options](./utils.prettybytes.options.md) &gt; [bits](./utils.prettybytes.options.bits.md)

## PrettyBytes.Options.bits property

Format the number as bits instead of bytes. This can be useful when, for example, referring to bit rate.

<b>Signature:</b>

```typescript
readonly bits?: boolean;
```

## Example


```ts
import { prettyBytes } from '@np/helper';
P(1337, {bits: true});
//=> '1.34 kbit'

```
