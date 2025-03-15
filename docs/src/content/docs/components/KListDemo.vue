<script setup>
import ComponentExample from './ComponentExample.vue'
import KList from '../../../../../src/components/KList.vue'

const items = [
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Moscow', value: 'moscow' },
]
</script>

<template>
  <ComponentExample>
    <KList :items="items" mark-type="numbered" bordered stacked label-field="label" class="not-content" />
  </ComponentExample>
</template>
