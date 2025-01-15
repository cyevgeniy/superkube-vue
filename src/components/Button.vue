<script setup lang="ts">
import { computed } from 'vue'
import Caret from '../components/Caret.vue'
import type { CaretDirection } from '../components/Caret.vue'

const props = withDefaults(defineProps<{
  label?: string
  disabled?: boolean
  mode?: 'auto' | 'primary' | 'dark' | 'light' | 'light-outline'
  size?: 'auto' | 'large' | 'small'
  rounded?: boolean
  as?: 'a' | 'button'
  href?: string
  caretDirection?: CaretDirection | undefined
  loading?: boolean
}>(), {
    mode: 'auto',
    size: 'auto',
})

const emit = defineEmits<{
  (evt: 'click'): void
}>()

function handleClick() {
  if (!(props.disabled || props.loading))
    emit('click')
}

const classes = computed(() => [
  {
    disabled: !!props.disabled,
    loading: !!props.loading,
    'button-round': !!props.rounded
  },
  props.mode,
  props.size
])

</script>

<template>
    <component :is="as ?? 'button'" class="button" :class="classes" :disabled="disabled" :href="href" @click="handleClick" data-testid="button">
      <span class="content">  
        <template v-if="$slots.leftIcon">
          <span class="button-icon">
            <slot name="leftIcon" />
          </span>
        </template>
        <span class="button-label">{{ label }}</span>
        <template v-if="$slots.rightIcon">
          <span class="button-icon">
            <slot name="rightIcon" />
          </span>
        </template>
        <Caret v-if="caretDirection" :direction="caretDirection" />
      </span>
      <Transition name="fade">
        <span v-if="loading" class="spinner">
          <svg view-box="0 0 24 24" width="24" height="24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>
        </span>
      </Transition>
    </component>
</template>

<style scoped>


.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.button {
    --button-background-color: transparent;
    --button-border-color: var(--palette-black-20);
    --button-color: var(--palette-neutral-darker);
    --button-hover-background-color: var(--palette-black-5);
    --button-hover-border-color: var(--palette-black-20);
    --button-hover-color: var(--palette-black);
    --button-disabled-background-color: transparent;
    --button-disabled-border-color: var(--palette-black-20);
    --button-disabled-color: var(--palette-black-80);
    --button-font-size: var(--type-scale-15);
    --button-font-weight: var(--font-weight-semibold);
    --button-border-radius: var(--radius-base);
    --button-line-height: 1;
    --button-letter-spacing: 0;
    --button-text-transform: none;
    --button-padding-y: 0;
    --button-padding-x: 23px;
    --button-border-width: 1px;
    --button-border-style: solid;
    --button-opacity: 1;
    --button-box-shadow: none;
    --button-height: 42px;
    -webkit-appearance: none;
    
    vertical-align: baseline;
    text-align: center;
    font-family: inherit;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    height: var(--button-height);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
    line-height: var(--button-line-height);
    letter-spacing: var(--button-letter-spacing);
    text-transform: var(--button-text-transform);
    border-radius: var(--button-border-radius);
    padding-top: calc(var(--button-padding-y) * 1px + 1px);
    padding-bottom: var(--button-padding-y);
    padding-left: var(--button-padding-x);
    padding-right: var(--button-padding-x);
    border-width: var(--button-border-width);
    border-style: var(--button-border-style);
    box-shadow: var(--button-box-shadow);
    opacity: var(--button-opacity);
    color: var(--button-color);
    border-color: var(--button-border-color);
    background-color: var(--button-background-color);
    background-image: var(--button-background-image);
    position: relative;
  }

  .content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.25s, transform 0.25s;
  }

  .button.loading .content {
    opacity: 0;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.25s, transform 0.25s;
  }

