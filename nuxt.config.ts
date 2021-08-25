import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

const config: NuxtConfig = {
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    'nuxt-windicss',
    'unplugin-vue2-script-setup/nuxt',
    ['unplugin-auto-import/nuxt', { imports: ['@nuxtjs/composition-api'] }],
  ],
  plugins: [
    '~/plugins/main.ts',
  ],
  css: [
    '~/styles/main.css',
  ],
  vite: {
    build: true,
    // ssr: true,
    plugins: [
      ViteComponents({
        dirs: [
          resolve('./components'),
        ],
        customComponentResolvers: [
          ViteIconsResolver({
            componentPrefix: '',
          }),
        ],
        globalComponentsDeclaration: true,
      }),
      ViteIcons(),
    ],
  },
}

export default config
