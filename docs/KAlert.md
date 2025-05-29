---
title: KAlert
description: An alert block
---

<script setup>
import ComponentExample from './ComponentExample.vue';
import KAlert from '../src/components/KAlert.vue';
import '../src/palette.css';
</script>

# KAlert

An information alert.

```ts
interface KAlertProps {
  type?: 'default' | 'info' | 'success' | 'error'
  close?: boolean
  closeSize?: KCloseSize
}
```

::: raw
<ComponentExample flex>
  <KAlert v-for="type in ['default' ,'info', 'success' ,'error']" :key="type" close :type="type">
    <h3>Type: {{ type }}</h3>
    <p>
      To read about all new features, check out <a href="#">documentation</a>.
    </p>
  </KAlert>
</ComponentExample>
:::

## Basic usage

```vue
<KAlert close class="not-content">
  <h3>New version is arrived</h3>
  <p>
    To read about all new features, check out <a href="#">documentation</a>
  </p>
</KAlert>
```

## Props

### `type`

Sets visual appearance of the alert. Can be `'default'`, `'info'`,  `'success'`or  `'error'`.

### `close`

Type: `boolean`.
If true, shows a close icon.

### `closeSize`

The size of the close icon. Pass the same values as to the `KClose` component:

```ts
type KCloseSize =  'small' | 'medium' | 'base' | 'large' | 'huge'
```

## Events

### `close`

The `close` event is emitted when a user clicks on the close icon.
