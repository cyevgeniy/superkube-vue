---
title: KText
description: A component for text rendering
---
<script setup>
import KTextDemo from './KTextDemo.vue'
import '../src/palette.css'
</script>




# KText

Renders text.

::: raw
<KTextDemo />
:::

Props:

```ts
export interface KTextProps {
  is?: string
  color?: 'default' | 'primary' | 'dark' | 'dark-mid' | 'muted' | 'success' | 'error' | 'light' | 'light-mid' | 'light-muted'
  size?: 'micro' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'mega'
  weight?: 'default' | 'semibold' | 'strong'
  italic?: boolean
  caps?: boolean
  mono?: boolean
  nowrap?: boolean
}
```
## Props

### `is`
A tag in which the text will be enclosed. If not provided, a `<p>` tag will be used.

```vue
<KText is="span">Hello, World ... </KText>
```

### `color`
Controls the text color. Available options:

- `default`
- `primary`
- `dark`
- `dark-mid`
- `muted`
- `success`
- `error`
- `light`
- `light-mid`
- `light-muted`

### `size`
Determines the text size. Available options:

- `micro`
- `small`
- `medium`
- `default`
- `large`
- `huge`
- `mega`

### `weight`
Controls the font weight. Available options:

- `default`
- `semibold`
- `strong`

### `italic`

When set to `true`, renders the text in italic style.

### `caps`

When set to `true`, transforms the text to uppercase.

### `mono`

When set to `true`, uses a monospace font family.

### `nowrap`

When set to `true`, prevents text from wrapping to multiple lines.
