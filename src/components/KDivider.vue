<script setup lang="ts">
import { computed } from 'vue'

export interface KDividerProps {
  color?: 'default' | 'dark-mid' | 'dark' | 'primary' | 'light' | 'light-muted'
  mode?: 'default' | 'dashed' | 'dotted'
  size?: number
  length?: number | 'auto'
  vertical?: boolean
}

const props = withDefaults(defineProps<KDividerProps>(), {
  length: 'auto',
})

const size = computed(() => `${props.size || 1}px`)
const length = computed(() => (props.length === 'auto' ? props.length : `${props.length}px`))

const classes = computed(() => [
  props.color || 'default',
  props.mode,
  {
    vertical: props.vertical,
  },
])
</script>

<template>
  <div class="divider" :class="classes" />
</template>

<style scoped>
.divider {
  --divider-color: var(--divider-default);
  --divider-size: v-bind(size);
  --divider-length: v-bind(length);
  --divider-style: solid;
  position: relative;
  line-height: 1;
  background: none;
  border: none;
  text-align: left;
  width: var(--divider-length);
  height: var(--divider-size);
  border-top-width: var(--divider-size);
  border-top-style: var(--divider-style);
  border-top-color: var(--divider-color);
}

.divider.vertical {
  border-top: none;
  width: var(--divider-size);
  height: 100%;
  /* height: var(--divider-length); */
  border-left-width: var(--divider-size);
  border-left-style: var(--divider-style);
  border-left-color: var(--divider-color);
}

.divider.dashed {
  --divider-style: dashed;
}

.divider.dotted {
  --divider-style: dotted;
}

.divider.default {
  --divider-color: var(--palette-black-10);
}

.divider.dark-mid {
  --divider-color: var(--palette-black-25);
}

.divider.dark {
  --divider-color: var(--palette-black);
}

.divider.primary {
  --divider-color: var(--palette-primary-base);
}

.divider.light {
  --divider-color: var(--palette-white);
}

.divider.light-muted {
  --divider-color: var(--palette-white-30);
}

@media (prefers-color-scheme: dark) {
  .divider.default {
    --divider-color: var(--palette-white-20);
  }
  .divider.dark-mid {
    --divider-color: var(--palette-white-40);
  }
  .divider.dark {
    --divider-color: var(--palette-white-50);
  }
  .divider.primary {
    --divider-color: var(--palette-primary-mid);
  }
  .divider.light {
    --divider-color: var(--palette-white-50);
  }
  .divider.light-muted {
    --divider-color: var(--palette-white-20);
  }
}
</style>
