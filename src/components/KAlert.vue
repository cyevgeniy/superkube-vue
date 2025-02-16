<script setup lang="ts">
import { computed } from 'vue'
import KClose, { type KCloseSize } from './KClose.vue';

export interface KAlertProps {
  type?: 'default' | 'info' | 'success' | 'error'
  close?: boolean
  closeSize?: KCloseSize
}

const props = defineProps<KAlertProps>()

const emit  = defineEmits<{
  (evt: 'close'): void
}>()

const classes = computed(() => [
  props.type || 'default'
])

function onClose() {
  emit('close')
}
</script>


<template>
  <div class="alert" :class="classes">
    <KClose v-if="close" data-test="close" :size="closeSize" @click="onClose"/>
    <slot />
  </div>
</template>

<style scoped>
.alert {
    --alert-background-color: var(--palette-neutral-lighter);
    --alert-border-color: transparent;
    --alert-color: var(--palette-neutral-darker);
    --alert-padding: 1rem 2rem;
    --alert-font-size: var(--type-scale-14);
    --alert-font-weight: normal;
    --alert-line-height: var(--body-text-line);
    --alert-border-radius: var(--radius-base);
    --alert-border-width: 1px;
    --alert-border-style: solid;
    --alert-box-shadow: none;
    --alert-space: 0.5em;
    position: relative;
    font-weight: var(--alert-font-weight);
    font-size: var(--alert-font-size);
    line-height: var(--alert-line-height);
    padding: var(--alert-padding);
    border-radius: var(--alert-border-radius);
    border-style: var(--alert-border-style);
    border-width: var(--alert-border-width);
    box-shadow: var(--alert-box-shadow);
    background-color: var(--alert-background-color);
    border-color: var(--alert-border-color);
    color: var(--alert-color);
  }
  .alert :deep(h2), .alert :deep(h3), .alert :deep(h4), .alert :deep(h5), .alert :deep(h6), .alert :deep(p), .alert :deep(a) {
    color: inherit;
  }
  .alert :deep(* + p) {
    margin-top: var(--alert-space);
  }
  .alert :deep(a:hover) {
    opacity: 0.6;
  }
  .alert :deep(svg) {
    fill: currentColor;
  }
  .alert .close {
    position: absolute;
    right: 0.65em;
    top: 0.85em;
  }

  .alert.info {
    --alert-background-color: var(--palette-active-lightest);
    --alert-border-color: transparent;
    --alert-color: var(--palette-active-darker);
  }

  .alert.success {
    --alert-background-color: var(--palette-positive-lightest);
    --alert-border-color: transparent;
    --alert-color: var(--palette-positive-darker);
  }

  .alert.error {
    --alert-background-color: var(--palette-negative-lightest);
    --alert-border-color: transparent;
    --alert-color: var(--palette-negative-darker);
  }

  @media (prefers-color-scheme: dark) {
    .alert {
      --alert-background-color: var(--palette-neutral-lighter);
      --alert-border-color: transparent;
      --alert-color: var(--palette-neutral-darker);
    }
    .alert.info {
      --alert-background-color: var(--palette-active-lighter);
      --alert-border-color: transparent;
      --alert-color: var(--palette-active-darker);
    }
    .alert.success {
      --alert-background-color: var(--palette-positive-lighter);
      --alert-border-color: transparent;
      --alert-color: var(--palette-positive-darker);
    }
    .alert.error {
      --alert-background-color: var(--palette-negative-lighter);
      --alert-border-color: transparent;
      --alert-color: var(--palette-negative-darker);
    }
  }
</style>
