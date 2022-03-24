<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@np/utils](./utils.md) &gt; [PrettyBytes](./utils.prettybytes.md) &gt; [Options](./utils.prettybytes.options.md) &gt; [binary](./utils.prettybytes.options.binary.md)

## PrettyBytes.Options.binary property

Format the number using the Binary Prefix instead of the SI Prefix. This can be useful for presenting memory amounts. However, this should not be used for presenting file sizes.

<b>Signature:</b>

```typescript
readonly binary?: boolean;
```

## Example


```ts
import { prettyBytes } from '@np/helper';
P(1000, {binary: true});
//=> '1000 bit'
P(1024, {binary: true});
//=> '1 kiB'

```
