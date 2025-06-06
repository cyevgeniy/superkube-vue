---
title: KList
description: A list component for static items
---

<script setup>
import ComponentExample from './ComponentExample.vue'
import KListDemo from './KListDemo.vue'
import '../src/palette.css'
</script>

# KList

A list component that is used to display a static list of items.
It can display both simple strings and complex objects as list items.

::: raw
<KListDemo />
:::

```typescript
type KListItem = Record<string, any> | string

interface KListProps {
  items?: KListItem[]
  labelField?: string
  size?: 'default' | 'medium' | 'small'
  weight?: 'normal' | 'strong' | 'semibold'
  inline?: boolean
  stacked?: boolean
  bordered?: boolean
  markType?: 'unstyled' | 'checkmark' | 'dashed' | 'numbered'
}
```

## Basic Usage

```vue
<KList :items="['Item 1', 'Item 2', 'Item 3']" />
```

## Props

### `items`

An array of items to display in the list. Items can be strings or objects.

```vue
<KList :items="['Apple', 'Banana', 'Orange']" />

<!-- With objects -->
<KList
  :items="[
    { label: 'Apple', id: 1 },
    { label: 'Banana', id: 2 },
    { label: 'Orange', id: 3 }
  ]"
  labelField="label"
/>
```

### `labelField`

When using objects as items, specifies which field to use as the display text.
By default, the `labelField` is `'name'`.

```vue
<KList
  :items="[{ name: 'John' }, { name: 'Jane' }]"
  labelField="name"
/>
```

### `size`

Controls the text size of list items.
Possible values: `'default'`, `'medium'`, `'small'`

```vue
<KList :items="['Item 1', 'Item 2']" size="small" />
```

### `weight`

Controls the font weight of list items.
Possible values: `'normal'`, `'strong'`, `'semibold'`.

```vue
<KList :items="['Item 1', 'Item 2']" weight="strong" />
```

### `inline`

When true, displays list items horizontally. Be aware that this will override the `stacked` prop.

```vue
<KList :items="['Tag 1', 'Tag 2', 'Tag 3']" inline />
```

### `stacked`

When true, adds borders between list items.

```vue
<KList :items="['Item 1', 'Item 2']" stacked />
```

### `bordered`

When true, adds a border around the entire list.

```vue
<KList :items="['Item 1', 'Item 2']" bordered />
```

### `markType`

Controls the list item marker style.
Possible values: `'unstyled'`, `'checkmark'`, `'dashed'`, `'numbered'`

```vue
<KList
  :items="['Task 1', 'Task 2']"
  markType="checkmark"
/>
```
