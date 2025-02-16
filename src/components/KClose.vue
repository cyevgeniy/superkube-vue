<script setup lang="ts">
import { computed } from 'vue';

export type KCloseSize =  'small' | 'medium' | 'base' | 'large' | 'huge'

export interface KCloseProps {
    size?: KCloseSize
    strong?: boolean
}

const props = defineProps<KCloseProps>()

const classes = computed(() => [
    { strong: !!props.strong },
    props.size ?? 'base'
])

</script>

<template>
    <span class="close" :class="classes" data-testid="close" />
</template>

<style scoped>
.close {
  --close-color: currentColor;
  --close-size: 14px;
  --close-thickness: 1px;
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: var(--close-size);
  height: var(--close-size);
  opacity: 0.65;
}
.close:before, .close:after {
  position: absolute;
  content: "";
  top: calc((var(--close-size) - var(--close-thickness)) / 2);
  left: 0;
  right: 0;
  height: var(--close-thickness);
  background: var(--close-color);
  border-radius: var(--close-thickness);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
.close:hover {
  opacity: 1;
}

.close.strong {
  --close-thickness: 2px;
}

.close.small {
  --close-size: 10px;
}

.close.medium {
  --close-size: 12px;
}

.close.large {
  --close-size: 16px;
}

.close.huge {
  --close-size: 20px;
}
</style>
