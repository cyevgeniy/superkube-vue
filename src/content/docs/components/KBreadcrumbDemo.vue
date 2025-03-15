<script setup>
import KBreadcrumb from '../../../components/KBreadcrumb.vue'
import ComponentExample from './ComponentExample.vue'
</script>

<template>
  <ComponentExample>
    <KBreadcrumb :items="[{ text: 'Home' }, { text: 'News' }, { text: 'Hot' }]" class="not-content" />
  </ComponentExample>
</template>
