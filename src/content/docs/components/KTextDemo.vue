<script setup>
import ComponentExample from './ComponentExample.vue'
import KText from '../../../components/KText.vue'

const colors = [
  'default',
  'primary',
  'dark',
  'dark-mid',
  'muted',
  'success',
  'error',
  'light',
  'light-mid',
  'light-muted',
]
</script>

<template>
  <ComponentExample>
    <template v-for="color in colors" :key="color">
      <KText :color="color" class="not-content"> {{ color }} text </KText>
    </template>
    <KText mono> mono text </KText>
    <KText italic> Italic text </KText>
    <KText caps> caps text </KText>
  </ComponentExample>
</template>
