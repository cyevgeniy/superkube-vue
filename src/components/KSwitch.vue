<script setup lang="ts">
import { computed } from 'vue'

export interface KSwitchProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

const props = defineProps<KSwitchProps>()

const emit = defineEmits<{
  (evt: 'update:modelValue', v: boolean): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(v: boolean) {
    emit('update:modelValue', v)
  },
})

const classes = computed(() => [props.disabled && 'disabled'])
</script>

<template>
  <label class="toggle" :class="classes" data-testid="toggle">
    <input class="toggle-checkbox" type="checkbox" :disabled="disabled" v-model="value" />
    <div class="toggle-toggle"></div>
    <span class="toggle-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.toggle {
  --toggle-background-color: var(--palette-neutral-mid);
  --toggle-active-background-color: var(--palette-active-base);
  --toggle-handle-background-color: var(--palette-white);

  --toggle-label-font-size: var(--type-scale-15);
  --toggle-label-font-weight: normal;
  --toggle-label-line-height: var(--body-text-line);
  --toggle-label-text-transform: none;
  --toggle-label-color: var(--text-default);
  --toggle-label-top: 2px;
  --toggle-label-margin-left: 2px;
  --toggle-width: 36px;
  --toggle-height: 22px;
  --toggle-border-radius: calc(var(--toggle-height) / 2);
  --toggle-size: 18px;
  --toggle-space: 2px;

  cursor: pointer;
  display: inline-block;
}
.toggle .toggle-checkbox {
  position: absolute;
  visibility: hidden;
}
.toggle .toggle-checkbox:checked + .toggle-toggle {
  background-color: var(--toggle-active-background-color);
}
.toggle .toggle-checkbox:checked + .toggle-toggle:before {
  left: 50%;
}
.toggle .toggle-label {
  position: relative;
  font-weight: var(--toggle-label-font-weight);
  font-size: var(--toggle-label-font-size);
  line-height: var(--toggle-label-line-height);
  text-transform: var(--toggle-label-text-transform);
  top: var(--toggle-label-top);
  margin-left: var(--toggle-label-margin-left);
  color: var(--toggle-label-color);
}
.toggle .toggle-toggle {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  transition: background-color 0.25s;
  border-radius: var(--toggle-border-radius);
  width: var(--toggle-width);
  height: var(--toggle-height);
  background-color: var(--toggle-background-color);
}
.toggle .toggle-toggle:before,
.toggle .toggle-toggle:after {
  content: '';
}
.toggle .toggle-toggle:before {
  position: absolute;
  display: block;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  transition: left 0.25s;
  width: var(--toggle-size);
  height: var(--toggle-size);
  top: var(--toggle-space);
  left: var(--toggle-space);
  background-color: var(--toggle-handle-background-color);
}
.toggle:hover .toggle-toggle:before {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}

.dark {
  .toggle {
    --toggle-background-color: var(--palette-neutral-mid);
    --toggle-active-background-color: var(--palette-active-mid);
    --toggle-handle-background-color: var(--palette-white);
    --toggle-label-color: var(--palette-white-90);
  }
}

.toggle.disabled {
  opacity: 0.9;
}
</style>
