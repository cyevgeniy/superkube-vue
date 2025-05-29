---
title: KTextField
description: A text input component
---
<script setup>
import KTextFieldDemo from './KTextFieldDemo.vue'
import '../src/palette.css'
</script>

# KTextField

A flexible text input component that supports various states, sizes, and customization options through slots.

<KTextFieldDemo />

## Installation

```typescript
// Types
type State = 'neutral' | 'success' | 'error'
type HintPosition = 'top' | 'bottom'
type KInputSize = 'small' | 'regular' | 'large'

type KTextFieldState = State

interface KTextFieldProps {
  modelValue: string | null
  label?: string
  disabled?: boolean
  state?: KTextFieldState
  rounded?: boolean
  size?: KInputSize
  light?: boolean
  placeholder?: string
  hint?: string
  hintPosition?: HintPosition
  required?: boolean
}
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'

const username = ref('')
</script>

<template>
  <KTextField
    v-model="username"
    label="Username"
    placeholder="Enter your username"
  />
</template>
```

## Props

### `modelValue`

The input value. Used with v-model for two-way data binding.

### `label`

Label text displayed above the input field.

```vue
<KTextField label="Email Address" />
```

### `disabled`

When true, prevents user interaction with the input.

```vue
<KTextField disabled label="Read Only" />
```

### `state`

Possible values are 'neutral', 'success' or 'error'.
Default value is 'neutral'.

Applies validation state styling to the input.

```vue
<KTextField
  state="error"
  hint="Please enter a valid email"
/>
```

### `rounded`

Applies rounded corners to the input field.

```vue
<KTextField rounded />
```

### `size`

Possible values are 'small', 'regular' or 'large'.
Default value is 'regular'.

Controls the size of the input field.

```vue
<KTextField size="small" />
```

### `light`

Applies light theme styling for use on dark backgrounds.

```vue
<div class="dark-bg">
  <KTextField light />
</div>
```

### `placeholder`

Placeholder text shown when the input is empty.

```vue
<KTextField placeholder="Search..." />
```

### `hint`

Helper text displayed near the input field.

### `hintPosition`

Possible values are 'top' or 'bottom'.
Default value is 'bottom'.

Controls the position of the hint text.

```vue
<KTextField
  hint="Enter your full name"
  hintPosition="top"
/>
```

### `required`

Marks the input as required and adds visual indication.

```vue
<KTextField required label="Email" />
```

## Slots

### `prependAddon`

Content to be placed at the start of the input field, outside the input border.

```vue
<KTextField>
  <template #prependAddon>
    <span>@</span>
  </template>
</KTextField>
```

### `appendAddon`

Content to be placed at the end of the input field, outside the input border.

```vue
<KTextField>
  <template #appendAddon>
    <span>.com</span>
  </template>
</KTextField>
```

### `prependButton`

Button content to be placed at the start of the input field.

```vue
<KTextField>
  <template #prependButton>
    <Button icon="search" />
  </template>
</KTextField>
```

### `appendButton`

Button content to be placed at the end of the input field.

```vue
<KTextField>
  <template #appendButton>
    <Button icon="clear" />
  </template>
</KTextField>
```

## Events

The component emits the following events:

### `update:modelValue`

Emitted when the input value changes.

### `blur`

Emitted when the input loses focus.

### `focus`

Emitted when the input gains focus.

```vue
<KTextField
  v-model="value"
  @blur="handleBlur"
  @focus="handleFocus"
/>
```
