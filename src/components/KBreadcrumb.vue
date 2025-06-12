<script setup lang="ts">
import { computed } from 'vue'
import KLink from './KLink.vue'

export interface KBreadcrumbItem {
  text: string
  href?: string
}

export interface KBreadcrumbProps {
  light?: boolean
  type?: 'default' | 'bullet' | 'path'
  items?: KBreadcrumbItem[]
  highlightLast?: boolean
}

const props = defineProps<KBreadcrumbProps>()

const classes = computed(() => [
  props.type || 'default',
  {
    light: props.light,
  },
])
</script>

<template>
  <nav class="breadcrumb" :class="classes">
    <ul class="breadcrumb-list">
      <li v-for="(item, index) in items" class="breadcrumb-item" :class="{ active: index === items!.length - 1 }">
        <KLink :href="item.href" class="breadcrumb-link">{{ item.text }}</KLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb {
  --breadcrumb-link-color: var(--palette-black);
  --breadcrumb-link-hover-color: var(--palette-black-60);
  --breadcrumb-link-active-color: var(--palette-black-40);
  --breadcrumb-separator-color: var(--palette-black-25);
  --breadcrumb-font-size: var(--type-scale-14);
  --breadcrumb-line-height: var(--body-text-line);
  --breadcrumb-item-space: 1rem;
  --breadcrumb-separator: '/';
  font-size: var(--breadcrumb-font-size);
  line-height: var(--breadcrumb-line-height);
}
.breadcrumb .breadcrumb-list {
  display: flex;
  align-items: center;
}
.breadcrumb .breadcrumb-item {
  display: flex;
  align-items: center;
}
.breadcrumb .breadcrumb-item:after {
  content: var(--breadcrumb-separator);
  color: var(--breadcrumb-separator-color);
  margin-left: var(--breadcrumb-item-space);
  margin-right: var(--breadcrumb-item-space);
}
.breadcrumb .breadcrumb-item:last-child:after {
  display: none;
}
.breadcrumb .breadcrumb-item.active .breadcrumb-link {
  color: var(--breadcrumb-link-active-color);
  text-decoration: none;
  cursor: auto;
}
.breadcrumb .breadcrumb-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--breadcrumb-link-color);
  cursor: pointer;
}
.breadcrumb .breadcrumb-link:hover {
  text-decoration: underline;
  color: var(--breadcrumb-link-hover-color);
}

.breadcrumb.light {
  --breadcrumb-link-color: var(--palette-white-80);
  --breadcrumb-link-hover-color: var(--palette-white);
  --breadcrumb-link-active-color: var(--palette-white-50);
  --breadcrumb-separator-color: var(--palette-white-30);
}

.breadcrumb.bullet {
  --breadcrumb-separator: '∙';
}

.breadcrumb.path {
  --breadcrumb-separator: '≻';
}

.dark {
  .breadcrumb {
    --breadcrumb-link-color: var(--palette-white-90);
    --breadcrumb-link-hover-color: var(--palette-white);
    --breadcrumb-link-active-color: var(--palette-white-50);
    --breadcrumb-separator-color: var(--palette-white-30);
  }
}
</style>
