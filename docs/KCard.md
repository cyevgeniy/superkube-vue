---
title: KCard
description: A divider line
---

<script setup>
import KCard from '../src/components/KCard.vue'
import ComponentExample from './ComponentExample.vue'
import '../src/palette.css'
</script>

# KCard

A basic card. It doesn't set background colors or paddings, so you have to
set them by yourself.

```ts
interface Props {
  // 'base' is a default value
  radius?: 'small' | 'medium' | 'base' | 'large' | 'huge'

  shadow?: boolean

  outlined?: boolean
}
```

::: raw
<ComponentExample>
    <KCard shadow outlined> <p> Hello </p> </KCard>
</ComponentExample>
:::

## Basic usage

```vue
<template>
    <KCard outlined radius="small">
        <h2> The Product </h2>
        <p> This product is the best product in the world!</p>
    </KCard>
</template>
```

::: raw
<ComponentExample>
    <KCard outlined shadow radius="small" class="card-comtent">
        <h2> The Product </h2>
        <p> This product is the best product in the world!</p>
    </KCard>
</ComponentExample>
:::

## Props

### `radius`

Sets card radius. The default value is `'base'`.

```ts
interface Props {
    radius?: 'small' | 'medium' | 'base' | 'large' | 'huge'
}
```

### `shadow`

Adds a shadow to a card. The shadow is not
shown in dark mode. The default value is `false`.

```ts
interface Props {
    shadow?: boolean
}
```

### `outlined`

Adds a border to a card. The default value is `false`.

```ts
interface Props {
    outlined?: boolean
}
```

