---
outline: deep
---

<script setup>
import { ref } from 'vue'
import  '../src/palette.css'

import KMenu from '../src/components/KMenu.vue'

const currItem = ref(null)

const items = [
  { text: 'Tokyo', note: { text: 'test', color: 'primary' } },
  { text: 'Moscow' },
  { text: 'London', note: { text: 'Pick this if you want', color: 'primary', size: 'micro' } },
]
</script>

# Runtime API Examples

::: raw
   <KMenu v-model="currItem" :items="items" weight="strong" stacked numbered class="not-content" />
   <pre> {{ currItem }} </pre>
:::

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
