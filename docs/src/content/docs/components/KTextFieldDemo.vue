<script setup>
import ComponentExample from './ComponentExample.vue'
import KTextField from '../../../../../src/components/KTextField.vue'
import Button from '../../../../../src/components/Button.vue'
</script>

<template>
  <ComponentExample>
    <KTextField label="Username" placeholder="Enter username" class="not-content" />
    <KTextField placeholder="Search by order number" class="not-content">
      <template #appendButton>
        <Button label="Search" mode="primary" />
      </template>
    </KTextField>
    <KTextField label="Username" hint="Enter username you've provided during registration" class="not-content" />

    <KTextField label="Username" hint="Enter username you've provided during registration" required class="not-content">
      <template #prependAddon> @ </template>
    </KTextField>
  </ComponentExample>
</template>
