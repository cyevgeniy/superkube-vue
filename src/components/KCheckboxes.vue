<script setup lang="ts">
import { computed } from 'vue'
import type { KInputSize } from './KBaseInput.vue'
import KCheckbox from './KCheckbox.vue'

type Value = string | number

interface Option {
  label: string
  value: Value
  disabled?: boolean
}

interface Props {
  modelValue?: Value[]
  options: Option[]
  hint?: string
  size?: KInputSize
  disabled?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (evt: 'update:modelValue', v: Value[]): void
}>()

const _value = computed(() => props.modelValue ?? [])

function isChecked(v: Value) {
  return _value.value.includes(v)
}

function setValue(index: number) {
  const v = props.options[index].value

  const res = _value.value.filter((value) => value !== v).concat(_value.value.includes(v) ? [] : [v])

  emit('update:modelValue', res)
}
</script>
<template>
  <div class="checkboxes">
    <KCheckbox
      v-for="(option, index) in options"
      :model-value="isChecked(option.value)"
      @update:model-value="setValue(index)"
      :key="index"
      :label="option.label"
      :size="size"
      :disabled="option.disabled || disabled"
    />
  </div>
</template>

<style scoped>
.checkboxes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
