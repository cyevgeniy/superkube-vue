---
title: KLabel
description: A label
---

<script setup>
import ComponentExample from './ComponentExample.vue';
import KLabel from '../src/components/KLabel.vue';
import '../src/palette.css';
</script>

# KLabel

Renders a label.

::: raw
<ComponentExample flex>
	<KLabel label="Base" mode="base" />
	<KLabel label="With close" mode="base" with-close />
	<KLabel label="Dark" mode="dark" />
	<KLabel label="Light" mode="light" />
	<KLabel label="Link" href="https://example.com" />
</ComponentExample>
:::

```ts
interface KLabelProps {
    label: string
    mode?: 'base' | 'dark' | 'light'
    withClose?: boolean
    href?: string
}
```


## Basic usage

```vue
<KLabel label="New" />
```

## Props

### `label`

The label's text.

### `mode`

Visual appearance. Can contain values 'base' , 'dark' and 'light'.

### `withClose`

Adds a close icon to the label. It emits `close` event on click.

### `href`

If provided, the label will be rendered as `<a>` tag with the
provided `href` attribute.
