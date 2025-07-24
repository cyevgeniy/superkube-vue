<script setup lang="ts">
import { ref } from 'vue'
import ComponentExample from './ComponentExample.vue'
import KSwitch from '../src/components/KSwitch.vue'
import '../src/palette.css'

const val = ref(false)
</script>

<template>
  <ComponentExample>
    <KSwitch v-model="val" label="Choose a city" class="not-content" />
  </ComponentExample>
</template>
