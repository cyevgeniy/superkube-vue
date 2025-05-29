<script setup>
import ComponentExample from './ComponentExample.vue'
import KTextField from '../src/components/KTextField.vue'
import Button from '../src/components/KButton.vue'
import { computed, ref } from 'vue'

const idx = ref(0)
const states = ['neutral', 'success', 'error']

const state = computed(() => states[idx.value])

const stateText = ref('John Doe')

function changeState() {
  if (idx.value === states.length - 1) idx.value = 0
  else idx.value++
}
</script>

<template>
  <ComponentExample flex column>
    <KTextField label="Username" placeholder="Enter username" class="not-content" />
    <KTextField v-model="stateText" placeholder="Search by order number" class="not-content" :state="state">
      <template #appendButton>
        <Button label="Change state" mode="primary" @click="changeState" />
      </template>
    </KTextField>
    <KTextField label="Username" hint="Enter username you've provided during registration" class="not-content" />

    <KTextField label="Username" hint="Enter username you've provided during registration" required class="not-content">
      <template #prependAddon> @ </template>
    </KTextField>
  </ComponentExample>
</template>
