<script setup lang="ts">
import { computed } from 'vue'

export type CaretDirection = 'left' | 'up' | 'down' | 'right'

export interface CaretProps {
  direction?: CaretDirection
  size?: 'auto' | 'large' | 'huge'
  strong?: boolean
}

const props = withDefaults(defineProps<CaretProps>(), {
    direction: 'right',
    size: 'auto',
})

const classes = computed(() => [
        { 'strong': props.strong },
        props.direction,
        props.size,
])
</script>

<template>
  <span class="caret" :class="classes"/>
</template>

<style scoped>
.caret {
  --caret-color: currentColor;
  --caret-size: 14px;
  --caret-thickness: 1px;
  display: inline-block;
  position: relative;
  width: var(--caret-size);
  height: var(--caret-size);
}
.caret:after {
  position: absolute;
  content: "";
  width: calc(var(--caret-size) / 2);
  height: calc(var(--caret-size) / 2);
  border-bottom: var(--caret-thickness) solid var(--caret-color);
  border-right: var(--caret-thickness) solid var(--caret-color);
  top: calc(var(--caret-size) / 4);
  left: calc(var(--caret-size) / 8);
  transform: rotate(-45deg);
}

.caret.left:after {
  top: calc(var(--caret-size) / 4);
  left: calc(var(--caret-size) / 3);
  transform: rotate(135deg);
}

.caret.up:after {
  top: calc(var(--caret-size) / 3);
  left: calc(var(--caret-size) / 4);
  transform: rotate(-135deg);
}

.caret.down:after {
  top: calc(var(--caret-size) / 6);
  left: calc(var(--caret-size) / 4);
  transform: rotate(45deg);
}

.caret.strong {
  --caret-thickness: 2px;
}

.caret.large {
  --caret-size: 18px;
}

.caret.huge {
  --caret-size: 22px;
}
</style>
