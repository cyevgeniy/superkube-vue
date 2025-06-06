---
title: KBreadcrumb
---

<script setup>
import KBreadcrumbDemo from './KBreadcrumbDemo.vue';
import '../src/palette.css';
</script>

# KBreadcrumb

Shows breadcrumbs.

::: raw
<KBreadcrumbDemo />
:::

```ts
interface KBreadcrumbItem {
  text: string
  href?: string
}

interface KBreadcrumbProps {
  light?: boolean
  type?: 'default' | 'bullet' | 'path'
  items?: KBreadcrumbItem[]
  highlightLast?: boolean
}
```


## Basic usage

```vue
	<KBreadcrumb :items="[{text: 'Home', href: '/'}, {text: 'News', href: '/news'}, {text: 'Hot'}]" />
```

## Props

### `light`

Type: `boolean`.

Use a light version to show breadcrumbs on a dark background.

### `type`

A type of delimeters. Can be one of the following values: `default`, `bullet` or `path`.
If not provided, the `default` value is used.


### `items`

An array of breadcrumbs.

```ts
interface KBreadcrumbItem {
  text: string
  href?: string
}
```

Each of items can provide a link to a page. If a link is a local link,
an item will be rendered as a `<router-link :to="...">`. If a link
is an external link, then it will be rendered as an `<a href="..." target="_blank">`.

### `hightlightLast`

Type: `boolean`.

If set, the last item in a list will be highlighted.


