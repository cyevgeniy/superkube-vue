<script setup lang="ts">
import { computed } from 'vue'

export interface KLinkProps {
  href?: string
}

const props = withDefaults(defineProps<KLinkProps>(), {
  href: ''
})

const isExternal = computed(() => props.href.startsWith('http'))

const as = computed(() => props.href ? isExternal.value ? 'a' : 'router-link' : 'span')

// target = '_blank' implies rel=noopener
const target = computed(() => isExternal.value ? '_blank' : undefined)
const to = computed(() => isExternal.value ? undefined : props.href)
const href = computed(() => isExternal.value ? props.href : undefined)


</script>

<template>
  <component :is="as" :to="to" :href="href" :target="target">
    <slot />
  </component>
</template>
