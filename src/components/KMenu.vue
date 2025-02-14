<script setup lang="ts">
import { computed } from 'vue'
import KLabel from './KLabel.vue'
import KWrapper from './KWrapper.vue'
import type { KLabelProps } from './KLabel.vue'
import type { KTextProps } from './KText.vue'
import KText from './KText.vue'
import KLink from './KLink.vue'

export interface MenuText extends KTextProps {
  text: string
}

export interface MenuItem {
  text: string
  note?: MenuText
  label?: KLabelProps
  href?: string
}

export interface KMenuProps {
  modelValue?: MenuItem | null
  items?: MenuItem[]
  mode?: 'muted' | 'primary' | 'light'
  weight?: 'normal' | 'semibold' | 'strong'
  size?: 'small' | 'medium' | 'normal' | 'large'
  underline?: boolean
  stacked?: boolean
  numbered?: boolean
  numbersPosition?: 'left' | 'right'
  pills?: boolean
}

const props = defineProps<KMenuProps>()

const emit = defineEmits<{
  (evt: 'click', item: MenuItem): void
  (evt: 'update:modelValue', v: MenuItem): void
}>()

const _value = computed(() => {
  return props.modelValue
})

const classes = computed(() => [
  props.mode ?? '',
  props.weight,
  props.size,
  {
    underline: props.underline,
    stacked: props.stacked,
    numbered: props.numbered,
    'numbered-right': props.numbersPosition === 'right',
    pills: props.pills,
  }
])

function itemClasses(item: MenuItem) {
  return {
    active: isActive(item),
  }
}

function handleItemClick(item: MenuItem) {
  emit('click', item)

  if (_value.value !== undefined)
    emit('update:modelValue', item)
}

function isActive(item: MenuItem) {
  return _value.value ? _value.value.text === item.text : false
}
</script>
<template>
  <nav class="menu" :class="classes" data-testid="menu">
    <ul class="menu-list">
      <li v-for="item in items" :key="item.text" class="menu-item" data-testid="menu-item" :class="itemClasses(item)">
        <KWrapper :is="item.label ? 'div' : undefined" class="menu-link-box">
            <KLink
              class="menu-link"
              :class="{'flex-none': item.label}"
              @click="handleItemClick(item)"
              :href="item.href"
              data-testid="menu-link"
            >
              {{ item.text }}
            </KLink>
            <KLabel v-if="item.label" v-bind="item.label" style="margin-left: 10px;" />
            <KText v-if="item.note" data-testid="menu-note" v-bind="item.note"> {{ item.note.text }} </KText>
        </KWrapper>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.flex-none {
  flex: 0 0 auto !important;
}

.menu {
  --menu-link-color: var(--palette-black);
  --menu-link-background-color: transparent;
  --menu-link-hover-color: var(--palette-black-60);
  --menu-link-hover-background-color: transparent;
  --menu-link-active-color: var(--palette-black-40);
  --menu-link-active-background-color: transparent;
  --menu-font-size: var(--type-scale-15);
  --menu-nested-margin: 5rem;
  --menu-line-height: 1.3;
  --menu-link-padding-x: 0;
  --menu-link-padding-y: 6px;
  --menu-link-font-weight: normal;
  --menu-link-active-font-weight: normal;
  --menu-item-space: 0;
  --menu-item-padding: 0;
  font-size: var(--menu-font-size);
  line-height: var(--menu-line-height);
}

.menu .menu-item {
  padding: var(--menu-item-padding);
  margin-bottom: var(--menu-item-space);
}

.menu .menu-item:last-child {
  margin-bottom: 0;
}

.menu .menu-item.active .menu-link {
  text-decoration: none;
  font-weight: var(--menu-link-active-font-weight);
  color: var(--menu-link-active-color);
  background-color: var(--menu-link-active-background-color);
}

.menu .menu-link {
  display: flex;
  align-items: center;
  flex: 1;
  text-decoration: none;
  font-weight: var(--menu-link-font-weight);
  padding-top: var(--menu-link-padding-y);
  padding-bottom: var(--menu-link-padding-y);
  padding-left: var(--menu-link-padding-x);
  padding-right: var(--menu-link-padding-x);
  color: var(--menu-link-color);
  background-color: var(--menu-link-background-color);
  cursor: pointer;
}

.menu .menu-link:hover {
  text-decoration: underline;
  color: var(--menu-link-hover-color);
  background-color: var(--menu-link-hover-background-color);
}

.menu .menu-link-box {
  display: flex;
  align-items: center;
}

.menu .menu {
  margin-left: var(--menu-nested-margin);
}

.menu .menu-flat {
  margin-left: 0;
}

.menu .menu-list+h4,
.menu .menu-list+h5,
.menu .menu-list+h6 {
  margin-top: 5rem;
}

.menu :deep(.label) {
  margin-top: -2px;
}

.menu.large {
  --menu-font-size: var(--type-scale-18);
}

.menu.medium {
  --menu-font-size: var(--type-scale-14);
}

.menu.small {
  --menu-font-size: var(--type-scale-13);
}

