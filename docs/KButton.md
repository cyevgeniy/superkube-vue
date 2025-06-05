# KButton

<script setup>
import ComponentExample from './ComponentExample.vue';
import KButton from '../src/components/KButton.vue';
import '../src/palette.css';
</script>

A button.

::: raw
<ComponentExample flex>
    <KButton label="Sign in" rounded />
    <KButton label="Primary" mode="primary" />
    <KButton label="Dark" mode="dark"/>
    <KButton label="Light Outline" mode="light-outline"/>
</ComponentExample>
:::

```ts
interface Props {
    label?: string
    disabled?: boolean
    mode?: 'auto' | 'primary' | 'dark' | 'light' | 'light-outline'
    size?: 'auto' | 'large' | 'small'
    rounded?: boolean
    as?: 'a' | 'button'
    href?: string
    caretDirection?: CaretDirection | undefined
    loading?: boolean
}
```

## Props

### `label`

Defines the text of the button.

### `disabled`

If true, the button will be disabled.

### `mode`

Defines visual appearance of the button. The default value is `auto`.

```ts
interface Props {
    mode?: 'auto' | 'primary' | 'dark' | 'light' | 'light-outline'
}
```

### `size`

Defines the size of the button. The default value is `auto`.

```ts
interface Props {
    size?: 'auto' | 'large' | 'small'
}
```

### `rounded`

If true, the button will be rounded. The default value is `false`.


### `as`

Specifies the tag which will be used for the button representation.
The default value is `button`.

```ts
interface Props {
    as?: 'a' | 'button'
}
```

### `href`

Defines the link for the button when `as='a'`.
If the button is created with `as='button'`, the `href` prop is ignored.

Example:

```vue
<KButton label="Register" as='a' href="https://example.com" />
```

### `caret-direction`

Defines the caret direction. If this prop is not specified, the caret is
not shown.

```ts
export type CaretDirection = 'left' | 'up' | 'down' | 'right'

interface Props {
    caretDirection?: CaretDirection | undefined
}
```

::: raw
<ComponentExample>
    <KButton label="More options" caret-direction='right' />
</ComponentExample>
:::

### `loading`

If true, displays a loading spinner. If the button is in the loading state,
the `click` event is not emitted.

::: raw
<ComponentExample>
    <KButton label="More options" loading />
</ComponentExample>
:::


## Events

### `@click`

The `click` event is emitted when a user has clicked on the button.
It won't be emitted if the button is disabled.