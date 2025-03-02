<script setup lang="ts">
import { computed } from 'vue'

export type KListItem = Record<string, any> | string

export interface KListProps {
  items?: KListtem[]
  labelField?: string
  size?: 'default' | 'medium' | 'small'
  weight?: 'normal' | 'strong' | 'semibold'
  inline?: boolean
  stacked?: boolean
  bordered?: boolean
  markType?: 'unstyled' | 'checkmark' | 'dashed' | 'numbered'
}
const props = defineProps<KListProps>()

function getText(item: KListItem) {
  return typeof item === 'string' ? item : item[props.labelField]
}

const classes = computed(() => [
  props.markType || 'unstyled',
  props.weight || 'normal',
  props.size || 'default',
  {
    bordered: props.bordered,
    stacked: props.stacked,
    inline: props.inline,
  },
])
</script>

<template>
  <ul class="list" :class="classes">
    <li v-for="item in items" class="list-item">
      {{ getText(item) }}
    </li>
  </ul>
</template>

<style scoped>
.list.unstyled,
.list.inline,
.list.checkmark,
.list.dashed {
  list-style: none;
  margin-left: 0;
}

.list.inline li {
  display: inline;
  white-space: nowrap;
  margin-right: 0.25em;
}

.list.checkmark,
.list.dashed {
  position: relative;
}

.list.checkmark {
  --list-mark-color: var(--text-default);
  --list-mark: '✓';
  padding-left: 1.3em;
}

.list.dashed {
  --list-mark-color: var(--text-default);
  --list-mark: '—';
  padding-left: 1.35em;
}

.list.checkmark li:before,
.list.dashed li:before {
  position: absolute;
  left: 0;
  content: var(--list-mark);
  color: var(--list-mark-color);
}

.list.checkmark.light {
  --list-color: var(--palette-white-90);
  --list-mark-color: var(--palette-white-80);
}

.list.dashed.light {
  --list-color: var(--palette-white-90);
  --list-mark-color: var(--palette-white-80);
}

.list {
  --list-item-color: var(--text-default);
  --list-font-size: var(--type-scale-15);
  --list-line-height: 1.3;
  --list-item-space: 0;
  --list-item-padding-y: 6px;
  --list-item-padding-x: 0;
  --list-item-font-weight: normal;
  list-style: none;
  margin-left: 0;
  color: var(--list-color);
}
.list .list-item {
  font-size: var(--list-font-size);
  font-weight: var(--list-item-font-weight);
  line-height: var(--list-line-height);
  padding-top: var(--list-item-padding-y);
  padding-bottom: var(--list-item-padding-y);
  padding-left: var(--list-item-padding-x);
  padding-right: var(--list-item-padding-x);
  margin-bottom: var(--list-item-space);
  color: var(--list-item-color);
}
.list .list-item:last-child {
  margin-bottom: 0;
}
.list .list-item .list {
  width: 100%;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5rem;
}
.list .list + h4,
.list .list + h5,
.list .list + h6 {
  margin-top: 5rem;
}
.list .label {
  margin-top: -2px;
}

.list.medium {
  --list-font-size: var(--type-scale-14);
}

.list.small {
  --list-font-size: var(--type-scale-13);
}

.list.light {
  --list-item-color: var(--palette-white-90);
}

.list.strong {
  --list-item-font-weight: bold;
}

.list.semibold {
  --list-item-font-weight: var(--font-weight-semibold);
}

.list.stacked {
  --list-item-border-color: var(--palette-black-7);
  --list-item-padding-y: 8px;
  --list-item-border-width: 1px;
  --list-item-border-style: solid;
}
.list.stacked .list-item {
  border-bottom-width: var(--list-item-border-width);
  border-bottom-style: var(--list-item-border-style);
  border-bottom-color: var(--list-item-border-color);
}
.list.stacked .list-item:last-child {
  border-bottom-color: transparent;
}

.list.stacked.light {
  --list-border-color: var(--palette-white-20);
}

.list.bordered {
  --list-border-color: var(--palette-black-7);
  --list-border-width: 1px;
  --list-border-style: solid;
  --list-border-radius: var(--radius-base);
  --list-item-padding-y: 6px;
  --list-item-padding-x: 12px;
  --list-item-space: 1px;
  border-width: var(--list-border-width);
  border-radius: var(--list-border-radius);
  border-style: var(--list-border-style);
  border-color: var(--list-border-color);
}
.list.bordered .list-item:last-child {
  margin-bottom: 0;
}

.list.bordered.light {
  --list-border-color: var(--palette-white-20);
}

.list.numbered {
  --list-number-color: var(--palette-black-60);
  --list-number-font-size: 80%;
  --list-number-width: 22px;
  counter-reset: numbers;
}
.list.numbered .list-item {
  display: flex;
  align-items: center;
  counter-increment: numbers;
}
.list.numbered .list-item:before {
  width: var(--list-number-width);
  font-size: var(--list-number-font-size);
  content: counter(numbers, decimal-leading-zero);
  color: var(--list-number-color);
}

.list.numbered.light {
  --list-number-color: var(--palette-white-60);
}

.list.numbered-right .list-item {
  position: relative;
  padding-right: calc(var(--list-number-width) + 4px);
}
.list.numbered-right .list-item:before {
  display: none;
}
.list.numbered-right .list-item:after {
  position: absolute;
  right: 0;
  width: var(--list-number-width);
  font-size: var(--list-number-font-size);
  content: counter(numbers, decimal-leading-zero);
  text-align: right;
  color: var(--list-number-color);
}

@media (prefers-color-scheme: dark) {
  .list.light {
    --list-item-color: var(--palette-white-90);
  }
  .list.stacked,
  .list.stacked.light {
    --list-item-border-color: var(--palette-white-15);
  }
  .list.bordered,
  .list.bordered.light {
    --list-border-color: var(--palette-white-15);
  }
  .list.numbered,
  .list.numbered.light {
    --list-number-color: var(--palette-white-50);
  }
  .list.checkmark,
  .list.checkmark.light {
    --list-mark-color: var(--palette-white-80);
  }
  .list.dashed,
  .list.dashed.light {
    --list-mark-color: var(--palette-white-80);
  }
}
</style>
