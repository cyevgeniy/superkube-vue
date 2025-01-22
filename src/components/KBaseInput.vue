<script setup lang="ts">
import { computed } from 'vue'


export interface KBaseInputProps {
    label?: string
    hint?: string
    required?: boolean
    hintPosition?: HintPosition
    light?: boolean
    state?: State
    error?: string
}

export type State = 'neutral' | 'success' | 'error'
export type HintPosition = 'top' | 'bottom'

const props = withDefaults(defineProps<KBaseInputProps>(), {
    hintPosition: 'bottom'
})

const showTopHint = computed(() => props.hint && props.hintPosition === 'top')
const showBottomHint = computed(() => props.hint && props.hintPosition === 'bottom')

const hintClasses = computed(() => [
    props.state || 'neutral',
    props.light && 'light',
    props.required && 'req',
])

</script>

<template>
    <div data-testid="baseInput">
        <label v-if="label" data-testid="inputLabel">
            {{ label }}
            <span class="hint req" data-testid="reqHint">*</span>
            <span v-if="showTopHint" class="hint" :class="hintClasses" data-testid="topHint">
                {{ hint }}
            </span>
        </label>
        <div class="input-group">
            <span v-if="$slots.prependAddon" class="input-addon">
                <slot name="prependAddon" />
            </span>

            <slot />
            
            <span v-if="$slots.appendAddon" class="input-addon">
                <slot name="appendAddon" />
            </span>
        </div>
        <div v-if="showBottomHint" class="hint" :class="hintClasses" data-testid="bottomHint"> {{ hint }} </div>
    </div>
</template>

<style scoped>
.input-group {
    display: flex;
}

.input-group :deep(.input) {
    flex: 1;
    margin-left: -1px;
    margin-right: -1px;
}

.input-group> :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.input-group> :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.hint {
    --hint-color: var(--palette-black-50);
    --hint-font-size: var(--type-scale-13);
    --hint-font-weight: normal;
    --hint-font-style: normal;
    --hint-line-height: var(--body-text-line);
    font-size: var(--hint-font-size);
    font-weight: var(--hint-font-weight);
    font-style: var(--hint-font-style);
    line-height: var(--hint-line-height);
    color: var(--hint-color);
}

label .hint {
    text-transform: none;
    font-weight: normal;
    letter-spacing: 0;
}

/** Add a gap between required hint and an ordinary hint with position='top' */
label .hint + .hint {
    margin-left: 4px;
}

div.hint {
    margin-top: 2px;
}

.hint.light {
    --hint-color: var(--palette-white-70);
}

.hint.success {
    --hint-color: var(--palette-positive-dark);
}

.hint.success.light {
    --hint-color: var(--palette-positive-mid);
}

.hint.error {
    --hint-color: var(--palette-negative-dark);
}

.hint.req {
    --hint-color: var(--palette-negative-base);
    --hint-font-weight: bold;
    font-size: 105%;
}

.hint.req.light,
.hint.error.light {
    --hint-color: var(--palette-negative-mid);
}

@media (prefers-color-scheme: dark) {
    .hint {
        --hint-color: var(--palette-white-50);
    }

    .hint.success {
        --hint-color: var(--palette-positive-mid);
    }

    .hint.error {
        --hint-color: var(--palette-negative-mid);
    }

    .hint.req {
        --hint-color: var(--palette-negative-mid);
    }
}

.input-addon {
  --input-addon-color: var(--palette-black-60);
  --input-addon-background-color: var(--palette-black-5);
  --input-addon-border-color: var(--palette-black-10);
  --input-addon-font-size: 14px;
  --input-addon-padding: 0 0.85em;
  --input-addon-border-radius: var(--radius-small);
  --input-addon-border-width: 1px;
  --input-addon-border-style: solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-size: var(--input-addon-font-size);
  padding: var(--input-addon-padding);
  border-radius: var(--input-addon-border-radius);
  color: var(--input-addon-color);
  background-color: var(--input-addon-background-color);
  border-width: var(--input-addon-border-width);
  border-style: var(--input-addon-border-style);
  border-color: var(--input-addon-border-color);
}

@media (prefers-color-scheme: dark) {
  .input-addon {
    --input-addon-color: var(--palette-white-60);
    --input-addon-background-color: var(--palette-white-10);
    --input-addon-border-color: transparent;
  }
}
</style>
