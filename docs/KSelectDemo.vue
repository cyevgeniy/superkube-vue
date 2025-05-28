<script setup>
import ComponentExample from './ComponentExample.vue'
import KSelect from '../src/components/KSelect.vue'

const options = [
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Moscow', value: 'moscow' },
]
</script>

<template>
  <ComponentExample>
    <KSelect :options="options" label="Choose a city" class="not-content" />
  </ComponentExample>
</template>
