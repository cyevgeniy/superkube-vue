<script setup lang="ts">
import { computed } from 'vue'
import KBaseInput from './KBaseInput.vue'
import type { State, HintPosition, KInputSize } from './KBaseInput.vue'

export type KTextFieldState = State

export interface KTextFieldProps {
  modelValue: string | null
  label?: string
  disabled?: boolean
  state?: KTextFieldState
  rounded?: boolean
  size?: KInputSize
  light?: boolean
  placeholder?: string
  hint?: string
  hintPosition?: HintPosition
  required?: boolean
}

const props = defineProps<KTextFieldProps>()

const emit = defineEmits<{
  (evt: 'update:modelValue', v: string): void
  (evt: 'blur', v: FocusEvent): void
  (evt: 'focus', v: FocusEvent): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(v: string) {
    emit('update:modelValue', v)
  },
})

const classes = computed(() => [props.size, props.state, props.light && 'light', props.rounded && 'round'])

function onBlur(e: FocusEvent) {
  emit('blur', e)
}

function onFocus(e: FocusEvent) {
  emit('focus', e)
}
</script>

<template>
  <KBaseInput
    :label="label"
    :light="props.light"
    :state="state"
    :hint-position="hintPosition"
    :hint="hint"
    :required="required"
  >
    <template v-if="$slots.prependAddon" #prependAddon>
      <slot name="prependAddon" />
    </template>
    <slot name="prependButton" />
    <input
      v-model="value"
      class="input"
      :class="classes"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      :required="required"
      data-testid="textInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <slot name="appendButton"> </slot>
    <template v-if="$slots.appendAddon" #appendAddon>
      <slot name="appendAddon" />
    </template>
  </KBaseInput>
</template>

<style scoped>
.input {
  --input-color: var(--palette-neutral-darker);
  --input-border-color: var(--palette-black-20);
  --input-background-color: var(--palette-white);
  --input-box-shadow: none;
  --input-focus-color: var(--palette-neutral-darker);
  --input-focus-border-color: transparent;
  --input-focus-outline-color: var(--palette-active-mid);
  --input-focus-background-color: var(--palette-white);
  --input-focus-box-shadow: none;
  --input-font-size: var(--type-scale-15);
  --input-line-height: var(--body-text-line);
  --input-border-radius: var(--radius-base);
  --input-padding: 0.3em 0.5em;
  --input-border-width: 1px;
  --input-border-style: solid;
  --input-outline-offset: -2px;
  --input-outline-width: 2px;
  --input-outline-style: solid;
  --input-box-shadow: none;
  --input-height: 42px;
  display: block;
  width: 100%;
  font-family: inherit;
  vertical-align: middle;
  font-weight: normal;
  padding: var(--input-padding);
  font-size: var(--input-font-size);
  line-height: var(--input-line-height);
  border-radius: var(--input-border-radius);
  border-width: var(--input-border-width);
  border-style: var(--input-border-style);
  border-color: var(--input-border-color);
  color: var(--input-color);
  background-color: var(--input-background-color);
  box-shadow: var(--input-box-shadow);
  height: var(--input-height);
}

.input.disabled,
.input:disabled {
  resize: none;
  opacity: 0.6;
  cursor: default;
}

.input:focus {
  color: var(--input-focus-color);
  border-color: var(--input-focus-border-color);
  background-color: var(--input-focus-background-color);
  box-shadow: var(--input-focus-box-shadow);
  outline-color: var(--input-focus-outline-color);
  outline-style: var(--input-outline-style);
  outline-width: var(--input-outline-width);
  outline-offset: var(--input-outline-offset);
}

.input[type='radio'],
.input[type='checkbox'] {
  outline: 2px solid var(--input-outline-color);
}

.input.small {
  --input-height: 36px;
  --input-font-size: var(--type-scale-14);
}

.input.large {
  --input-height: 52px;
  --input-font-size: var(--type-scale-18);
  --input-padding: 0.3em 0.4em;
}

