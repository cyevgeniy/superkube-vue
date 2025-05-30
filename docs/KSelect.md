---
title: KSelect
description: A component for selecting a single option from a list
---


<script setup>
import KSelectDemo from './KSelectDemo.vue';
import '../src/palette.css';
</script>

# KSelect

Renders a select input.
Under the hood, it wraps a `<select>` element.

::: raw
<KSelectDemo />
:::


```typescript
type State = 'neutral' | 'success' | 'error'
type HintPosition = 'top' | 'bottom'
type KInputSize = 'small' | 'regular' | 'large'

interface KSelectOption {
  label: string
  value: any
  disabled?: boolean
}

interface KSelectProps {
  modelValue: any
  options?: KSelectOption[]
  label?: string
  disabled?: boolean
  state?: State
  rounded?: boolean
  size?: KInputSize
  light?: boolean
  placeholder?: string
  hint?: string
  hintPosition?: HintPosition
  required?: boolean
  allowEmpty?: boolean
  multiple?: boolean
}
```

## Basic Usage

```vue
const options = ref([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
])

const selectedOption = ref(options.value[0])

<KSelect v-model="selectedOption" :options="options" />
```

## Props

### `modelValue`

The selected value. Used with v-model for two-way binding.
It contains the `value` field of the selected option.

### `options`

An array of options to display in the select dropdown.

```ts
interface KSelectOption {
  label: string    // Display text
  value: any      // Value when selected
  disabled?: boolean  // Whether the option is selectable
}
```

### `label`

Label text displayed above the select input.

### `disabled`

When true, prevents user interaction with the select.

### `state`

Applies visual styling to indicate validation state.
Possible values are `'neutral'`, `'success'` and `'error'`:

```vue
<KSelect ... state="success" />
```

### `rounded`

Applies rounded corners to the select input.

```vue
<KSelect v-model="selectedOption" :options="options" rounded />
```

### `size`

Controls the size of the select input.
Possible values are `'small'`, `'regular'` and `'large'`:

```vue
<KSelect ... size="small" />
```

### `light`

Applies light theme styling for dark backgrounds.

```vue
<KSelect ... light />
```

### `placeholder`

Placeholder text when no option is selected.

```vue
<KSelect ... placeholder="Select an option" />
```

### `hint`

Helper text displayed below the select input.

```vue
<KSelect ... hint="Helper text" />
```

### `hintPosition`

Controls the position of the hint text.
Possible values are `'top'` and `'bottom'` (default):

```vue
<KSelect ... hintPosition="bottom" />
```

### `required`

Marks the select as a required field.

```vue
<KSelect ... required />
```

### `allowEmpty`

When true, adds an empty option to clear the selection.

```vue
<KSelect ... allowEmpty />
```

## Events

### `update:modelValue`

Emitted when the selection changes.

```ts
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
```

### `change`

Emitted when the selection changes. Provides the new selected value(s).

```ts
const emit = defineEmits<{
  (e: 'change', value: any): void
}>()
```
