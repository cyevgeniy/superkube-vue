---
title: KDivider
description: A divider line
---

<script setup>
import KDivider from '../src/components/KDivider.vue'
import ComponentExample from './ComponentExample.vue'
</script>

# KDivider

A divider line.

::: raw
<ComponentExample flex column>
  <KDivider color="primary" />
  <KDivider color="primary" mode="dashed" />
  <KDivider color="dark-mid" mode="dotted" />
</ComponentExample>
:::

```ts
interface KDividerProps {
  color?: 'default' | 'dark-mid' | 'dark' | 'primary' | 'light' | 'light-muted'
  mode?: 'default' | 'dashed' | 'dotted'
  size?: number
  length?: number | 'auto'
  vertical?: boolean
}
```

## Basic usage

```vue
<KDivider />
```

## Props

### `color`

The color of the divider. Possible values are:

- 'default'
- 'dark-mid'
- 'dark'
- 'primary'
- 'light'
- 'light-muted'

### `mode`

Set visual style of the divider. Can be `'default'`, `'dashed'` or `'dotted'`.

### `vertical`

Make the divider vertical. You should specify the `length` prop when using
vertical dividers.

### `size`

Set the size of the divider. By default has the size of 1px.
Note that for hotizontal dividers this prop sets the height, while for
vertical dividers it sets width.

### `length`

The length of the divider. Has `'auto'` value by default.
For vertical dividers you should always set this prop.


