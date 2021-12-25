import { defineNuxtConfig } from '@nuxt/bridge-edge'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt', '@nuxt/bridge-edge', '@nuxtclub/feathericons'],
  css: ['~/styles/main.scss', '~/styles/main.scss'],
  target: 'static',
  components: true,
  bridge: {
    vite: true,
  },
})
