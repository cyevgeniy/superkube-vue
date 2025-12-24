<script setup lang="ts">
import { computed } from 'vue'
import KBaseInput, { type KInputSize, type State } from './KBaseInput.vue'

export type KCheckboxState = State

export interface KCheckboxProps {
  modelValue?: boolean | undefined
  label?: string
  hint?: string
  disabled?: boolean
  size?: KInputSize
  state?: KCheckboxState
}

const props = defineProps<KCheckboxProps>()

const emit = defineEmits<{
  (evt: 'update:modelValue', value: boolean): void
}>()

const classes = computed(() => [props.disabled && 'disabled', props.size])

function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <KBaseInput :hint="hint" hint-position="bottom" :state="state">
    <label class="checkbox" :class="classes" data-test="checkboxLabel">
      <input
        type="checkbox"
        :disabled="disabled"
        data-test="checkboxInput"
        :checked="!!modelValue"
        @change="onChange"
      />
      {{ label }}
    </label>
  </KBaseInput>
</template>

<style scoped>
.checkbox {
  --checkbox-radio-color: var(--text-default);
  --checkbox-radio-font-size: var(--type-scale-15);
  --checkbox-radio-font-weight: normal;
  --checkbox-radio-font-style: normal;
  --checkbox-radio-text-transform: none;
  --checkbox-radio-line-height: var(--body-text-line);
  --checkbox-radio-letter-spacing: 0;
  --checkbox-radio-space: 1rem;
  --checkbox-size: 16px;
  font-size: var(--checkbox-radio-font-size);
  font-weight: var(--checkbox-radio-font-weight);
  font-style: var(--checkbox-radio-font-style);
  line-height: var(--checkbox-radio-line-height);
  text-transform: var(--checkbox-radio-text-transform);
  letter-spacing: var(--checkbox-radio-letter-spacing);
  color: var(--checkbox-radio-color);
  cursor: pointer;
}

.checkbox input {
  width: var(--checkbox-size);
  height: var(--checkbox-size);
}

.checkbox.disabled {
  opacity: 0.5;
  cursor: default;
}

[type='checkbox'] {
  vertical-align: middle;
  position: relative;
  bottom: 0.1em;
  margin-right: 2px;
}

.input[type='checkbox'] {
  outline: 2px solid var(--input-outline-color);
}

.dark {
  .checkbox {
    --checkbox-radio-color: var(--text-light);
  }
}

.checkbox.small {
  --checkbox-size: 12px;
  --checkbox-radio-font-size: var(--type-scale-12);
}

.checkbox.large {
  --checkbox-size: 24px;
  --checkbox-radio-font-size: var(--type-scale-18);
}
</style>
