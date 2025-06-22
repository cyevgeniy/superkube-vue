<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // 'base' is a default value
  radius?: 'small' | 'medium' | 'base' | 'large' | 'huge'

  shadow?: boolean

  outlined?: boolean
}

const props = defineProps<Props>()

const classes = computed(() => [props.radius || 'base', props.shadow ? 'shadow' : '', props.outlined ? 'outlined' : ''])
</script>

<template>
  <div class="card" :class="classes">
    <slot />
  </div>
</template>

<style scoped>
.card {
  --card-border-color: red;
  position: relative;
}

.card.outlined {
  --card-border-color: var(--palette-black-7);
  border: 1px solid var(--card-border-color);
}

.dark .card.outlined {
  --card-border-color: var(--palette-white-15);
}

.card.shadow {
  box-shadow: var(--shadow-150);
}

.card.base {
  border-radius: var(--radius-base);
}

.card.large {
  border-radius: var(--radius-large);
}

.card.huge {
  border-radius: var(--radius-huge);
}
</style>
