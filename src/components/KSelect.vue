<script setup lang="ts">
import { computed } from 'vue'
import type { State, HintPosition, KInputSize } from './KBaseInput.vue'
import KBaseInput from './KBaseInput.vue'

export interface KSelectProps {
  modelValue: string | null
  items?: (string | Record<string, any>)[]
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
}

const props = defineProps<KSelectProps>()

const classes = computed(() => [
  props.size,
  props.state,
  props.light && 'light',
  props.rounded && 'round'
])
</script>

<template>
    <KBaseInput :label="label" :light="props.light" :state="state" :hint-position="hintPosition" :hint="hint"
    :required="required">
    <template v-if="$slots.prependAddon" #prependAddon>
      <slot name="prependAddon" />
    </template>
    <slot name="prependButton" />
    <input v-model="value" class="input" :class="classes" type="select" :disabled="disabled" :placeholder="placeholder"
      data-testid="textInput" @blur="onBlur" @focus="onFocus">

</input>
    <slot name="appendButton" />
    <template v-if="$slots.appendAddon" #appendAddon>
      <slot name="appendAddon" />
    </template>
  </KBaseInput>

</template>

<style lang="css" scoped>
</style>