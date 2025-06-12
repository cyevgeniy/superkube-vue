<script setup lang="ts">
import { computed } from 'vue'

export interface KTextProps {
  is?: string
  color?:
    | 'default'
    | 'primary'
    | 'dark'
    | 'dark-mid'
    | 'muted'
    | 'success'
    | 'error'
    | 'light'
    | 'light-mid'
    | 'light-muted'
  size?: 'micro' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'mega'
  weight?: 'default' | 'semibold' | 'strong'
  italic?: boolean
  caps?: boolean
  mono?: boolean
  nowrap?: boolean
}

const props = defineProps<KTextProps>()

const classes = computed(() => [
  props.color || '',
  props.size || '',
  props.weight || '',
  {
    italic: props.italic,
    caps: props.caps,
    mono: props.mono,
    nowrap: props.nowrap,
  },
])

const is = computed(() => props.is || 'p')
</script>

<template>
  <component class="text" :is="is" :class="classes">
    <slot />
  </component>
</template>

<style scoped>
.text.semibold {
  font-weight: var(--font-weight-semibold);
}

.text.strong {
  font-weight: bold;
}

.text.italic {
  font-style: italic;
}

.text.mono {
  font-family: var(--font-mono);
}

.text.caps {
  text-transform: uppercase;
  letter-spacing: 0.035em;
}

.text.nowrap,
.text.nowrap :deep(td),
.text.nowrap :deep(th) {
  white-space: nowrap;
}

.text {
  --text-color: var(--text-default);
  --text-font-size: inherit;
  --text-line-height: inherit;
  font-size: var(--text-font-size);
  line-height: var(--text-line-height);
  color: var(--text-color);
}

.text.mega {
  --text-font-size: 24px;
  --text-line-height: 1.5;
}
.text.huge {
  --text-font-size: 20px;
  --text-line-height: 1.5;
}
.text.large {
  --text-font-size: 18px;
  --text-line-height: 1.5;
}
.text.default {
  --text-font-size: 16px;
  --text-line-height: 1.5;
}
.text.medium {
  --text-font-size: 14px;
  --text-line-height: 1.5;
}
.text.small {
  --text-font-size: 13px;
  --text-line-height: 1.5;
}
.text.micro {
  --text-font-size: 12px;
  --text-line-height: 1.5;
}

.text.dark {
  --text-color: var(--palette-black);
}

.text {
  --text-color: var(--palette-neutral-darker);
}

.text.dark-mid {
  --text-color: var(--palette-black-70);
}

.text.muted {
  --text-color: var(--palette-black-50);
}

.text.success {
  --text-color: var(--palette-positive-dark);
}

.text.error {
  --text-color: var(--palette-negative-dark);
}

.text.light {
  --text-color: var(--palette-white-90);
}

.text.light-mid {
  --text-color: var(--palette-white-70);
}

.text.light-muted {
  --text-color: var(--palette-white-50);
}

.text.primary {
  --text-color: var(--palette-primary-base);
}

.dark {
  .text.dark {
    --text-color: var(--palette-white-95);
  }
  .text {
    --text-color: var(--palette-white-90);
  }
  .text.dark-mid {
    --text-color: var(--palette-white-80);
  }
  .text.muted {
    --text-color: var(--palette-white-50);
  }
  .text.success {
    --text-color: var(--palette-positive-light);
  }
  .text.error {
    --text-color: var(--palette-negative-light);
  }
  .text.light {
    --text-color: var(--palette-white-90);
  }
  .text.light-mid {
    --text-color: var(--palette-white-80);
  }
  .text.light-muted {
    --text-color: var(--palette-white-50);
  }
  .text.primary {
    --text-color: var(--palette-primary-light);
  }
}
</style>
