/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import browserslist from 'browserslist'
import { browserslistToTargets, Features } from 'lightningcss'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      include: Features.Nesting,
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    testTimeout: 2000,
  },
})