.input.round {
  --input-border-radius: 99px;
  --input-padding: 0.3em 1em;
}

.input.light {
  --input-color: var(--palette-white-90);
  --input-border-color: var(--palette-white-40);
  --input-background-color: var(--palette-white-15);
  --input-box-shadow: none;
  --input-focus-color: var(--palette-white-90);
  --input-focus-outline-color: var(--palette-white-60);
  --input-focus-border-color: transparent;
  --input-focus-background-color: var(--palette-white-20);
}

.input.light::-webkit-input-placeholder {
  color: var(--placeholder-light);
}

.input.light::-moz-placeholder {
  color: var(--placeholder-light);
}

.input.light::-ms-input-placeholder {
  color: var(--placeholder-light);
}

.input.light::placeholder {
  color: var(--placeholder-light);
}

.input.error {
  --input-color: var(--palette-negative-dark);
  --input-border-color: var(--palette-negative-base);
  --input-outline-color: var(--palette-negative-base);
  --input-focus-color: var(--palette-negative-base);
  --input-focus-box-shadow: none;
  --input-focus-border-color: transparent;
  --input-focus-outline-color: var(--palette-negative-base);
}

.input.success {
  --input-color: var(--palette-positive-dark);
  --input-border-color: var(--palette-positive-base);
  --input-outline-color: var(--palette-positive-base);
  --input-focus-color: var(--palette-positive-base);
  --input-focus-box-shadow: none;
  --input-focus-border-color: transparent;
  --input-focus-outline-color: var(--palette-positive-base);
}

.dark {
  .input {
    --input-color: var(--palette-white-90);
    --input-border-color: var(--palette-white-30);
    --input-background-color: var(--palette-white-15);
    --input-box-shadow: none;
    --input-focus-color: var(--palette-white-90);
    --input-focus-border-color: transparent;
    --input-focus-outline-color: var(--palette-white-50);
    --input-focus-background-color: var(--palette-white-20);
    --input-focus-box-shadow: none;
  }

  .input::-webkit-input-placeholder {
    color: var(--placeholder-light);
  }

  .input::-moz-placeholder {
    color: var(--placeholder-light);
  }

  .input::-ms-input-placeholder {
    color: var(--placeholder-light);
  }

  .input::placeholder {
    color: var(--placeholder-light);
  }

  .input.disabled,
  .input:disabled {
    opacity: 0.4;
  }

  .input.light {
    --input-color: var(--palette-white-90);
    --input-border-color: var(--palette-white-40);
    --input-background-color: var(--palette-white-15);
    --input-box-shadow: none;
    --input-focus-color: var(--palette-white-90);
    --input-focus-border-color: transparent;
    --input-focus-outline-color: var(--palette-white-60);
    --input-focus-background-color: var(--palette-white-20);
    --input-focus-box-shadow: none;
  }

  .input.error {
    --input-outline-color: var(--palette-negative-mid);
    --input-color: var(--palette-negative-base);
    --input-border-color: var(--palette-negative-mid);
    --input-background-color: var(--palette-white-15);
    --input-box-shadow: none;
    --input-focus-color: var(--palette-negative-base);
    --input-focus-border-color: transparent;
    --input-focus-outline-color: var(--palette-negative-base);
    --input-focus-background-color: var(--palette-white-20);
    --input-focus-box-shadow: none;
  }

  .input.success {
    --input-outline-color: var(--palette-positive-mid);
    --input-color: var(--palette-positive-base);
    --input-border-color: var(--palette-positive-mid);
    --input-background-color: var(--palette-white-15);
    --input-box-shadow: none;
    --input-focus-color: var(--palette-positive-base);
    --input-focus-border-color: transparent;
    --input-focus-outline-color: var(--palette-positive-base);
    --input-focus-background-color: var(--palette-white-20);
    --input-focus-box-shadow: none;
  }
}

.kTextField:has(> .input.round) label {
  margin-left: 16px;
}
</style>
