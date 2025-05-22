<script setup>
import ComponentExample from './ComponentExample.vue'
import KMenu from '../../../components/KMenu.vue'

const items = [
  { text: 'Tokyo', note: { text: 'test', color: 'primary' } },
  { text: 'Moscow' },
  { text: 'London', note: { text: 'Pick this if you want', color: 'primary', size: 'micro' } },
]
</script>

<template>
  <ComponentExample>
    <KMenu :items="items" weight="strong" stacked numbered class="not-content" />
  </ComponentExample>
</template>
