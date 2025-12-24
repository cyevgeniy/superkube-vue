---
title: KCheckbox
description: An alert block
---

<script setup>
import ComponentExample from './ComponentExample.vue';
import KCheckbox from '../src/components/KCheckbox.vue';
import '../src/palette.css';
import { computed, ref } from 'vue';

const val = ref(false)
const hint = computed(() => val.value ? 'This field can\'t be selected' : 'OK')
const state = computed(() => val.value ? 'error' : 'success')
</script>

# KCheckbox

A checkbox.

```ts
interface KCheckboxProps {
  modelValue?: boolean | undefined
  label?: string
  hint?: string
  disabled?: boolean
  size?: KInputSize
  state?: KCheckboxState
}

type KCheckboxState = 'neutral' | 'success' | 'error'
```

## Examples 

::: raw
<ComponentExample flex>
  <KCheckbox label="Enable sound" hint="Enables notifications sound" />
</ComponentExample>
:::

```vue
<KCheckbox label="Enable sound" hint="Enables notifications sound" />
```

::: raw
<ComponentExample flex>
  <KCheckbox :model-value="true" label="Enable sound" hint="This field can't be selected" state="error" />
</ComponentExample>
:::

```vue
<KCheckbox 
    :model-value="true" 
    label="Enable sound" 
    hint="This field can't be selected" 
    state="error" 
/>
```

::: raw
<ComponentExample flex>
  <KCheckbox :model-value="false" label="Enable sound" hint="OK" state="success" />
</ComponentExample>
:::

```vue
<KCheckbox 
    :model-value="false" 
    label="Enable sound" 
    hint="OK" 
    state="success" 
/>
```

Interactive example:

::: raw
<ComponentExample flex>
  <KCheckbox v-model="val" label="Enable sound" :hint="hint" :state="state" />
</ComponentExample>
:::

```vue
<script setup lang="ts">
const val = ref(false)
const hint = computed(() => val.value ? 'This field can\'t be selected' : 'OK')
const state = computed(() => val.value ? 'error' : 'success')
</script>

<template>
    <KCheckbox
        v-model="val" 
        label="Enable sound" 
        :hint="hint" :state="state" 
    />
</template>
```