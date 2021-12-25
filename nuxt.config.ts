import { defineNuxtConfig } from '@nuxt/bridge-edge'

export default defineNuxtConfig({
  buildModules: ['@vueuse/core/nuxt', '@nuxt/bridge-edge'],
  css: ['~/styles/main.scss', '~/styles/main.scss'],
  target: 'static',
  components: true,
  bridge: {
    vite: true,
  },
})
