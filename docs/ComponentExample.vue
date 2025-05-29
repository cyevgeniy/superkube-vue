<script setup>
import { computed } from 'vue'

const props = defineProps({
  flex: {
    type: Boolean,
    required: false,
  },
  column: {
    type: Boolean,
    required: false,
  },
})

const classes = computed(() => [props.flex && 'flex', props.column && 'column'])
</script>

<template>
  <div class="example" :class="classes">
    <slot />
  </div>
</template>

<style scoped>
.example {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid gray;
  border-radius: 8px;
}

.example.flex {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.example.flex.column {
  flex-direction: column;
}
</style>
