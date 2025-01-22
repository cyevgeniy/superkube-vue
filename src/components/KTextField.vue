<script setup lang="ts">
import { computed } from 'vue'


export type KTextFieldState = 'error' | 'success'
export type KTextFieldSize = 'small' | 'regular' | 'large'

export interface KTextFieldProps {
  modelValue: string | null
  label?: string
  disabled?: boolean
  state?: KTextFieldState
  rounded?: boolean
  size?: KTextFieldSize
  light?: boolean
  placeholder?: string
}

const props = defineProps<KTextFieldProps>()

const emit = defineEmits<{
  (evt: 'update:modelValue', v: string): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(v: string) {
    emit('update:modelValue', v)
  }
})

const classes = computed(() => [
  props.size,
  props.state,
  props.light && 'light',
  props.rounded && 'round'
])

const labelClasses = computed(() => {

})
</script>

<template>
  <div class="kTextField">
    <label v-if="label"> {{ label }} </label>
    <input v-model="value" class="input" :class="classes" type="text" :disabled="disabled" :placeholder="placeholder" />
  </div>
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
  --input-select-toggle: url('data:image/svg+xml;utf8,<svg height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(0,0,0)" opacity=".6" d="m6.6168815 3-4.44908109-4.09883609c-.22373388-.20615371-.22373388-.54039492 0-.74654863s.58647818-.20615371.81021206 0l4.85418712 4.47211041c.22373388.20615371.22373388.54039491 0 .74654862l-4.85418712 4.47211041c-.22373388.20615371-.58647818.20615371-.81021206 0s-.22373388-.54039492 0-.74654863z" fill-rule="evenodd" transform="matrix(0 1 -1 0 8 -2)"/></svg>');
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

.input-addon {
  --input-addon-color: var(--palette-black-60);
  --input-addon-background-color: var(--palette-black-5);
  --input-addon-border-color: var(--palette-black-10);
  --input-addon-font-size: 14px;
  --input-addon-padding: 0 0.85em;
  --input-addon-border-radius: var(--radius-small);
  --input-addon-border-width: 1px;
  --input-addon-border-style: solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-size: var(--input-addon-font-size);
  padding: var(--input-addon-padding);
  border-radius: var(--input-addon-border-radius);
  color: var(--input-addon-color);
  background-color: var(--input-addon-background-color);
  border-width: var(--input-addon-border-width);
  border-style: var(--input-addon-border-style);
  border-color: var(--input-addon-border-color);
}

@media (prefers-color-scheme: dark) {
  .input-addon {
    --input-addon-color: var(--palette-white-60);
    --input-addon-background-color: var(--palette-white-10);
    --input-addon-border-color: transparent;
  }
}

.input-group {
  display: flex;
}

.input-group .input {
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;
}

.input-group> :not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group> :not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.kTextField:has(> .input.round) label {
  margin-left: 16px;
}

</style>