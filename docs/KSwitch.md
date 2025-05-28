---
title: KSwitch
description: A switch button
---

# KSwitch

<script setup>
import ComponentExample from './ComponentExample.vue';
import KSwitch from '../src/components/KSwitch.vue';
import '../src/palette.css';
</script>

A switch button.

::: raw
<ComponentExample>
  <KSwitch label="Alarm" />
</ComponentExample>
:::

```ts
interface KSwitchProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
}
```

## Basic usage

```html
<script setup>
import { ref } from 'vue'

const toggle = ref(false)
</script>

<template>
  <KSwitch v-model="toggle" label="Alarm" />
</template>
```

## Props

### `:model-value`

The `v-model` binding for the switch button.

### `:label`

A text label for the button. Optional.


### `:disabled`

Disables the button if true.
