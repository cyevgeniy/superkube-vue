<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
defineProps<{
  is?: any
}>()
</script setup>

<template>
  <component
    :is="is"
    v-if="is"
    v-bind="$attrs"
  >
    <slot />
  </component>
  <slot v-else />
</template>