.spinner.fade-enter-from,
.spinner.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5);
}


  .button:hover {
    outline: none;
  }
  .button:hover, .button:focus {
    background-image: none;
    text-decoration: none;
    color: var(--button-hover-color);
    border-color: var(--button-hover-border-color);
    background-color: var(--button-hover-background-color);
    background-image: var(--button-hover-background-image);
    box-shadow: var(--button-hover-box-shadow);
  }
  .button.disabled, .button:disabled {
    --button-opacity: 0.5;
    cursor: default;
    color: var(--button-disabled-color);
    border-color: var(--button-disabled-border-color);
    background-color: var(--button-disabled-background-color);
    background-image: var(--button-disabled-background-image);
    box-shadow: var(--button-disabled-box-shadow);
  }
  .button .button-icon + .button-label {
    margin-left: 6px;
  }
  .button .button-label + .button-icon {
    margin-left: 6px;
    margin-right: -3px;
  }
  .button .caret {
    --caret-thickness: 2px;
    margin-left: 4px;
    margin-right: -4px;
  }
  
  .button.primary {
    --button-background-color: var(--palette-primary-base);
    --button-border-color: transparent;
    --button-color: var(--palette-primary-lightest);
    --button-hover-background-color: var(--palette-primary-dark);
    --button-hover-border-color: transparent;
    --button-hover-color: var(--palette-primary-lightest);
    --button-disabled-background-color: var(--palette-black-70);
    --button-disabled-border-color: transparent;
    --button-disabled-color: var(--palette-white-70);
  }
  
  .button.dark {
    --button-background-color: var(--palette-black);
    --button-border-color: transparent;
    --button-color: var(--palette-neutral-lightest);
    --button-hover-background-color: var(--palette-neutral-darker);
    --button-hover-border-color: transparent;
    --button-hover-color: var(--palette-neutral-lightest);
    --button-disabled-background-color: var(--palette-black-70);
    --button-disabled-border-color: transparent;
    --button-disabled-color: var(--palette-white-70);
  }
  
  .button.light {
    --button-background-color: var(--palette-white-95);
    --button-border-color: transparent;
    --button-color: var(--palette-black);
    --button-hover-background-color: var(--palette-white-80);
    --button-hover-border-color: transparent;
    --button-hover-color: var(--palette-black);
    --button-disabled-background-color: var(--palette-white-95);
    --button-disabled-border-color: transparent;
    --button-disabled-color: var(--palette-black-80);
  }
  
  .button.light-outline {
    --button-background-color: transparent;
    --button-border-color: var(--palette-white-60);
    --button-color: var(--palette-white-90);
    --button-hover-background-color: var(--palette-white-7);
    --button-hover-border-color: var(--palette-white-80);
    --button-hover-color: var(--palette-white);
    --button-disabled-background-color: var(--palette-white-95);
    --button-disabled-border-color: transparent;
    --button-disabled-color: var(--palette-black-80);
  }
  
  .button.large {
    --button-font-size: var(--type-scale-16);
    --button-height: 52px;
    --button-padding-x: 29px;
  }
  
  .button.small {
    --button-font-size: var(--type-scale-14);
    --button-height: 32px;
    --button-padding-x: 14px;
    padding-top: 0;
  }
  
  .button-round {
    --button-border-radius: 99px;
  }
  
  @media (prefers-color-scheme: dark) {
    .button {
      --button-background-color: transparent;
      --button-border-color: var(--palette-white-40);
      --button-color: var(--palette-white-80);
      --button-hover-background-color: var(--palette-white-7);
      --button-hover-border-color: var(--palette-white-60);
      --button-hover-color: var(--palette-white);
      --button-disabled-background-color: var(--palette-white-70);
      --button-disabled-border-color: transparent;
      --button-disabled-color: var(--palette-black-80);
    }
    .button.primary {
      --button-background-color: var(--palette-primary-base);
      --button-border-color: transparent;
      --button-color: var(--palette-primary-lighter);
      --button-hover-background-color: var(--palette-primary-mid);
      --button-hover-border-color: transparent;
      --button-hover-color: var(--palette-primary-lightest);
      --button-disabled-background-color: var(--palette-white-70);
      --button-disabled-border-color: transparent;
      --button-disabled-color: var(--palette-black-80);
    }
    .button.dark {
      --button-background-color: var(--palette-white-90);
      --button-border-color: transparent;
      --button-color: var(--palette-black);
      --button-hover-background-color: var(--palette-white);
      --button-hover-border-color: transparent;
      --button-hover-color: var(--palette-black);
      --button-disabled-background-color: var(--palette-white-70);
      --button-disabled-border-color: transparent;
      --button-disabled-color: var(--palette-black-80);
    }
    .button.light {
      --button-background-color: var(--palette-white-90);
      --button-border-color: transparent;
      --button-color: var(--palette-black);
      --button-hover-background-color: var(--palette-white);
      --button-hover-border-color: transparent;
      --button-hover-color: var(--palette-black);
      --button-disabled-background-color: var(--palette-white-70);
      --button-disabled-border-color: transparent;
      --button-disabled-color: var(--palette-black-80);
    }
    .button.light-outline {
      --button-background-color: transparent;
      --button-border-color: var(--palette-white-60);
      --button-color: var(--palette-white-80);
      --button-hover-background-color: var(--palette-white-7);
      --button-hover-border-color: var(--palette-white-80);
      --button-hover-color: var(--palette-white);
      --button-disabled-background-color: var(--palette-white-70);
      --button-disabled-border-color: transparent;
      --button-disabled-color: var(--palette-black-80);
    }
  }
</style>