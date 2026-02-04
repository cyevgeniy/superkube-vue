---
title: KCheckboxes
description: A group of checkboxes
---

<script setup>
import ComponentExample from './ComponentExample.vue';
import KCheckboxes from '../src/components/KCheckboxes.vue';
import '../src/palette.css';
import { ref } from 'vue';

const selectedValues = ref(['option1'])
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3', disabled: true }
]
</script>

# KCheckboxes

A group of checkboxes that allows users to select multiple options.

```ts
interface Option {
  label: string
  value: string | number
  disabled?: boolean
}

interface KCheckboxesProps {
  modelValue?: (string | number)[]
  options: Option[]
  size?: KInputSize
  disabled?: boolean
}
```

## Props

### modelValue
The currently selected values. Use `v-model` to bind this value. The default value is [].

### options
An array of options to display.

### size
Size of the checkboxes. Uses the same values as the `size` prop of the `KCheckbox` component. The default value is `medium`.

### disabled
Disables all checkboxes in the group when set to true.

## Examples

::: raw
<ComponentExample flex column>
  <KCheckboxes v-model="selectedValues" :options="options" hint="Select your preferences" />
  <hr />
  <p>Selected values:</p>
  <pre>{{ selectedValues }}</pre>
</ComponentExample>
:::

```vue
<script setup>
const selectedValues = ref(['option1'])
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3', disabled: true }
]
</script>

<template>
  <KCheckboxes 
    v-model="selectedValues" 
    :options="options"
    hint="Select your preferences"
  />
</template>
```

### Sizes

::: raw
<ComponentExample flex>
  <KCheckboxes :options="options" size="small" />
</ComponentExample>
:::

```vue
<KCheckboxes :options="options" size="small" />
```

::: raw
<ComponentExample flex>
  <KCheckboxes :options="options" size="large" />
</ComponentExample>
:::

```vue
<KCheckboxes :options="options" size="large" />
```

### Disabled

::: raw
<ComponentExample flex>
  <KCheckboxes :options="options" :disabled="true" />
</ComponentExample>
:::



```vue
<KCheckboxes :options="options" :disabled="true" />
```
