<script setup lang="ts">
import { computed } from 'vue';
import KClose from './KClose.vue';

export interface KLabelProps {
    label: string
    mode?: 'base' | 'dark' | 'light'
    withClose?: boolean
    href?: string
}

const emit = defineEmits<{
    (evt: 'close'): void
}>()

const props = defineProps<KLabelProps>()

function handleClose() {
    emit('close')
}

const classes = computed(() => [
    props.mode
])

</script>

<template>
    <span class="label" :class="classes" data-testid="label">
        <a v-if="href" :href="href" target="_blank">{{ label}}</a>
        <template v-else>
            {{ label }}
        </template>
        <KClose v-if="withClose" @click="handleClose" />
    </span> 
</template>

<style scoped>
.label {
  --label-background-color: var(--palette-neutral-lighter);
  --label-border-color: transparent;
  --label-color: var(--palette-neutral-darker);
  --label-font-size: var(--type-scale-12);
  --label-font-weight: var(--font-weight-semibold);
  --label-border-radius: var(--radius-medium);
  --label-padding: 6px 10px;
  --label-border-width: 1px;
  --label-border-style: solid;
  --label-text-transform: none;
  --label-close-size: 10px;
  --label-close-space: 3px;
  font-weight: var(--label-font-weight);
  font-size: var(--label-font-size);
  border-radius: var(--label-border-radius);
  padding: var(--label-padding);
  border-width: var(--label-border-width);
  border-style: var(--label-border-style);
  text-transform: var(--label-text-transform);
  color: var(--label-color);
  border-color: var(--label-border-color);
  background-color: var(--label-background-color);
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  vertical-align: baseline;
  text-decoration: none;
  line-height: 1;
}
.label a {
  color: inherit;
  text-decoration: none;
}
.label a:hover {
  color: inherit;
  text-decoration: underline;
}
.label .close {
  --close-size: var(--label-close-size);
  margin-left: var(--label-close-space);
  margin-right: -2px;
}

a.label:hover {
  opacity: 1;
  text-decoration: underline;
  color: var(--label-color);
}

.label.dark {
  --label-background-color: var(--palette-black);
  --label-border-color: transparent;
  --label-color: var(--palette-negative-lightest);
}

.label.light {
  --label-background-color: var(--palette-white);
  --label-border-color: transparent;
  --label-color: var(--palette-black);
}

@media (prefers-color-scheme: dark) {
  .label {
    --label-background-color: var(--palette-neutral-lighter);
    --label-border-color: transparent;
    --label-color: var(--palette-neutral-darker);
  }
  .label.dark {
    --label-background-color: var(--palette-white-30);
    --label-border-color: transparent;
    --label-color: var(--palette-white);
  }
  .label.light {
    --label-background-color: var(--palette-white-20);
    --label-border-color: transparent;
    --label-color: var(--palette-white);
  }
}
</style>