<script setup>
import KSelect from '../../../../../src/components/KSelect.vue';

const options = [
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Moscow', value: 'moscow' },
];
</script>

<template>
  <KSelect :options="options" label="Choose a city" class="not-content" />
</template>