.menu.semibold .menu-link {
  --menu-link-font-weight: var(--font-weight-semibold);
  --menu-link-active-font-weight: var(--font-weight-semibold);
}

.menu.semibold ::deep(.caret) {
  --caret-thickness: 2px;
}

.menu.strong .menu-link {
  --menu-link-font-weight: bold;
  --menu-link-active-font-weight: bold;
}

.menu.strong ::deep(.caret) {
  --caret-thickness: 2px;
}

.menu.underline .menu-link {
  text-decoration: underline;
}

.menu.underline-off .menu-link:hover {
  text-decoration: none;
}

.menu.primary {
  --menu-link-color: var(--palette-primary-dark);
  --menu-link-hover-color: var(--palette-primary-darker);
  --menu-link-active-color: var(--palette-black-40);
}

.menu.muted {
  --menu-link-color: var(--palette-black-60);
  --menu-link-hover-color: var(--palette-black);
  --menu-link-active-color: var(--palette-black);
}

.menu.light {
  --menu-link-color: var(--palette-white-80);
  --menu-link-hover-color: var(--palette-white);
  --menu-link-active-color: var(--palette-white-50);
}

.menu.stacked {
  --menu-item-border-color: var(--palette-black-7);
  --menu-link-padding-y: 8px;
  --menu-item-border-width: 1px;
  --menu-item-border-style: solid;
}

.menu.stacked .menu-item {
  border-bottom-width: var(--menu-item-border-width);
  border-bottom-style: var(--menu-item-border-style);
  border-bottom-color: var(--menu-item-border-color);
}

.menu.stacked .menu-item:last-child {
  border-bottom-color: transparent;
}

.menu.stacked.menu-light {
  --menu-item-border-color: var(--palette-white-20);
}

.menu.pills {
  --menu-link-color: var(--palette-black);
  --menu-link-hover-background-color: var(--palette-black-10);
  --menu-link-active-color: var(--palette-neutral-lightest);
  --menu-link-active-background-color: var(--palette-black);
  --menu-link-padding-y: 6px;
  --menu-link-padding-x: 10px;
  --menu-link-border-radius: var(--radius-base);
  --menu-item-space: 1px;
}

.menu.pills .menu-link {
  border-radius: var(--menu-link-border-radius);
}

.menu.pills .menu-link:hover {
  text-decoration: none;
}

.menu.numbered {
  --menu-number-color: var(--palette-black-60);
  --menu-number-font-size: 80%;
  --menu-number-width: 22px;
}

.menu.numbered .menu-list {
  counter-reset: numbers;
}

.menu.numbered .menu-item {
  display: flex;
  align-items: center;
  counter-increment: numbers;
}

.menu.numbered .menu-item:before {
  width: var(--menu-number-width);
  font-size: var(--menu-number-font-size);
  content: counter(numbers, decimal-leading-zero);
  color: var(--menu-number-color);
}

.menu.numbered.menu-light {
  --menu-number-color: var(--palette-white-60);
}

.menu.numbered-right .menu-item:before {
  display: none;
}

.menu.numbered-right .menu-item:after {
  width: var(--menu-number-width);
  font-size: var(--menu-number-font-size);
  content: counter(numbers, decimal-leading-zero);
  text-align: right;
}

@media (prefers-color-scheme: dark) {
  .menu {
    --menu-link-color: var(--palette-white-90);
    --menu-link-background-color: transparent;
    --menu-link-hover-color: var(--palette-white);
    --menu-link-hover-background-color: transparent;
    --menu-link-active-color: var(--palette-white-50);
    --menu-link-active-background-color: transparent;
  }

  .menu.stacked,
  .menu.stacked.light {
    --menu-item-border-color: var(--palette-white-15);
  }

  .menu.pills,
  .menu.pills.light {
    --menu-link-color: var(--palette-white-90);
    --menu-link-hover-background-color: var(--palette-white-15);
    --menu-link-active-color: var(--palette-black);
    --menu-link-active-background-color: var(--palette-white-90);
  }

  .menu.numbered,
  .menu.numbered.light {
    --menu-number-color: var(--palette-white-50);
  }

  .menu.primary {
    --menu-link-color: var(--palette-primary-light);
    --menu-link-hover-color: var(--palette-white-90);
    --menu-link-active-color: var(--palette-white-90);
  }

  .menu.muted {
    --menu-link-color: var(--palette-white-60);
    --menu-link-hover-color: var(--palette-white);
    --menu-link-active-color: var(--palette-white);
  }

  .menu.light {
    --menu-link-color: var(--palette-white-80);
    --menu-link-hover-color: var(--palette-white);
    --menu-link-active-color: var(--palette-white-50);
  }
}

a {
    color: var(--link-default-color);
  }
  
  a:hover {
    transition: all 0.1s linear;
    color: var(--link-default-hover-color);
  }

  nav ul,
  nav ol {
    margin-left: 0;
    list-style: none;
  }

  ul,
  ol {
    margin-left: 20px;
  }
  
  li li {
    font-size: 1em;
  }
</style>
