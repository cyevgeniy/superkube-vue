<script setup lang="ts">
import { computed } from 'vue'
import type { State, HintPosition, KInputSize } from './KBaseInput.vue'
import KBaseInput from './KBaseInput.vue'

export interface KSelectOption {
  label: string
  value: any
  disabled?: boolean
}

export interface KSelectProps {
  modelValue: any
  options?: KSelectOption[]
  label?: string
  disabled?: boolean
  state?: State
  rounded?: boolean
  size?: KInputSize
  light?: boolean
  placeholder?: string
  hint?: string
  hintPosition?: HintPosition
  required?: boolean
  allowEmpty?: boolean
}

const props = withDefaults(defineProps<KSelectProps>(), {
  options: () => []
})

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
}>()

function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  const v = props.options[Number(target.value)]?.value ?? null

  emit('update:modelValue', v)
  emit('change', v)
}

const classes = computed(() => [
  props.size,
  props.state,
  props.light && 'light',
  props.rounded && 'round'
])


function isSelected(option: KSelectOption) {
  return value.value === option.value
}
</script>

<template>
    <KBaseInput :label="label" :light="props.light" :state="state" :hint-position="hintPosition" :hint="hint"
    :required="required">
    <select
      class="input" 
      :class="classes" 
      :disabled="disabled" 
      data-testid="selectInput" 
      @change="onChange"
    >
      <option 
        v-for="(option, idx) in options" 
        :key="option.value" 
        :value="idx" 
        :disabled="option.disabled"
        :selected="isSelected(option)"
      >
        {{ option.label }}
      </option>
      <option
        v-if="allowEmpty" 
        :value="null"
        :selected="value === null"
      >
        {{ placeholder }}
      </option>
    </select>
  </KBaseInput>

</template>

<style lang="css" scoped>
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
  --input-select-toggle: url('data:image/svg+xml;utf8,<svg height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(0,0,0)" opacity=".6" d="m6.6168815 3-4.44908109-4.09883609c-.22373388-.20615371-.22373388-.54039492 0-.74654863s.58647818-.20615371.81021206 0l4.85418712 4.47211041c.22373388.20615371.22373388.54039491 0 .74654862l-4.85418712 4.47211041c-.22373388.20615371-.58647818.20615371-.81021206 0s-.22373388-.54039492 0-.74654863z" fill-rule="evenodd" transform="matrix(0 1 -1 0 8 -2)"/></svg>');
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

.input[type=radio],
.input[type=checkbox] {
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

select.input {
  -webkit-appearance: none;
  background-image: var(--input-select-toggle);
  background-repeat: no-repeat;
  background-position: right 0.65em center;
  padding-right: 28px !important;
}


@media (prefers-color-scheme: dark) {
  select.input {
    --input-select-toggle: url('data:image/svg+xml;utf8,<svg height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(255,255,255)" opacity=".7" d="m6.6168815 3-4.44908109-4.09883609c-.22373388-.20615371-.22373388-.54039492 0-.74654863s.58647818-.20615371.81021206 0l4.85418712 4.47211041c.22373388.20615371.22373388.54039491 0 .74654862l-4.85418712 4.47211041c-.22373388.20615371-.58647818.20615371-.81021206 0s-.22373388-.54039492 0-.74654863z" fill-rule="evenodd" transform="matrix(0 1 -1 0 8 -2)"/></svg>');
  }

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
</style>