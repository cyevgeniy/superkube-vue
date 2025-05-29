---
title: KMenu
description: A menu list
---
<script setup>
import KMenuDemo from './KMenuDemo.vue'
import '../src/palette.css'
</script>

# KMenu

A menu list component.

::: raw
<KMenuDemo />
:::

```typescript

interface MenuText extends KTextProps {
  text: string
}

interface MenuItem {
  text: string
  note?: MenuText
  label?: KLabelProps
  href?: string
}

interface KMenuProps {
  modelValue?: MenuItem | null
  items?: MenuItem[]
  mode?: 'muted' | 'primary' | 'light'
  weight?: 'normal' | 'semibold' | 'strong'
  size?: 'small' | 'medium' | 'normal' | 'large'
  underline?: boolean
  stacked?: boolean
  numbered?: boolean
  numbersPosition?: 'left' | 'right'
  pills?: boolean
}
```
